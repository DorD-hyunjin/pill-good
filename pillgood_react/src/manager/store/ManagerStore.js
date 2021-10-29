import { makeAutoObservable, runInAction } from "mobx";
import ManagerApi from "../api/ManagerApi";
import { uploadFile } from 'react-s3';
import {S3_BUCKET, REGION, ACCESS_KEY, SECRET_ACCESS_KEY} from '../../image/S3bucket';

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY
}


class ManagerStore {
  user = {};
  users = [];
  userFilter = "";

  lec = {};
  lecs = [];
  lecFilter = "";

  membership = {};
  memberships = [];
  membershipFilter = "";

  selectedFile = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }


  // action - user
  setUserProps(id, value) {
    this.user = { ...this.user, [id]: value }
  }

  changeUserFilter(userFilter) {
    this.userFilter = userFilter;
  }

  async selectUserAll() {
    try {
      const results = await ManagerApi.userList();
      runInAction(() => this.users = results);
    } catch (error) {
      console.log(error);
    }
  }

  async selectUser(id) {
    try {
      const result = await ManagerApi.userDetail(id);
      runInAction(() => this.user = result);
    } catch (error) {
      console.log(error);
    }
  }

  async accessUser(id, type) {
    try {
      // await ManagerApi.userAccess(this.user.id, this.user.type);
      if (type === 2 || type === "강사") {
        type = 3
        await ManagerApi.userAccess(id, type);
      } else {
        type = 2
        await ManagerApi.userAccess(id, type);
      }
      this.selectUserAll();
    } catch (error) {
      runInAction(this.message = error.message);
    }
  }

  // action - lec
  setLecProps(id, value) {
    this.lec = { ...this.lec, [id]: value }
  }

  changeLecFilter(lecFilter) {
    this.lecFilter = lecFilter;
  }

  handlerSetFile(e) {
    this.selectedFile = e.target.files[0];
  }

  async selectLecAll() {
    try {
      const results = await ManagerApi.lecList();
      runInAction(() => this.lecs = results);
    } catch (error) {
      console.log(error);
    }
  }

  async selectLec(id) {
    try {
      const result = await ManagerApi.lecDetail(id);
      runInAction(() => this.lec = result);
    } catch (error) {
      console.log(error);
    }
  }

  async accessLec(lec_id, status, value) {
    try {
      if (value === 'access') {
        status = 2
        await ManagerApi.lecAccess(lec_id, status);
      } else {
        status = 3
        await ManagerApi.lecAccess(lec_id, status);
      }
      this.selectLecAll();
    } catch (error) {
      runInAction(this.message = error.message);
    }
  }

  async updateLec() {
    try {
      if (this.selectedFile != null) {
          uploadFile(this.selectedFile, config)
              .then(data => {
                  this.lec.lec_image = data.key;
                  console.log(this.lec.lec_image)
                  ManagerApi.lecUpdate(
            this.lec.lec_id,
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
              })
              .catch(error => (this.message = error.message))
      } else {
          await ManagerApi.lecUpdate(
            this.lec.lec_id,
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
          runInAction(() => {
            this.selectLec(this.lec.lec_id);
          });
      }
  } catch (error) {
      runInAction((this.message = error.message));
  }
  }

  async deleteLec() {
  try {
    await ManagerApi.lecDelete(this.lec.lec_id);
  } catch (error) {
    console.log(error);
  }
}

// action - membership
setMembershipProps(id, value){
  this.membership = { ...this.membership, [id]: value }
}


changeMembershipFilter(membershipFilter){
  this.membershipFilter = membershipFilter;
}

  async selectMembershipAll() {
  try {
    const results = await ManagerApi.membershipList();
    runInAction(() => this.memberships = results);
  } catch (error) {
    console.log(error);
  }
}

  async accessMembership(id, status){
  try {
    if (status === 1 || status === "활성") {
      status = 2
      await ManagerApi.membershipAccess(id, status);
    } else {
      status = 1
      await ManagerApi.membershipAccess(id, status);
    }
    this.selectMembershipAll();
  } catch (error) {
    runInAction(this.message = error.message);
  }
}

  async createMembership() {
  try {
    await ManagerApi.membershipCreate(this.membership.number, this.membership.period, this.membership.price, this.membership.type, this.membership.status)
  } catch (error) {
    console.log(error);
  }
}



}

export default new ManagerStore();