import {makeAutoObservable, runInAction} from "mobx";
import moment from "moment";
import membershipApi from "../api/MembershipApi";

class MembershipStore {
    membership = {membership_id: 1, number: 0, period: 0, price: 0, type: 0, status: 0};
    memberships = [];
    message = "";

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    
    // 멤버십 목록보기
    async selectMembershipAll() {
        try {
            const result = await membershipApi.membershipAll();

            runInAction(() => {
                this.memberships = result;
            });
        } catch (error) {
            this.message = error.message;
        }
    }
    // 결제하기
    async Pay(user) {
        try {
            const pay_date = moment().add(9, 'hours').format("YYYY-MM-DDTHH:mm:ss");
            let end_date = moment().add(this.membership.period,"days").format("YYYY-MM-DD");
            console.log(moment(), " ~ ", end_date);
            const result = await membershipApi.Pay(user, 1, this.membership.number, pay_date, end_date, this.membership.membership_id, 1);
            console.log(result);
        } catch (error) {
            this.message = error.message;
        }
    }

    async setmembership(membership_id){
        try {
            const result = await membershipApi.membership(membership_id);

            runInAction(() => {
                this.membership = result;
            });
        } catch (error) {
            this.message = error.message;
        }
    }
}

export default new MembershipStore();