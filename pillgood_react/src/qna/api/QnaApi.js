import axios from "axios";


class QnaApi{
    URL = "/qna/";

    // '' [GET]
    qnaList(){
        return axios.get(this.URL).then((response) => response.data);
    }

    //'<int:pk>/' [GET]
    qnaDetail(qna_id){
        return axios.get(this.URL + `${qna_id}/`)
        .then((response) => response.data);
    }

    // 'create/' [POST]
    qnaCreate(title, category, question_user, question){
        return axios.post(this.URL + `create/`, {
            title: `${title}`,
            category : `${category}`,
            question_user: `${question_user}`,
            question: `${question}`,
          }).then((response) => response.data).catch((error)=> error.message);
    }

    // 'update/<int:pk>/' [PUT]
    qnaUpdate(qna_id, title, category, question_user, question, answer_user, answer){
        return axios.put(this.URL + `update/${qna_id}/`, {
            title: `${title}`,
            category : `${category}`,
            question_user: `${question_user}`,
            question: `${question}`,
            answer_user : `${answer_user}`,
            answer : `${answer}`
        }).then((response) => response.data);
    }
    
    // 'delete/<int:pk>/' [DELETE]
    qnaDelete(qna_id){
        return axios.delete(this.URL + `delete/${qna_id}/`).then((response) => response.data).catch((error)=>console.log(error));
    }

    // 'answer/<int:pk>/' [POST]
    qnaAnswer(qna, qna_id){
        return axios
            .post(this.URL + `answer/${qna_id}/`, {
                qna_id: `${qna.qna_id}`,
                title: `${qna.title}`,
                category: `${qna.category}`,
                question_user: `${qna.question_user}`,
                question: `${qna.question}`,
                answer_user: `${qna.answer_user}`,
                answer: `${qna.answer}`,
            })
            .then((response) => response.data);
    }
}
export default new QnaApi();