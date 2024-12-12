import React from "react";
import Box from "./Box";
import model1 from './imgs/model1.jpg';
import model2 from './imgs/model2.jpg';
import model3 from './imgs/model3.jpg';
import model4 from './imgs/model4.jpg';
import model5 from './imgs/model5.jpg';

const listings = [
    {
        id: 1,
        text_main: "AISW",
        text_sub: "Made by KimSeungMin",
        imageUrl: `${model1}`
    },
    {
        id: 2,
        text_main: "GLASSES",
        text_sub: "다양한 안경을 만나보세요!",
        imageUrl: `${model2}`
    },
    {
        id: 3,
        text_main: "ON SALE",
        text_sub: "Magic Eyes의 인기 상품 할인 중!",
        imageUrl: `${model3}`
    },
    {
        id: 4,
        text_main: "EVENT",
        text_sub: "신규 고객 회원가입 시 최대 15% 할인 이벤트!",
        imageUrl: `${model4}`
    },
    {
        id: 5,
        text_main: "INQUIRY",
        text_sub: "궁금한 점이 있으시면 언제든지 문의해 주세요!",
        imageUrl: `${model5}`
    }
];

function BoxGroup() {
    return (
        <div className="box-group">
            {listings.map(listing => (
                <Box key={listing.id} {...listing} />
            ))}
        </div>
    );
}

export default BoxGroup;