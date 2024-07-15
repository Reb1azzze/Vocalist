import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import MyWay from "../../pages/MyWay/MyWay";
import VocalLessons from "../../pages/VocalLessons/VocalLessons";
import Menu from "../../pages/Menu/Menu";
import { AnimatePresence } from 'framer-motion';
import Performance from "../../pages/Performance/Performance";
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" Component={MyWay}/>
                <Route path="/vocalLessons" Component={VocalLessons}/>
                <Route path="/onlineCourses" Component={Performance}/>
                <Route path="/menu" Component={Menu}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;