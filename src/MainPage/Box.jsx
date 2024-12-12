import React from "react";

function Box({ imageUrl, text_main, text_sub, id }) {
    return (
        <div className="box">
            <img src={imageUrl} alt={text_main} />
            <div className="box-content">
                <h2 className="text-main">{text_main}</h2>
                <p className="text-sub">{text_sub}</p>
                {id === 1 ? (
                    <button className="button">Log In</button>
                ) : (
                    <button className="button">바로가기</button>
                )}
            </div>
        </div>
    );
}

export default Box;