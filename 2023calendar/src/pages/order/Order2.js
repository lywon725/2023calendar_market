import React from 'react'

function Order2() {
    return (
        <>
        <div>📍 배송지 정보</div>
        받는 사람: <input />
        배송지: <input />
        전화번호: <input />
        <br/>        <br/>

        <div>📍 무통장입금 정보</div>
        주문은 무통장입금으로 진행됩니다.
        <div>결제금액</div>
        입금자명: <input/>
        이메일: <input />
        <br/>        <br/>


        📩작성하신 이메일로 무통장입금 안내가 전달될 예정입니다.
        ✔️원할한 배송 진행을 위해 일주일 이내로 입금 부탁드립니다.
        💡입금완료 후 배송이 진행됩니다.
        <br/>        <br/>


        <div type='chexkbox'>상기 입금안내에 동의하십니까?</div>
        <button onClick={() => (window.location.href = '/Order_complete')}>주문완료</button>
        </>
    )
}

export default Order2
