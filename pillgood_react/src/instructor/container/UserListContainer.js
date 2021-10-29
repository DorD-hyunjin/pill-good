import React, { Component } from "react";
import {observer} from 'mobx-react';
import InstructorStore from "../store/InstructorStore";
import UserListView from '../component/UserListView';
import { makeStyles } from "@mui/styles";


//LecStore로부터 데이터 받아서 쓸 것. 
class UserListContainer extends Component {
  instructorStore = InstructorStore;

    componentDidMount() {
        const {id} = this.props;
        console.log(id)
        this.instructorStore.selectAllUser(id); //mount 되면 전체 강의
    }

    render() {
        const useStyles = makeStyles({
          root: {
            "& .super-app-theme--header": {
              backgroundColor: '#e6cda9'
            }
          }
        });
        const columns = [
          { field: 'id', headerName: 'No.', headerClassName: 'super-app-theme--header', width: 120 },
          { field: 'email', headerName: '메일', headerClassName: 'super-app-theme--header', width: 180 },
          { field: 'name', headerName: '이름', headerClassName: 'super-app-theme--header', width: 180 },
          { field: 'intro', headerName: '특이사항', headerClassName: 'super-app-theme--header', width: 180 }]

        const {users} = this.instructorStore;
        const rows = [];

        users.forEach((user, index) => {
         rows.push(
          { id: index + 1, email: user.email, name: user.name }
        );

        });
        return (
      <div style={{width: '80%', margin: '30px auto'}}>
        <h2 style={{textAlign:'center', color:'#574934'}} >강의 신청 회원목록</h2>
         {<UserListView columns={columns} rows={rows} useStyles={useStyles} />}
       </div>
    );
  }
}
//        const usersList = users.map((user, index)=>{
//            return (<UserListView key = {index} user = {user}/>)
//        });
//
//        return(
//            <div>
//            <h1>회원 목록</h1>
//             {usersList.length ? (
//                usersList
//                        ) : (
//                            <div>
//                               해당 강의를 신청한 회원이 존재하지 않습니다.
//                            </div>
//                        )}
//            </div>
//          );
//        }
//      }


export default observer(UserListContainer);
