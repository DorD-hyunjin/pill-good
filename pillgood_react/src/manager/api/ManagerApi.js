import axios from 'axios';
class ManagerApi{
    URL = '/manager/';


    // user
    userList(){
        return axios.get(this.URL+`user/`).then((response)=>response.data).catch((error)=>console.log(error));
    }

    userDetail(id){
        return axios.get(this.URL+`user/${id}/`).then((response)=>response.data).catch((error)=>console.log(error));
    }

    userAccess(id, type){
        return axios.put(this.URL+`user/access/${id}/`, {type:`${type}`}).then((response)=>response.data).catch((error)=>console.log(error));
    }

    // lec
    lecList(){
        return axios.get(this.URL+`lec/`).then((response)=>response.data).catch((error)=>console.log(error));
    }
    
    lecDetail(id){
        return axios.get(this.URL+`lec/${id}/`).then((response)=>response.data).catch((error)=>console.log(error));
    }

    lecAccess(id, status){
        return axios.put(this.URL+`lec/access/${id}/`, {status:`${status}`}).then((response)=>response.data).catch((error)=>console.log(error));
    }

    lecUpdate(id, title, content, room, date, time, level, email, count, number, status, image){
        return axios.put(this.URL+`lec/update/${id}/`, {title:`${title}`, content:`${content}`,
        room:`${room}`, date:`${date}`, time:`${time}`, level:`${level}`, email:`${email}`, count:`${count}`, number:`${number}`, status:`${status}`, image:`${image}`}).then((response)=>response.data, console.log(id, title, content, room, date, time, level, email, count, number, status, image)).catch((error)=>console.log(error));
    }

    lecDelete(id){
        return axios.delete(this.URL+`lec/delete/${id}/`).then((response)=>response.data).catch((error)=>console.log(error));
    }

    // membership
    membershipCreate(number, period, price, type, status){
        return axios.post(this.URL+`membership/create/`, {number:`${number}`, period:`${period}`, price:`${price}`, 
        type:`${type}`, status:`${status}`}).then((response)=>response.data).catch((error)=>console.log(error));
    }
    
    membershipList(){
        return axios.get(this.URL+`membership/`).then((response)=>response.data).catch((error)=>console.log(error));
    }

    membershipAccess(id, status){
        return axios.put(this.URL+`membership/access/${id}/`, {status:`${status}`}).then((response)=>response.data).catch((error)=>console.log(error));
    }

    // pay

}

export default new ManagerApi();