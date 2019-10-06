import { observable, action, 
	configure, runInAction, decorate, computed } from "mobx";
import { API_URL, MOBX_STATE } from 'utils/constants';
import axios from "axios";

configure({ enforeActions: "observed" })

class AdvesaApi {
  users = [];
  posts = [];
  filteredUsers = [];
  filteredPosts = [];
  stateUser = MOBX_STATE.pending;
  statePost = MOBX_STATE.pending;

  get fUsers() {
    return this.users || this.filteredUsers;
  } 

  get fPosts() {
    return this.posts || this.filteredPosts;
  }

  getUsersAndPosts() {
    this.users = [];
    this.posts = [];
    this._setStates(MOBX_STATE.pending);
    axios.all([
      axios.get(`${API_URL}/users`),
      axios.get(`${API_URL}/posts`)
    ]).then(
      ([users, posts]) => {
        runInAction(() => {
          this.users = users.data || [];
          this.posts = posts.data || [];
          this._setStates(MOBX_STATE.done);
        })
      }
    ).catch(
      error => {
        runInAction(() => {
          this._setStates(MOBX_STATE.error);
        })
      }
    )
  }

  filterPosts(keyword) {
    this.filteredUsers = [];
    this.filteredPosts = [];
    this._setStates(MOBX_STATE.pending);

    this.filteredUsers = this.users.filter(user => user.name.includes(keyword));

    this._setStates(MOBX_STATE.done);
  }

  _setStates(state) {
    this.stateUser = state;
    this.statePost = state;
  }
}

decorate(AdvesaApi, {
  users: observable,
  posts: observable,
  stateUser: observable,
  statePost: observable,
  fUsers: computed,
  fPosts: computed,
  getUsersAndPosts: action
});

export default AdvesaApi

