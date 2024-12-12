import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from "./chp03/Library";
import ConfirmDialog from "./chp04/ConfirmDialog";
import Clock from "./chp04/Clock";
import CommentList from "./chp05/CommentList";
import NotificationList from "./chp06/NotificationList";
import Accommodate from "./chp07/Accommodate";
import Toggle from "./chp08/Toggle";
import MyButton from "./chp08/MyButton";
import Toggle2 from "./chp08/Toggle2";
import ClickButton from "./chp08/ClickButton";
import Counter from "./chp08/Counter";
import InputTest from "./chp08/InputTest";
import ConfirmButton from "./chp08/ConfirmButton";
import ConfirmButton3 from "./chp08/ConfirmButton3";
import ConfirmButton2 from "./chp08/ConfirmButton2";
import Greeting from "./test/Greeting";
import LoginControl from "./chp09/LoginControl";
import Mailbox from "./chp09/Mailbox";
import LoginControl2 from "./chp09/LoginControl2";
import LandingPage from "./chp09/LandingPage";
import AppNumberList from "./chp10/AppNumberList";
import StudentAtendance from "./chp10/StudentAtendance";
import AppStudentAtendance from "./chp10/AppStudentAtendance";
import AttendanceCard from "./chp10/AttendanceCard";
import Calculator from "./chp12/Calculator";
import Calculator2 from "./chp12/Calculator2";
import Calculator3 from "./chp12/Calculator3";
import DistanceConverter from "./chp12/distance/DistanceConverter";
import ProfileCard from "./chp13/ProfileCard";
import MainPage from "./chp13/ex1/MainPage";
import AirApp from "./chp13/chp13_airbnbHome/AirApp";
import GlassesShop from "./MainPage/GlassesShop";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlassesShop/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
