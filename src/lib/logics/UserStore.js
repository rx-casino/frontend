import { action, makeObservable, observable } from "mobx";
import { api_script} from "$lib/store/screen.js";

export default class UserStore {
  static __instance;
  static getInstance() {
    if (!UserStore.__instance) {
      UserStore.__instance = new UserStore();
    }
    return UserStore.__instance;
  }
  constructor() {
    this.user = null;
    this.authToken = null;
    makeObservable(this, {
      authToken: observable,
      user: observable.ref,
      setUser: action,
      setAuthToken: action,
    });

    api_script.subscribe((item) => {
      this.setUser(
        !!item.is_login
          ? {
              ...item.user,
              userId: item.user.user_id,
              username: item.user.username,
              avatar: item.user.profile_image,
              hidden: item.user.hide_profile
            }
          : null
      );
    });
    api_script.subscribe((token) => {
      this.setAuthToken(token.secret);
    });
  }

  setUser(user) {
    this.user = user;
  }
  setAuthToken(token) {
    this.authToken = token;
  }

  async waitLogin() {
    return new Promise((resolve) => {
      if (this.authToken) return resolve(this.authToken);
      setTimeout(() => {
        resolve(this.waitLogin());
      }, 300);
    });
  }
}
