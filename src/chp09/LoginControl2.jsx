import React, {useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "../test/Greeting";
import WarningBanner from "./WarningBannner";

function LoginControl2(props){
    const [isLoggedIn, setIsLoggedin] = useState(false)
    const [showWarning, setShowWarning] = useState(false);

    const handleLoginClick=()=>{
        setIsLoggedin(true);
        setShowWarning(true);
    }

    const handleLogoutClick=()=>{
        setIsLoggedin(false);
        setShowWarning(false);
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            <WarningBanner warning={showWarning} />
            {isLoggedIn? <LogoutButton onClick={handleLogoutClick}/>:
                         <LoginButton onClick={handleLoginClick}/>}
        </div>
    );
}

export default LoginControl2