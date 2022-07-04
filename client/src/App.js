// import PersonIcon from '@mui/icons-material/Person';
// import topbar from "./components/topbar";
import Home from "./Home";
import ProfilePage from "./components/ProfilePage";
import "./components/index.css";
import Menubar from "./components/Menubar";
import Login from "./components/Login";
//Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Menubar></Menubar>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route
            path="/profile/:username"
            element={<ProfilePage></ProfilePage>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/register"
            element={<Login register="register"></Login>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
//tutorial
//https://www.youtube.com/playlist?list=PLj-4DlPRT48nfYgDK00oTjlDF4O0ZZyG8
//install material ui packages.
//https://mui.com/material-ui/material-icons/
//to resolve depency use, npm config set legacy-peer-deps true.
//to download material ui : link https://stackoverflow.com/questions/50829728/how-to-use-material-ui-icons-in-react

// to use material icons : type material icons

//sidebar,feed,rightsidebar
//You need to install Icons
//Yarn add @material-ui/icons
//npm install @material-ui/icons

//*/to give the position sticky to a scrollbar div use height with it */
//*/don't give height to main  */

//To install router use npm install react-router-dom
//Routing is used for showing which component should be show based on the url shown in the searchbar
//726
//In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

//import { Switch, Route } from "react-router-dom";
//to

//import { Routes ,Route } from 'react-router-dom';
//You also need to update the Route declaration from
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

//whenever we send request to the browser, it takes every request as new and send the whole html page.
//https://www.youtube.com/watch?v=aZGzwEjZrXc

//Webkit scrollbar is not work in firefox : Note: This only works on -webkit browsers like chrome, safari because there are not W3C standard for CSS and therefore most browsers just ignore them.

//100vw means 100% of the viewport width. 100vh; 100% of the height. Very handy when doing full screen slide
//axios https://axios-http.com/docs/post_example

//npm add timeago
//npm remove timeago to remove it from the nodemodules
//npm add timeago.js
//https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3
//npm add is an aliase for npm install
