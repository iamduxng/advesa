import { observable, action, 
	configure, runInAction, decorate, computed } from "mobx";
import { API_URL, MOBX_STATE } from 'utils/constants';
import axios from "axios";

configure({ enforeActions: "observed" })

class AdvesaApi {
  stateUser = MOBX_STATE.pending;
  statePost = MOBX_STATE.pending;
  keyword = '';
  
  _users = [];
  _posts = [];

  get fUsers() {
    let fUsers = this._users.filter(user => user.name.includes(this.keyword));
    return fUsers.length > 0 ? fUsers : this._users;
  }

  get fPosts() {
    let fPosts = this._posts.filter(post => post.title.includes(this.keyword) || post.body.includes(this.keyword));
    return fPosts.length > 0 ? fPosts : this._posts;
  }

  getUsersAndPosts() {
    this._users = [];
    this._posts = [];
    this._setStates(MOBX_STATE.pending);

    axios.all([
      axios.get(`${API_URL}/users`),
      axios.get(`${API_URL}/posts`)
    ]).then(
      ([users, posts]) => {
        runInAction(() => {
          this._users = users.data || [];
          this._posts = posts.data || [];
          this.keyword = '';
          this._setStates(MOBX_STATE.done);
        })
      }
    ).catch(
      error => {
        runInAction(() => {
          this._setStates(MOBX_STATE.error);
        })
      }
    );
  }

  _setStates(state) {
    this.stateUser = state;
    this.statePost = state;
  }
}

decorate(AdvesaApi, {
  keyword: observable,
  stateUser: observable,
  statePost: observable,
  fUsers: computed,
  fPosts: computed,
  getUsersAndPosts: action,
  filterPosts: action
});

export default AdvesaApi

