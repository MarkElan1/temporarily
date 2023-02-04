import React from "react";
import './styles/App.css';
import {
    Route,
    Routes,
} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import PostIdPage from "./pages/PostIdPage";
import Login from "./pages/Login";
import RequireAuth from "./hoc/RequireAuth";
import Home from "./pages/Home";
import AuthProvider from "./hoc/AuthProvider";


function App() {
    const user = false;

    return (
        <AuthProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts/:id" element={<PostIdPage/>}/>
                <Route path="/posts" element={<RequireAuth/>}>
                    <Route element={<Posts/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </AuthProvider>
    )
}

export default App;
