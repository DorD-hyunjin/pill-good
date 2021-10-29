import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ManagerStore from '../store/ManagerStore';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


class ManagerMembershipCreateContainer extends Component {
  managerStore = ManagerStore;
  render() {
    const { membership, createMembership, setMembershipProps } = this.managerStore;
    return (
      <Card style={{ width: '20%', margin: '30px auto', minWidth: 310 }}>
        <CardContent>
          <CardContent style={{ textAlign: 'center' }}>
            <TextField label="횟수" type="number" id="number" name="number" value={membership.number || ""}
              onChange={(e) => setMembershipProps(e.target.name, e.target.value)} placeholder="1~30" />
          </CardContent>
          <CardContent style={{ textAlign: 'center' }}>
            <TextField label="가격" type="number" id="price" name="price" value={membership.price || ""}
              onChange={(e) => setMembershipProps(e.target.name, e.target.value)} placeholder="10,000~999,999" />
          </CardContent>

          <CardContent>
            <FormControl component="fieldset" >
              <FormLabel component="legend" >기간</FormLabel>
              <RadioGroup row value={membership.period} name="period" onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
                <FormControlLabel value="10" control={<Radio size="small" />} label="10일" />
                <FormControlLabel value="30" control={<Radio size="small" />} label="30일" />
                <FormControlLabel value="45" control={<Radio size="small" />} label="45일" />
                <FormControlLabel value="60" control={<Radio size="small" />} label="60일" />
              </RadioGroup>
            </FormControl>
          </CardContent>

          <CardContent>
            <FormControl component="fieldset" >
              <FormLabel component="legend">유형</FormLabel>
              <RadioGroup row value={membership.type} name="type" onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
                <FormControlLabel value="1" control={<Radio size="small" />} label="1인" />
                <FormControlLabel value="2" control={<Radio size="small" />} label="2인" />
                <FormControlLabel value="3" control={<Radio size="small" />} label="8인" />
              </RadioGroup>
            </FormControl>
          </CardContent>

          <CardContent>
            <FormControl component="fieldset" >
              <FormLabel component="legend">활성</FormLabel>
              <RadioGroup row value={membership.status} name="status" onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
                <FormControlLabel value="1" control={<Radio size="small" />} label="활성" />
                <FormControlLabel value="2" control={<Radio size="small" />} label="비활성" />
              </RadioGroup>
            </FormControl>
          </CardContent>
          <CardActions style={{ float: 'right' }}>
          <Link href={`/manager/membership`} style={{textDecorationLine:'none'}}> <Button onClick={()=>createMembership()} style={{color:'#D5BA8C'}}>추가</Button></Link>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

export default observer(ManagerMembershipCreateContainer);

// import React from 'react';
// import { observer } from 'mobx-react'
// import { useForm } from "react-hook-form";
// import managerStore from '../store/ManagerStore';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import TextField from '@mui/material/TextField';

// const ManagerMembershipCreateContainer = () => {
//   const { membership, createMembership, setMembershipProps } = managerStore;
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm();
//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <Card style={{ width: '20%', margin: '30px auto', minWidth: 310 }}>
//       <CardContent>
//         <form onSubmit={handleSubmit(onSubmit)} >
//           <CardContent style={{textAlign:'center'}}>
//             <TextField label="횟수" type="number" id="number" name="number" value={membership.number || ""}
//               {...register("number", {
//                 required: true, validate: {
//                   positiveNumber: (value) => parseFloat(value) > 0,
//                   lessThanHundred: (value) => parseFloat(value) < 31
//                 }
//               })} onChange={(e) => setMembershipProps(e.target.name, e.target.value)} placeholder="1~30" />
//             {errors.number && errors.number.type === "positiveNumber" && (<p>잘못 입력하셨습니다 :(</p>)}
//             {errors.number && errors.number.type === "lessThanHundred" && (<p>30보다 큰 수를 입력할 수 없습니다 :(</p>)}

//           </CardContent>
//           <CardContent style={{textAlign:'center'}}>
//             <TextField label="가격" type="number" id="price" name="price" value={membership.price || ""}
//               {...register("price", {
//                 required: true, validate: {
//                   positiveNumber: (value) => parseFloat(value) > 9999,
//                   lessThanHundred: (value) => parseFloat(value) < 1000001
//                 }
//               })} onChange={(e) => setMembershipProps(e.target.name, e.target.value)} placeholder="10,000~999,999" />
//             {errors.price && errors.price.type === "positiveNumber" && (<p>잘못된 가격을 입력하셨습니다 :(</p>)}
//             {errors.price && errors.price.type === "lessThanHundred" && (<p>1,000,000원 미만의 가격을 입력하세요 :(</p>)}
//           </CardContent>

//           <CardContent>
//             <FormControl component="fieldset" >
//               <FormLabel component="legend" >기간</FormLabel>
//               <RadioGroup row value={membership.period} name="period" onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
//                 <FormControlLabel value="10" control={<Radio size="small" />} label="10일" {...register("period", { required: true })} />
//                 <FormControlLabel value="30" control={<Radio size="small" />} label="30일" {...register("period", { required: true })} />
//                 <FormControlLabel value="45" control={<Radio size="small" />} label="45일" {...register("period", { required: true })} />
//                 <FormControlLabel value="60" control={<Radio size="small" />} label="60일" {...register("period", { required: true })} />
//               </RadioGroup>
//             </FormControl>
//             {errors.period && <p>기간을 선택 하세요!</p>}
//           </CardContent>

//           <CardContent>
//             <FormControl component="fieldset" >
//               <FormLabel component="legend">유형</FormLabel>
//               <RadioGroup row value={membership.type} name="type" onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
//                 <FormControlLabel value="1" control={<Radio size="small" />} label="1인" {...register("type", { required: true })} />
//                 <FormControlLabel value="2" control={<Radio size="small" />} label="2인" {...register("type", { required: true })} />
//                 <FormControlLabel value="3" control={<Radio size="small" />} label="8인" {...register("type", { required: true })} />
//               </RadioGroup>
//             </FormControl>
//             {errors.type && <p>유형을 선택 하세요!</p>}
//           </CardContent>

//           <CardContent>
//             <FormControl component="fieldset" >
//               <FormLabel component="legend">활성</FormLabel>
//               <RadioGroup row value={membership.status} name="status" onChange={(e) => setMembershipProps(e.target.name, e.target.value)}>
//                 <FormControlLabel value="1" control={<Radio size="small" />} label="활성" {...register("status", { required: true })} />
//                 <FormControlLabel value="2" control={<Radio size="small" />} label="비활성" {...register("status", { required: true })} />
//               </RadioGroup>
//             </FormControl>
//             {errors.status && <p>활성 여부를 선택 하세요!</p>}
//           </CardContent>
//           <CardActions style={{ float: 'right' }}>
//             <button onClick={() => createMembership()}>추가</button>
//           </CardActions>

//         </form>
//       </CardContent>
//     </Card>
//   );
// }

// export default observer(ManagerMembershipCreateContainer);