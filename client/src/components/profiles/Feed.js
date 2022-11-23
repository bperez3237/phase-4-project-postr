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
  

  return (
    <div className='profile-feeds'>
      <FeedHeading path={path} setPathState={setPathState} />
      <Switch>
        <Route exact path={path}><h1>Posts</h1></Route>
        <Route path={`${path}/with_replies`}><h1>Replies</h1></Route>
        <Route path={`${path}/media`}><h1>Media</h1></Route>
        <Route path={`${path}/likes`}><h1>Likes</h1></Route>
      </Switch>
    </div>
  )
}

export default Feed;