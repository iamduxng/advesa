import React, { useEffect, lazy } from 'react';
import { useStores } from 'utils/utils';
import { MOBX_STATE } from 'utils/constants';
import { observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import { LoadingSpinner, withSuspense } from 'components/shares';

const Post = withSuspense(lazy(() => import('./Post/Post')));

const useAdvesaApi = () => {
  let { store } = useStores();
  return store.advesaApi;
}

const ListPosts = observer((props) => {
  const advesaApi = useAdvesaApi();

  useEffect(() => {
    advesaApi.getUsersAndPosts();
  },[]);

  useEffect(() => {
    advesaApi.keyword = props.keyword;
  },[props.keyword]);

  return <div className="list-posts">
    {(advesaApi.stateUser === MOBX_STATE.pending && advesaApi.statePost === MOBX_STATE.pending) ? 
      <LoadingSpinner />
      :
      <Grid container spacing={3}>
        {advesaApi.fUsers && advesaApi.fUsers.map(user => {
          let posts = advesaApi.fPosts.filter(post => post.userId === user.id);
          return posts.map(post => <Post key={`${post.id}-${user.username}`} user={user} post={post}/>);
        })}
      </Grid>
    }
  </div>
});

export default ListPosts;