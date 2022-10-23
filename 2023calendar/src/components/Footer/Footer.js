import React from 'react'
import styled from 'styled-components';

const Foot = styled.div`
position:absolute;
bottom:0;
width: 100%;
text-align: center;

`
const SubText = styled.div`
font-family: 'Academy Engraved LET';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
margin-top: 20px;
`
const Logo = styled.div`
font-family: 'Academy Engraved LET';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
margin-top: 8px;
`
const Contact = styled.div`
font-family: 'Abhaya Libre';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 130%;
margin: 20px;
`
function Footer() {
    return (
        <Foot>
            <hr/>
            <SubText>Fancy the unexpected life</SubText>
            <Logo>fancyeow</Logo>
            <Contact>
                instagram  | @fancyeow <br/>
                email  | lywon725@naver.com
            </Contact>
        </Foot>
    )
}

export default Footer
