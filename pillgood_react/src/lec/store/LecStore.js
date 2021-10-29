import { makeAutoObservable, runInAction } from "mobx";
import lecApi from "../api/LecApi";
import moment from 'moment';

class LecStore {
    lec = {
        lec_id: 0,
        title: "",
        content: "",
        lec_image: "",
        room: "",
        date: "",
        time: "",
        level: 0,
        email: 0,
        lec_count: 0,
        number: 0,
        status: 1,
    };
    lecs = [];

    message = "";

    book = { book_id: "", email: "", lec_id: "", status: "1" };
    books = [];

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

    activePage = 1;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    //action

    async selectLec(id) {
        try {
            const result = await lecApi.lecDetail(id);
            runInAction(() => {
                this.lec = result;
            });
        } catch (error) {
            this.message = error.message;
        }
    }

    async selectPayAll(id) {
        try {
            const result = await lecApi.payList(id);
            runInAction(() => {
                this.pays = result;
            });
        } catch (error) {
            this.message = error.message;
        }
    }

    //전체 강의 목록
    async selectAll() {
        try {
            const result = await lecApi.lecList();
            runInAction(() => {
                this.lecs = result;
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    //페이지
    handlePageChange(pageNumber) {
        this.activePage = { pageNumber };
    }

    setBookProps(name, value) {
        this.book = { ...this.book, [name]: value };
    }

    setCounter(e) {
        this.count = e.target.count[1];
    }


    //강의 예약
    async createBook(user_id) {
        try {
            if (this.lec.lec_count >= this.lec.number) {
                return alert("예약 인원이 마감되었습니다");
            }

            //membership count minus
            for (var i = 0; i < this.pays.length; i++) {
                if (this.pays[i].membership_id.type === this.lec.number) {
                    this.pay = this.pays[i];
                }
            }

            if (this.pay.pay_id === 0) {
                return alert("현재 멤버십으로 해당 강의를 예약할 수 없습니다.");
            }

            if (this.pay.remain === 0 || this.pay.end_date < moment().format("YYYY-MM-DD") || this.pay.status === 3 ) {
                return alert("멤버십이 만료되었습니다.")
            }

            let remainCount = this.pay.remain - 1;
            console.log(remainCount);
            await lecApi.payCountUpdate(
                this.pay.pay_id,
                this.pay.pay_type,
                remainCount,
                this.pay.pay_date,
                this.pay.end_date,
                this.pay.membership_id,
                this.pay.status
            );

            // lec count update
            let count = this.lec.lec_count + 1;
            console.log(444444);
            await lecApi.lecCountUpdate(
                this.lec.lec_id,
                this.lec.title,
                this.lec.content,
                this.lec.lec_image,
                this.lec.room,
                this.lec.date,
                this.lec.time,
                this.lec.level,
                this.lec.email,
                count,
                this.lec.number,
                this.lec.status
            );

            // book create
            const result = await lecApi.bookCreate(user_id, this.lec.lec_id, 1);

            if (result.message !== undefined) {
                return alert(result.message);
            }

            this.selectLec(this.lec.lec_id);
        } catch (error) {
            this.message = error.message;
        }
    }
}

export default new LecStore();
