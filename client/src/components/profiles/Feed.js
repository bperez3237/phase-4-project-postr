import React, {useEffect, useState} from 'react'
import {Route, Switch,  useRouteMatch} from 'react-router-dom'
import FeedHeading from './FeedHeading'
import PostList from '../post/PostList'

function Feed({user, location}) {
  let { path, url } = useRouteMatch()
  const [posts, setPosts] = useState(null)
  const [pathState, setPathState] = React.useState('posts')

  useEffect(() => {
    fetch(`/users/${user.username}/${pathState}`)
    .then(r=>r.json())
    .then(data=>setPosts(data))
  }, [pathState, user])

  return (
    <div className='profile-feeds'>
      <FeedHeading url={url} setPathState={setPathState} />
      <Switch>
        <Route exact path={path}>
          <PostList location={location} currentUser={user} editable={true} posts={posts} setPosts={setPosts} /> 
        </Route>
        <Route path={`${url}/with_replies`}><h1>Replies</h1></Route>
        <Route path={`${url}/media`}><h1>Media</h1></Route>
        <Route path={`${url}/likes`}>
          <PostList location={location} currentUser={user} editable={true} posts={posts} setPosts={setPosts} />
        </Route>
      </Switch>
    </div>
  )
}

export default Feed;