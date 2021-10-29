import { Component } from 'react';
import * as React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


class Footer extends Component {
   
    render() {
        return (
            <div id="footer">
                <br/>
                <br/>
                <p id="footer-font">상호명 : PILLGOOD 필라테스 | 06220) 서울특별시 강남구 테헤란로 212 (역삼동 멀티캠퍼스) 603호 | 대표자 : 박지수
                <br/>
                사업자등록번호 : 482-82-12533 | Tel : 02-1544-1253 | Fax : 02-8282-1253
                <br/>
                <br/>
                COPYRIGHT © 2021 PILLGOOD PILATES. ALL RIGHTS RESERVED.
                </p>
                <Link href="/">
                    <img alt="footer" src="https://pillgoodimagebucket.s3.ap-northeast-2.amazonaws.com/logo/logologo.png"/>
                </Link>
            </div>
        );
    }
}

export default Footer;