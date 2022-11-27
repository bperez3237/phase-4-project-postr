import React from 'react'
import {Route, Switch,  useRouteMatch} from 'react-router-dom'
import FeedHeading from './FeedHeading'
import PostList from '../post/PostList'
import useGet from '../../hooks/useGet'

function Feed({user, location}) {
  let { path, url } = useRouteMatch()
  const [pathState, setPathState] = React.useState('posts')

  const {data: posts, setData: setPosts} = useGet(`/users/${user.username}/${pathState}`)


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