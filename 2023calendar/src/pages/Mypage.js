import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import {auth} from '../firebase';

function Mypage() {
    //로그인 확인 함수
    const [LoginCheck, setCheck] = useState(false);
    //배열을 가진 useEffect 리렌더링될때 마다 실행됨
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setCheck(true);
                console.log(LoginCheck);
            } else {
                setCheck(false);
                console.log(LoginCheck);
            }
        })
    }, []);
    if(LoginCheck){
        return(
            <div>
                <div>마이페이지</div>
                <div onClick={() => (window.location.href = '/UserEdit')}> 내정보 수정하기</div>
                <div>주문내역</div>
            </div>
        )
    }
    else{
        return(
            <>
            <div> 로그인 후 이용가능합니다.</div>
            </>
        )
    }
}

export default Mypage
