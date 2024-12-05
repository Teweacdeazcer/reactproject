import React from "react";

function Card2({ title, className, children }) {
    return (
        <div className={`card ${className}`}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
}

export default Card2;