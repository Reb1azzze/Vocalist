import React, {FC} from 'react';
import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from "../components/AnimatedRoutes/AnimatedRoutes";

import './App.css';
import '../index.css';

const App:FC = () => {
    return (
        <Router>
            <div className='App font-Peridot'>
                <div className='margin'/>
                <Navbar/>
                <AnimatedRoutes/>
            </div>
        </Router>
    );
};

export default App;