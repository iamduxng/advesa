import React from 'react';
import { observer } from 'mobx-react';
import { Grid } from '@material-ui/core';

const Post = observer((props) => {
  let { user, post } = props;

  return <Grid item xs={12} sm={12} md={6}>
    <div className="post">
      <div className="post-user flex-center-start">
        <div className="post-user__avatar">
          <img src='/user.png' alt='Img'/>
        </div>
        <div className="post-user__info">
          <div className="">{user.name}</div>
          <div className="">{user.email} | {user.address.city}</div>
        </div>
      </div>
      <div className="post-details">
        <div className="post-details__title text-row-truncate-v1">
          <b>{post.title}</b>
        </div>
        <div className="post-details__body text-2row-truncate-v1">
          {post.body}
        </div>
      </div>
    </div>
  </Grid>
});

export default Post;