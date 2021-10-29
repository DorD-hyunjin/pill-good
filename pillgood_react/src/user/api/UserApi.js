import axios from 'axios';

class UserApi{
    URL = '/user/';

    // http://127.0.0.1:3000/user/join
    userJoin(user) {
    return axios.post(this.URL+'join/',
    {
    email:`${user.email}`,
    password:`${user.password}`,
    name:`${user.name}`,
    phone:`${user.phone}`,
    type:`3`
    })
      .then((response)=>response.data)};

    // http://127.0.0.1:3000/user/login
    // http://127.0.0.1:3000/api_auth/
    userLogin(email, password) {
    return axios.post(this.URL+'login/',
    {
    email:`${email}`,
    password:`${password}`
    })
      .then((response)=>response.data)};
      
}

export default new UserApi();
