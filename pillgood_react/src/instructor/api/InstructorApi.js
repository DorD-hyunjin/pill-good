import axios from "axios";

// backend api 호출, 연결


class InstructorApi {
    URL = '/instructor/';

    // 'user/<int:pk>'    #회원 목록
    userList(id) {
        return axios.get(this.URL+`user/${id}/`).then((response) => response.data, console.log("api"));
    }

    // 'lec/<int:id>'          #자신의 강의 목록
    lecList(id) {
        return axios.get(this.URL+`lec/${id}/`).then((response)=> response.data);
    }

    // 'lec/<int:pk>'
    lecDetail(id){
        return axios.get(this.URL+`lec/${id}/`)
            .then((response)=> response.data);
    }

    // 'create'
    lecCreate(title, content, room, date, time, level, email, lec_count, number, status, lec_image) {
        return axios.post(this.URL+ `create/`,{
            title:`${title}`,
            content:`${content}`,
            room:`${room}`,
            date:`${date}`,
            time:`${time}`,
            level:`${level}`,
            email:`${email}`,
            lec_count:`${lec_count}`,
            number:`${number}`,
            status:`${status}`,
            lec_image:`${lec_image}`
            })
        .then((response)=> response.data).catch((error)=>console.log(error));
    };
}

export default new InstructorApi();
