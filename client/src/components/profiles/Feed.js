import React, {useEffect} from 'react'
import {Route, Switch,  useRouteMatch} from 'react-router-dom'
import FeedHeading from './FeedHeading'

function Feed({user}) {
  let { path, url } = useRouteMatch()
  const [pathState, setPathState] = React.useState('posts')
  const [elements, setElements] = React.useState([])

  useEffect(() => {
    fetch(`/users/${user.username}/${pathState}`)
    .then(r=>r.json())
    .then(data=>console.log(data))
  }, [pathState])


  console.log('path is ',path, url)

  return (
    <div className='profile-feeds'>
      <FeedHeading url={url} setPathState={setPathState} />
      <Switch>
        <Route exact path={path}><h1>Posts</h1></Route>
        <Route path={`${url}/with_replies`}><h1>Replies</h1></Route>
        <Route path={`${url}/media`}><h1>Media</h1></Route>
        <Route path={`${url}/likes`}><h1>Likes</h1></Route>
      </Switch>
    </div>
  )
}

export default Feed;