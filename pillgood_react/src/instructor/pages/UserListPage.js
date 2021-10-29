import React, { Component } from 'react';
import UserListContainer from '../container/UserListContainer';


//page를 하나의 html로 생각.
class UserListPage extends Component {
    render() {
       const {params} = this.props.match;
        console.log(params)
        return (
            <div>
             <UserListContainer id={params.id}/>
            </div>
        );
    }
}
  
export default UserListPage;