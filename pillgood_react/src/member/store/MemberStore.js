import { makeAutoObservable, runInAction } from "mobx";
import memberApi from "../api/MemberApi";
import { uploadFile } from 'react-s3';
import {S3_BUCKET, REGION, ACCESS_KEY, SECRET_ACCESS_KEY} from '../../image/S3bucket';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
}

class MemberStore {
    member = {
        id: 0,
        name: "",
        phone: "",
        intro: "",
        image: "",
        formData: null,
        type: 0,
        is_active: 0,
    };
    message = "";
    selectedFile = null;

    oldPassword = "";
    newPassword = "";

    selectedFile = null;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    init() {
        this.member = {
            id: 0,
            name: "",
            phone: "",
            intro: "",
            image: "",
            type: 0,
            is_active: 0,
        };
    }

    handlerSetProps(name, value) {
        this.member = { ...this.member, [name]: value };
    }

    handlerSetFile(e) {
        this.selectedFile = e.target.files[0];
    }

    handlerOldPassword(password) {
        this.oldPassword = password;
    }

    handlerNewPassword(password) {
        this.newPassword = password;
    }

    async selectMember(id) {
        try {
            const result = await memberApi.member(id);

            runInAction(() => {
                this.member = result;
            });
        } catch (error) {
            runInAction(() => (this.message = error.message));
        }
    }

    async updateMember() {
        try {
            if (this.selectedFile != null) {
                uploadFile(this.selectedFile, config)
                    .then(data => {
                        this.member.image = data.key;
                        memberApi.memberUpdate(
                            this.member.id,
                            this.member.name,
                            this.member.phone,
                            this.member.intro,
                            this.member.image,
                            this.member.type,
                            this.member.is_active
                        );   
                    })
                    .catch(error => (this.message = error.message))
            } else {
                await memberApi.memberUpdate(
                    this.member.id,
                    this.member.name,
                    this.member.phone,
                    this.member.intro,
                    this.member.image,
                    this.member.type,
                    this.member.is_active
                );
            }


            runInAction(() => {
                this.selectMember(this.member.id);
            });
        } catch (error) {
            runInAction((this.message = error.message));
        }
    }

    async deleteMember() {
        try {
            this.member.is_active = 0;
            await memberApi.memberDelete(
                this.member.id,
                this.member.name,
                this.member.phone,
                this.member.intro,
                this.member.image,
                this.member.type,
                this.member.is_active
            );

            runInAction(() => {
                this.selectMember(this.member.id);
            });
        } catch (error) {
            runInAction((this.message = error.message));
        }
    } 
}

export default new MemberStore();
