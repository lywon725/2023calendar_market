import React, { useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {auth, signInWithGoogle} from '../firebase';

const OrderBox = styled.button`
font-family: 'JejuMyeongjo';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 12px;
color: white;
`
function Calendar() {
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

    //주문하기 버튼 클릭 함수
    const check= () => {
        {LoginCheck ? 
            //로그인 했을때 주문 페이지로 이동
            window.location.href = '/Order1'
        : 
            //로그인 안했을때 
            console.log("로그인을 해주세요")
        };
    }
    
    return (
        <>
            <OrderBox onClick={() => (check())} >주문하기</OrderBox>
        </>
    )
}

export default Calendar
