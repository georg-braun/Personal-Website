---
title: "Add token authentication to your ASP.NET integration tests"
date: 2022-09-14
tags: ["asp.net", "test"]
---

At the moment I develop a new side project to handle the maintenances of my vehicles. This project includes an ASP.NET core API and the frontend will be a Svelte SPA.

Yesterday evening I started with the implementation of a multi tenant architecture in the API project. Therefore it was necessary to add authentication and authorization. Propably I will use Auth0 for the production environment (for SPA and API authentication + authorization). But I use a TDD approach to develop the project and I first had to setup a Bearer Authentication for my ASP.NET API integration tests.

# Add authentication and authorization to the API

I added these two lines to the `Program.cs`.

```csharp
builder.AddBearerAuthentication();
builder.RequireAuthenticatedUsers();
```

This are just two calls to the following extenions methods I created. They setup a Bearer authentication scheme and enforce authenticated users.

```csharp
public static class WebApplicationBuilderExtensions
{
    public static WebApplicationBuilder AddBearerAuthentication(this WebApplicationBuilder builder)
    {
        
        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, jwtOptions =>
            {
                // I put the Auth0 configuration here later
            });

        return builder;
    }

    public static WebApplicationBuilder RequireAuthenticatedUsers(this WebApplicationBuilder builder)
    {
        builder.Services.AddAuthorization(o =>
        {
            o.FallbackPolicy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .Build();
        });

        return builder;
    }
}
```

# Modify the integration tests to supply a token

The interesting part is the modification of the integration test project.

I will first show the modification of the `WebApplicationFactory`. I already had a derived `WebApplicationFactory` to add a SQLite database for the integration tests. In the following code I removed the code that is not relevant at this point.

```csharp

public class SqLiteWebApplicationFactory<TStartup>
    : WebApplicationFactory<TStartup> where TStartup : class
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        // ... some builder stuff

        SetTokenValidationParameters(builder);
    }
    
    /// <summary>
    /// Modifies the existing Token Validation Parameters in the web server app.
    /// The result is that the web server accepts tokens issued from the test project.
    /// </summary>
    private void SetTokenValidationParameters(IWebHostBuilder builder)
    {
        builder.ConfigureTestServices(services =>
        {
            services.PostConfigure<JwtBearerOptions>(JwtBearerDefaults.AuthenticationScheme, options =>
            {
                // modify the token validation parameters in the server configuration
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    IssuerSigningKey = TestTokenIssuer.SecurityKey,
                    ValidIssuer = TestTokenIssuer.Issuer,
                    ValidAudience = TestTokenIssuer.Audience
                };
            });
        });
    }
}
```

Essentially the code is only modifying the Token Validation Parameters to values that are provided by the test application and not by an identity provider like Auth0.

You may ask what the `TestTokenIssuer` is doing. There is no really magic. This class only generates some GUIDs to identify the `Issuer` and `Audience` and a `SecurityKey` to sign and verify the Token.

```csharp
public class TestTokenIssuer
{
    public static string Issuer { get; } = Guid.NewGuid().ToString();
    public static string Audience { get; } = Guid.NewGuid().ToString();
    public static SecurityKey SecurityKey { get; }
    private static SigningCredentials SigningCredentials { get; }

    static TestTokenIssuer()
    {
        // create a key to sign and validate the token
        var key = new byte[32];
        RandomNumberGenerator.Create().GetBytes(key);
        SecurityKey = new SymmetricSecurityKey(key) {KeyId = Guid.NewGuid().ToString()};
        SigningCredentials = new SigningCredentials(SecurityKey, SecurityAlgorithms.HmacSha256);
    }

    public static string GenerateBearerToken()
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        // add an identity to the token
        var claim = new Claim(ClaimTypes.NameIdentifier, Guid.NewGuid().ToString());

        // create the token
        return tokenHandler.WriteToken(new JwtSecurityToken(Issuer, Audience, new[] {claim}, null,
            DateTime.UtcNow.AddMinutes(60), SigningCredentials));
    }
}
```

There is one method that hasn't be used yet: `GenerateBearerToken`. This method is used to generate a new token that can be added to the header of a client created by the `WebApplicationFactory`.

```csharp
var appFactory = new SqLiteWebApplicationFactory<Program>(_connection);
appFactory.CreateClient();
        
// add the bearer token
client.DefaultRequestHeaders.Authorization =
    new AuthenticationHeaderValue("Bearer", TestTokenIssuer.GenerateBearerToken());
```

That's all. Now I can write API tests that supply authentication informations without attaching an identity provider service like Auth0.

For example I can access the user information in an API endpoint with the following code
```csharp
public static async Task<IResult> CreateVehicle(CreateVehicleCommand command, VehicleContext context, ClaimsPrincipal claims)
{
    Console.WriteLine(claims.FindFirstValue(ClaimTypes.NameIdentifier))
    // ...
}
```