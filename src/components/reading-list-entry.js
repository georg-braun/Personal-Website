import React from "react"


export default ({title, url, comment}) => (
    <div>
        <li>
      <p>{title}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </li>
    </div>
)