import React, { Component }  from "react";
import {observer} from 'mobx-react';
import LecStore from "../store/LecStore";
import LecView from "../component/LecView";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../lec.css';




//LecStore로부터 데이터 받아서 쓸 것. 
class LecListContainer extends Component {
    lecStore = LecStore;

    componentDidMount() {
        this.lecStore.selectAll(); //mount 되면 전체 강의
    }

    render() {
        const {lecs} = this.lecStore;


        const lecList = lecs && lecs.map((element)=>{
            return (<LecView key={element.lec_id} lec = {element}/>
                     );
        });

        return(
            <div>
               {lecList}
               <Stack  spacing={2}>
                    <Pagination  sx={{marginLeft:70, padding:5 }} count={12} shape="rounded" />
               </Stack>
            </div>
          );
        }
      }


export default observer(LecListContainer);
