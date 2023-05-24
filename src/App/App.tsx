import React, {FC} from 'react';
import Navbar from "../components/Navbar/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import AnimatedRoutes from "../components/AnimatedRoutes/AnimatedRoutes";

const App:FC = () => {
    return (
        <Router>
            <div className='App'>
                <div className='margin'></div>
                <Navbar/>
                <AnimatedRoutes/>
            </div>
        </Router>
    );
};

export default App;