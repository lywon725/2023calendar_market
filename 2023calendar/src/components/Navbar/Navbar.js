import React, { useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {auth, signInWithGoogle} from '../../firebase';

//import Popup from '../Popup/Popup'; //아쉽다 구현못했어 ㅠㅠ


//material UI
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

const Nav = styled.div`
width: 100%;
position: fixed;
`
const Logo = styled.div`
font-family: 'Academy Engraved LET';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;

float: left; 
margin: 20px;
`

//아이콘
const Menu = styled.div`
    float: right;
    margin: 20px;
    margin-right: 50px;
    transition: all 20.;
`
//사이드 바
const Sidebar = styled.div`
    width: 250px;
    height: 800px;
    float: right;
    background-color: white; 
    border-radius: 10px;
    z-index:10;
`

const SubTitle = styled.div`
font-family: 'Academy Engraved LET';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 130%;

margin-top: 80px;
margin-left: 60px;
`

const Line = styled.hr`
width: 200px;
margin-left: 20px;
`
const LoginText = styled.div`
font-family: 'JejuMyeongjo';
font-size: 12px;
margin: 20px;
margin-left: 75px;
//커서 올렸을때 색상변화
&: hover{
    color:#EA9292;
}
`
const MenuBox = styled.ul`

`
const MenuText = styled.div`
font-family: 'Abhaya Libre';
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 130%;

margin-top: 20px;

//커서 올렸을때 색상변화
&: hover{
    color:#EA9292;
}
`
const Space = styled.div`
    height: 370px;
`
const Copy = styled.div`
font-family: 'Abhaya Libre;
font-size: 10px;
`
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const click= () => {
        {isOpen ? setIsOpen(false) : setIsOpen(true)};
    }

    //로그인 확인 함수
    const [isLoggedIn, setLoggedIn] = useState(false);
    //배열을 가진 useEffect 리렌더링될때 마다 실행됨
    useEffect(() => {
        console.log("실행됨");
        auth.onAuthStateChanged(user => {
            if (user) {
                setLoggedIn(true);
                console.log("loggedIn");
            } else {
                setLoggedIn(false);
                console.log("loggedOut");
            }
        })
    }, []);

    //Popup 메세지 함수
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});

    return (
        <Nav>
            <Logo onClick={() => (window.location.href = '/')}>fancyeow</Logo>
            {isOpen ? (
                <Sidebar> 
                    <Menu> <CloseIcon onClick={click}/> </Menu>
                    <br/>
                    <SubTitle onClick={() => (window.location.href = '/')}>fancyeow</SubTitle>
                    {isLoggedIn ? (
                        <div>
                            <LoginText onClick={() => (auth.signOut()) }>로그아웃</LoginText> 
                        </div>
                    ) : (
                        <div> 
                        <LoginText onClick ={signInWithGoogle}>구글 로그인</LoginText>
                        </div>
                    )}
                    <Line />
                    <MenuBox>
                        <MenuText onClick={() => (window.location.href = '/Calendar')}>2023 Calendar</MenuText>
                        <MenuText onClick={() => (window.location.href = '/Gallery')}>fancyeow Gallery</MenuText>
                        <MenuText onClick={() => (window.location.href = '/About')}>About</MenuText>
                        <MenuText onClick={() => (window.location.href = '/Mypage')}>My page</MenuText>
                    <Space />
                    <Copy>copyright © fancyeow</Copy>
                    </MenuBox>

                </Sidebar>
            ) : (
                <Menu>
                    <DensityMediumIcon onClick={click}/>
                </Menu>
            )}
        </Nav>
    );
}


export default Navbar
