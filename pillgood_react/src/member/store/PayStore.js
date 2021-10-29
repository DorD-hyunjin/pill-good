import { makeAutoObservable, runInAction } from "mobx";
import MemberApi from "../api/MemberApi";
import moment from 'moment';

class PayStore {
    pays = [];
    pay = {
        pay_id: 0,
        pay_type: 0,
        remain: 0,
        pay_date: "",
        end_date: "",
        membership_id: 0,
        status: 0,
    };

    tempPay = {};
    message = "";
    period = 0;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    payInit(){
        this.pay = {
            pay_id: 0,
            pay_type: 0,
            remain: 0,
            pay_date: "",
            end_date: "",
            membership_id: 0,
            status: 0,
        };        
    }

    async selectMember(id) {
        try {
            const result = await MemberApi.payList(id);

            runInAction(() => {
                this.pays = result;
                if (result.length > 0)
                    this.pay = result[0];
                // this.todayPayUpdate();
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    todayPayUpdate(){
        for(var i=0; i<this.pays.length;i++) {
            this.tempPay = this.pays[i];
            if (this.tempPay.end_date > moment().format("YYYY-MM-DD")) {
                this.pay = this.tempPay;
            } else {
                this.tempPay.status = 3;
                MemberApi.payRefund(
                    this.tempPay.pay_id,
                    this.tempPay.pay_type,
                    this.tempPay.remain,
                    this.tempPay.pay_date,
                    this.tempPay.end_date,
                    this.tempPay.membership_id,
                    this.tempPay.status,
                );
            }
        }

    }

    async selectPay(payId) {
        try {
            const result = await MemberApi.payDetail(payId);

            runInAction(() => {
                this.pay = result;
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    async refundPay() {
        try {
            this.pay.status = 2;
            await MemberApi.payRefund(
                this.pay.pay_id,
                this.pay.pay_type,
                this.pay.remain,
                this.pay.pay_date,
                this.pay.end_date,
                this.pay.membership_id,
                this.pay.status,
            );

            runInAction(() => {
                this.selectPay(this.pay.pay_id);
                window.location.replace("/member/paylist");
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }        
    }

}

export default new PayStore();
