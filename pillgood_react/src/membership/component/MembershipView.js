import React, {Component} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../membership.css';
class MembershipView extends Component {
    render() {
        const {membership, user, pay} = this.props;
        return (
            <div>
                <p>
                    <span>Membership{membership.membership_id}</span><br/>
                    
                    유형 : {membership.type === 1
                            ? "1대1"
                            : membership.type === 2
                            ? "1대2"
                            : membership.type === 8
                            ? "1대8"
                            : "유형이 정확하지 않습니다."}<br/>
                    회수 : {membership.number}회<br/>
                    기간 : {membership.period}일<br/>
                    가격 : {membership.price}원<br/>

                    <Stack direction="row">
                    <Button variant="contained" onClick={() => pay(`${user}`)}>결제</Button>
                    </Stack>
                    <br/>
                </p>
            </div>
        );
    }
}

export default MembershipView;