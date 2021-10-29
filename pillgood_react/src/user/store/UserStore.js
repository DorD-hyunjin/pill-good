import { makeAutoObservable } from "mobx";
import UserApi from "../api/UserApi";

class UserStore {
    user = {email:"",
            password:"",
            name:"",
            phone:"",
            };  // observable
    users = [];

    message = "";

    // userAPI = new UserApi();

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }


    // action part

    // 1. Join
    async handlerJoin(check) {
      if (check !== "okay") {
        return alert("비밀번호가 일치하지 않습니다.")
      }
      const result = await UserApi.userJoin(this.user);
      alert(result.message); 
      window.location.replace("/");
    }




    // 2. Login
    async handlerLogin() {
      const result = await UserApi.userLogin(this.user.email, this.user.password);
      alert(result.message);
      if (result.message !== "이메일 또는 비밀번호가 정확하지않습니다.") {
      window.localStorage.setItem('email', result.email);
      window.localStorage.setItem('name', result.name);
      window.localStorage.setItem('id', result.id);
      window.localStorage.setItem('is_admin', result.is_admin);
      window.localStorage.setItem('type', result.type);
      window.sessionStorage.setItem('email', result.email);
      window.sessionStorage.setItem('name', result.name);
      window.sessionStorage.setItem('id', result.id);
      window.sessionStorage.setItem('is_admin', result.is_admin);
      window.localStorage.setItem('type', result.type);
      window.location.replace("/");
      }
    }


    // 3. Logout
    handlerLogout() {
      window.localStorage.clear();
      window.sessionStorage.clear();
      window.location.replace("/");
    }


    // 4. input att bind
    handlerSet = (name, value) => {
      this.user = {...this.user, [name]:value}
      
    }
}

export default new UserStore();
