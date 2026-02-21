/** @param {string} tag */
export function getTagColor(tag) {
    return colorCodes[tag] ?? "lightgray";
}

/** @type {Record<string, string>} */
const colorCodes = {
    /** Backend */
    "dotnet": "rgba(75,41,205,0.5)",
    "asp.net": "rgba(75,41,205,0.5)",
    /** Web frontend */
    "sveltekit": "rgba(236,96,50,0.5)",
    /** Database */
    /** DevOps */
    "docker": "rgba(69,149,203,0.5)",
    "devops": "rgba(69,149,203,0.5)",
}