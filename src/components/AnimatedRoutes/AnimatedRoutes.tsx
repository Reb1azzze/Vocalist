import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import MainPerformance from "../../pages/MainPerformance/MainPerformance";
import VocalLessons from "../../pages/VocalLessons/VocalLessons";
import Menu from "../../pages/Menu/Menu";
import { AnimatePresence } from 'framer-motion';
import OnlineCourses from "../../pages/OnlineCourses/OnlineCourses";
import Contacts from "../../pages/Contacts/Contacts";
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" Component={MainPerformance}/>
                <Route path="/vocalLessons" Component={VocalLessons}/>
                <Route path="/onlineCourses" Component={OnlineCourses}/>
                <Route path="/Contacts" Component={Contacts}/>
                <Route path="/menu" Component={Menu}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;