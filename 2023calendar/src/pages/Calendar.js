import React from 'react'
import styled from 'styled-components';

const OrderBox = styled.button`
font-family: 'JejuMyeongjo';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 12px;
color: white;
`
function Calendar() {
    return (
        <>
            <OrderBox onClick={() => (window.location.href = '/Order1')} >주문하기</OrderBox>
        </>
    )
}

export default Calendar
