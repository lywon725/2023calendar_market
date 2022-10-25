import React from 'react'

function Order_complete() {
    return (
        <>
        <div> 주문완료 </div>
        <div>💡Mypage에서 주문내역 및 결제 진행사항을 확인하실 수 있고 배송지 정보를 수정하실 수 있습니다.</div>
        <button onClick={() => (window.location.href = '/Mypage')}>주문내역 확인하러 가기</button>
        </>
        
    )
}

export default Order_complete
