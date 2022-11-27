import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import api_key from '../../news_key'
import './styles/style.css'
import { useHistory } from 'react-router-dom'

function Newsfeed() {
  const [news, setNews] = useState([])
  const history = useHistory()

  const url = (`https://newsapi.org/v2/everything?`+
    `q=New&`+
    `sortBy=dat&`+
    `apiKey=${api_key}`)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles?.slice(0,3))
      })
  },[])


  const newsCards = news?.map((article, index) => {
    return <NewsCard key={index} props={article} />
  })


  return (
    <div className='Newsfeed'>
      <h2>What's happening</h2>
      <div className='list'>
        {newsCards}
      </div>
      <div className='show-more' onClick={()=>history.push('/explore')}>
        <p>Show More</p>
      </div>
    </div>
  )
}

export default Newsfeed