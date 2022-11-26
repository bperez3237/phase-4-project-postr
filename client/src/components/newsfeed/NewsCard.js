import React from 'react'

function NewsCard({props}) {
  return (
    <div className='news-card' onClick={()=>window.open(props.url)}>
        <div className='card-body'>
            <h4>{props.source.name}{props.author}</h4>
            <h2>{props.title}</h2>
        </div>
        <img alt='article' src={props.urlToImage}/>
    </div>
  )
}

export default NewsCard