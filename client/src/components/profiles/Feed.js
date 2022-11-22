import React from 'react'
import {Route, Switch,  useRouteMatch} from 'react-router-dom'

function Feed() {
  let { path, url } = useRouteMatch()
  return (
    <div className='profile-feeds'>
      <Switch>
        <Route exact path={path}><h1>Posts</h1></Route>
        <Route path={`${path}/posts & replies`}><h1>Replies</h1></Route>
        <Route path={`${path}/media`}><h1>Media</h1></Route>
        <Route path={`${path}/likes`}><h1>Likes</h1></Route>
      </Switch>
    </div>
  )
}

export default Feed