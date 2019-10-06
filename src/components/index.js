import { lazy } from 'react';
import { withSuspense } from './shares';

const ListPosts = withSuspense(lazy(() => import('./ListPosts/ListPosts')));
const SearchField = withSuspense(lazy(() => import('./SearchField/SearchField')));

export {
  ListPosts,
  SearchField
}