import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import './styles/style.css'

function Newsfeed() {
  const [news, setNews] = useState([])

  const url = (`https://newsapi.org/v2/everything?`+
    `q=Apple&`+
    `sortBy=dat&`+
    `apiKey=`)

  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setNews(data))
  // },[])

  console.log(news)
  const newsCards = news.articles?.map((article, index) => {
    return <NewsCard key={index} props={article} />
  })


  return (
    <div className='Newsfeed'>
      <h2>What's happening</h2>
      {newsCards}
    </div>
  )
}

export default Newsfeed