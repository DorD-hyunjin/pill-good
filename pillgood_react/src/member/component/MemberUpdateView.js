import { Button, TextField } from "@mui/material";
import React, { Component } from "react";

import { styled } from "@mui/material/styles";
import { withRouter } from 'react-router-dom';
import {S3_BUCKET, REGION} from '../../image/S3bucket';
import '../member.css';


class MemberUpdateView extends Component {


    render() {
        const { member, onSetProps, onUpdate, onFileInput } = this.props;
        const imgUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${member.image}`;
        const Input = styled("input")({
            display: "none"
          });

        return (
            <div id="memberUpdate">
                <div id="profileImg">
                    <span class="img-span">
                        <img src={imgUrl} alt="프로필사진" />
                    </span>
                    <br />
                    <label htmlFor="contained-button-file">
                        <Input
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            onChange={(e) => onFileInput(e)}
                        />
                        <Button
                            variant="outlined"
                            component="span"
                            className="custom-button-line"
                        >
                            사진 변경
                        </Button>
                    </label>
                </div>

                <div id="profileInfo">
                    <TextField
                        required
                        id="outlined-required"
                        label="연락처"
                        value={member.phone}
                        name="phone"
                        onChange={(e) =>
                            onSetProps(e.target.name, e.target.value)
                        }
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="소개글"
                        multiline
                        rows={6}
                        name="intro"
                        value={member.intro}
                        onChange={(e) =>
                            onSetProps(e.target.name, e.target.value)
                        }
                    />
                </div>

                <div id="contentCenter">
                    <Button
                        // variant="outlined"
                        variant="contained"
                        className="custom-button-full"
                        onClick={() => {
                            onUpdate();
                            this.props.history.push("/member");
                        }}
                    >
                        저장하기
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(MemberUpdateView);
