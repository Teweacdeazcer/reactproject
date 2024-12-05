import React from "react";
import Card from "./Card";


function ProfileCard(){
    return(
        <div>
            <Card title="SeungMin Kim" backgroundColor="peachpuff">
                <p>안녕하세요~ 김승민입니다!</p>
                <p>React로 Card Template을 만들고 있습니다.</p>
            </Card>
            <Card title="Linda Kim" backgroundColor="aquamarine">
                <p>안녕하세요~ 김린다입니다!</p>
                <p>React로 Card Template을 만들고 있습니다.</p>
            </Card>
            <Card title="Simon Je" backgroundColor="green">
                <p>안녕하세요~ 제승모입니다!</p>
                <p>React로 Card Template을 만들고 있습니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard