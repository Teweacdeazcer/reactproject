import React from "react";
import './styles.css'
import ProfileCard2 from "./ProfileCard2";
import Card2 from "./Card2";

function MainPage(){
    return(
        <div className="main-container">
            <h1>홈페이지 메인 화면</h1>
            <ProfileCard2/>
            <Card2 className="notice-card" title="공지사항">
                <p>공지사항</p>
                <p>최신 소식 확인</p>
            </Card2>

            <Card2 className="event-card" title="이벤트">
                <p>이벤트</p>
                <ul>
                    <li>이벤트 1: 할인 쿠폰</li>
                    <li>이벤트 2: 무료 배송</li>
                </ul>
            </Card2>

            <Card2 className="inquiry-card" title="문의하기">
                <p>궁금한 점이 있으시면 언제든지 문의하세요</p>
                <button>문의하기</button>
            </Card2>
        </div>
    )
}

export default MainPage;