import React from "react";
import NewsCard from "./NewsCard";
import api_key from "../../news_key";
import "./styles/style.css";
import { useHistory } from "react-router-dom";
import useGet from "../../hooks/useGet";

function Newsfeed() {
  const history = useHistory();

  const url =
    `https://newsapi.org/v2/everything?` +
    `q=News&` +
    `sortBy=date&` +
    `apiKey=${api_key}`;

  const { data: news } = useGet(url);

  const newsCards = news.articles?.slice(0, 3).map((article, index) => {
    return <NewsCard key={index} props={article} />;
  });

  return (
    <div className="Newsfeed">
      <h2>What's happening</h2>
      {newsCards}
      <div className="show-more" onClick={() => history.push("/explore")}>
        <p>Show More</p>
      </div>
    </div>
  );
}

export default Newsfeed;
