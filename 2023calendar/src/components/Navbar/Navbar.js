import React, { useRef, useEffect, useState} from 'react';
import styled from 'styled-components';

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
        console.log(isOpen);
    }
    return (
        <Nav>
            <Logo onClick={() => (window.location.href = '/')}>fancyeow</Logo>
            {isOpen ? (
                <Sidebar> 
                    <Menu> <CloseIcon onClick={click}/> </Menu>
                    <br/>
                    <SubTitle onClick={() => (window.location.href = '/')}>fancyeow</SubTitle>
                    <LoginText>로그인/회원가입</LoginText>
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
    )
}

export default Navbar
