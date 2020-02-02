import React from "react"

export default ({ title, url, comment }) => {

  return (
  <div>
    <li>
      {title} (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>)
      <p>
      <small>{comment}</small>
      </p>
    </li>
  </div>
  )
}
