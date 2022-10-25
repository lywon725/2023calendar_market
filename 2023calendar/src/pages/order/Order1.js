import React from 'react'

function Order1() {
    return (
        <>
        달력개수
        엽서선택 <input/>
        <div>결제금액_배송비 무료</div>

        <button onClick={() => (window.location.href = '/Order2')}>결제하기</button>
        </>
    )
}

export default Order1
