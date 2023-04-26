import React from "react";

function NewsCard({ props }) {
  return (
    <div className="news-card" onClick={() => window.open(props.url)}>
      <div className="headline">
        <h4>
          {props.source.name}
          {props.author.includes("https://") ? "" : ` - ${props.author}`}
        </h4>
        <h2>
          {props.title.length > 50
            ? `${props.title.slice(0, 50)}...`
            : props.title}
        </h2>
      </div>
      <img alt="article" src={props.urlToImage} />
    </div>
  );
}

export default NewsCard;
