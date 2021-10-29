import { makeAutoObservable, runInAction } from "mobx";
import LecApi from "../../lec/api/LecApi";
import MemberApi from "../api/MemberApi";

class BookStore {
    books = [];

    book = {
        book_id: 0,
        email: 0,
        lec_id: 0,
        status: 0,
    };
    message = "";

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

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    init() {
        this.books = [];

        this.book = {
            book_id: 0,
            email: 0,
            lec_id: 0,
            status: 0,
        };
    }

    async selectBookAll(id) {
        try {
            const result = await MemberApi.bookList(id);

            runInAction(() => {
                this.books = result;
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    async selectBook(bookId) {
        try {
            const result = await MemberApi.bookDetail(bookId);

            runInAction(() => {
                this.book = result;
                console.log(333);
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    async cancelBook(bookId, id, lec_id) {
        try {
            const result = await MemberApi.bookDetail(bookId);
            this.book = result;
            this.book.status = 2;

            await MemberApi.bookCancel(
                this.book.book_id,
                this.book.email,
                this.book.lec_id,
                this.book.status
            );

            const resultLec = await LecApi.lecDetail(lec_id);
            this.lec = resultLec;
            let count = this.lec.lec_count - 1;
            await LecApi.lecCountUpdate(
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

            const paylist = await MemberApi.payList(id);
            for (var i = 0; i < paylist.length; i++) {
                if (paylist[i].membership_id.type === this.book.lec_id.number) {
                    this.pay = paylist[i];
                }
            }

            let remainCount = this.pay.remain + 1;
            await LecApi.payCountUpdate(
                this.pay.pay_id,
                this.pay.pay_type,
                remainCount,
                this.pay.pay_date,
                this.pay.end_date,
                this.pay.membership_id,
                this.pay.status
            );            

            runInAction(() => {
                this.selectBookAll(id);
            });
        } catch (error) {
            runInAction((this.message = error.message));
        }
    }

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
}

export default new BookStore();
