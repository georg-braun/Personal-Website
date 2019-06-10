# Persönliche Webseite

## Stammbaum

### Aufbau der Datenstruktur (d3Tree)

```javascript
"name" : "...",
"class" : "man|woman",
"textClass": "emphasis|...",
"extra": {
    "nickname": "..."
}
"marriages": [{
    "spouse": {
        "name": "..."
        ...
    },
    "children": [{
        ...
    }]
}]
```