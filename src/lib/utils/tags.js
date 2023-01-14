export function getTagColor(tag){
    return colorCodes[tag] ?? "lightgray";
}


const colorCodes = {
    "dotnet": "rgba(75,41,205,0.5)",
    "asp.net": "rgba(75,41,205,0.5)",
    "docker": "rgba(69,149,203,0.5)",
}