import React from "react";
import Card3 from "./Card3";
import apt1 from '../imgs/apt1.jpg'
import oceanview1 from '../imgs/oceanview1.jpg'
import oceanview2 from '../imgs/oceanview2.jpg'
import mountainview1 from '../imgs/mountainview1.jpg'

const listings = [
    {
        id: 1,
        title: "서울의 아늑한 아파트",
        price: 100000,
        rating: 4.9,
        imageUrl: `${apt1}`
    },
    {
        id: 2,
        title: "제주도 바다 뷰 펜션",
        price: 150000,
        rating: 4.8,
        imageUrl: `${oceanview1}`
    },
    {
        id: 3,
        title: "제주도 바다 뷰 펜션",
        price: 120000,
        rating: 4.7,
        imageUrl: `${oceanview2}`
    },
    {
        id: 4,
        title: "산뷰가 아름다운 호텔",
        price: 200000,
        rating: 4.1,
        imageUrl: `${mountainview1}`
    }
];


function CardContainer(){
    return(
        <div className="card-container">
            {listings.map(listings => (
                <Card3 key={listings.id} {...listings}/>
                ))}
        </div>
    );
}

export default CardContainer;