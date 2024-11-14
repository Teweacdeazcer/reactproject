import React from "react";
import StudentAtendance from "./StudentAtendance";

function AppStudentAtendance(){
    const students1 = [
        {id:1, name:"윤이나",grade:2,major:"인공지능소프트웨어"},
        {id:2, name:"박한경",grade:3,major:"전기"},
        {id:3, name:"임희정",grade:3,major:"그린에너지"},
        {id:4, name:"유현주",grade:4,major:"시각디자인"},
        {id:5, name:"마다솜",grade:1,major:"인공지능소프트웨어"}
    ]

    const students2 = [
        {id:1, name:"김건우",grade:2,major:"인공지능소프트웨어"},
        {id:2, name:"오현민",grade:3,major:"전기"},
        {id:3, name:"정재선",grade:3,major:"그린에너지"},
        {id:4, name:"조현욱",grade:4,major:"시각디자인"},
        {id:5, name:"잔렌델",grade:1,major:"인공지능소프트웨어"}
    ]

    return(
        <div>
            <StudentAtendance students={students1}/>
            <hr/>
            <StudentAtendance students={students2}/>
        </div>
    );
}

export default AppStudentAtendance;