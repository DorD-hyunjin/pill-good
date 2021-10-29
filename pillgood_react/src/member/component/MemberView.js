import { Button } from "@mui/material";
import React, { Component } from "react";
import {S3_BUCKET, REGION} from '../../image/S3bucket';
import '../member.css';

class MemberView extends Component {
    render() {
        const { member } = this.props;

        const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${member.image}`;

        return (
            <div id="memberUpdate">
                <div id="profileImg">
                    <span class="img-span">
                    <img src={imgUrl} alt="프로필사진" />
                    </span>
                    <div class="profile-name">
                        {member.name === "" ? "이름이 들어가요" : member.name}
                    </div>
                </div>
                <div>
                    <dl className="dl-dt-dd">
                        <dt>연락처</dt>
                        <dd id="phoneDefalut">
                            {member.phone === ""
                                ? "연락처가 들어가요"
                                : member.phone}
                        </dd>
                    </dl>
                    <dl className="dl-dt-dd">
                        <dt>소개글</dt>
                        <dd>
                            {member.intro === "" ? (
                                <p>
                                    소개글이 없습니다.
                                </p>
                            ) : (
                                member.intro
                            )}
                        </dd>
                    </dl>

                    <div id="contentCenter">
                        <Button variant="contained" href="/member/update" className="custom-button-full">
                            회원정보 수정
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberView;
