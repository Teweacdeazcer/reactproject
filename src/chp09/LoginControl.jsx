import React, {useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";

function LoginControl(props){
    const [isLoggedIn, setIsLoggedin] = useState(false)

    const handleLoginClick=()=>{
        setIsLoggedin(true);
    }

    const handleLogoutClick=()=>{
        setIsLoggedin(false);
    }

    let btn;
    if (isLoggedIn){
        btn = <LogoutButton onClick={handleLogoutClick}/>
    }else{
        btn = <LoginButton onClick={handleLoginClick}/>
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );
}

export default LoginControl