import { BrowserRouter, Routes, Route,Match} from "react-router-dom";

import Dashboard from "../../components/Dashboard/Dashboard";

import React from 'react'
import Homepage from '../../components/Homepage';
import Navbar from "../../components/layout/Navbar";
import Search from "../../components/search/Search";
import Profile from "../../components/profile/Profile";

function Router()
{

        return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" exact element={<Homepage />} />
        </Routes>
    </BrowserRouter>
    )
}

export default Router