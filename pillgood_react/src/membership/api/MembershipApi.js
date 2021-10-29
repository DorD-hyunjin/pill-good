import axios from "axios";

class MembershipApi {
    URL = "/membership/";

    // 'membership' [GET]
    membershipAll() {
        return axios
            .get(this.URL)
            .then((response) => response.data);
            
    }
    membership(id) {
        return axios
            .get(this.URL + `/${id}/`)
            .then((response) => response.data);
            
    }

    // 'membership/pay' [POST]
    Pay(id, type, number, pay_date, end_date, membership_id, status) {
        return axios
            .post(this.URL + `pay/`, {
                email: `${id}`, 
                pay_type: `${type}`, 
                remain: `${number}`, 
                pay_date: `${pay_date}`,
                end_date: `${end_date}`, 
                membership_id: `${membership_id}`, 
                status :`${status}`
            })
            .then((response) => response.data);
    }
}

export default new MembershipApi();