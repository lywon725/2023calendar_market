import React from 'react'

function Mypage() {
    return (
        <>
        <div>마이페이지</div>
        <div onClick={() => (window.location.href = '/UserEdit')}> 내정보 수정하기</div>
        </>
    )
}

export default Mypage
