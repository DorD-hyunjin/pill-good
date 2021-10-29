import { makeAutoObservable, runInAction } from "mobx";
import InstructorApi from "../api/InstructorApi";
import { uploadFile } from 'react-s3';
import {S3_BUCKET, REGION, ACCESS_KEY, SECRET_ACCESS_KEY} from '../../image/S3bucket';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY
}

class InstructorStore{
  lec = {lec_id :"", title:"",content:"",room :"", date: "", time:"", level:"", email:"", lec_count: 0 , number:"", status :1, lec_image:""};
  lecs = [];

  selectedFile = null;

  users =[];



  constructor(){
    makeAutoObservable(this, {}, { autoBind: true })
  }

    handlerSetProps = (name, value) =>{
      this.lec = {...this.lec, [name]: value}
  }

    handlerSetFile(e) {
    this.selectedFile = e.target.files[0];
    }   //file 업로드

    changeDate = (newValue) => {
      this.selectedDate = {newValue};
  }
    async selectAllUser(lec_id){
      try{
        const result = await InstructorApi.userList(lec_id);
        runInAction(()=> this.users = result);
      }catch(error){
        runInAction(()=> this.message = error.message);
      }
    }

    async selectAllLec(){
      try{
        const result = await InstructorApi.lecList();
        runInAction(()=> {this.lecs = result;
      });
      }catch(error){
        runInAction(()=> this.message = error.message);
      }
    }

     async selectLec(id) {
        try{
          const result = await InstructorApi.lecDetail(id);
          runInAction(() => this.lecs = result);
           }catch(error){
          }
      }


    async instructorLec(id) {
        try{
          const result = await InstructorApi.lecList(id);
          runInAction(() => this.lecs = result);
           }catch(error){
          }
      }

      async createLec() {
      try{
        if (this.selectedFile != null){
            uploadFile(this.selectedFile, config)
            .then(data => {
            this.lec.lec_image = data.key;
             InstructorApi.lecCreate(
                this.lec.title,
                this.lec.content,
                this.lec.room,
                this.lec.date,
                this.lec.time,
                this.lec.level,
                this.lec.email,
                this.lec.lec_count,
                this.lec.number,
                this.lec.status,
                this.lec.lec_image
             );
             console.log(233)})
            .catch(error => (this.message = error.message))
        }else {
                await InstructorApi.lecCreate(
                this.lec.title,
                this.lec.content,
                this.lec.room,
                this.lec.date,
                this.lec.time,
                this.lec.level,
                this.lec.email,
                this.lec.lec_count,
                this.lec.number,
                this.lec.status,
                this.lec.lec_image
                );
      }}catch (error) {
           console.log(error)
        }
      }
  }
export default new InstructorStore();