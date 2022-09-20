import React, { Suspense } from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';
import Home from "./pages/home";

function Index() {
    return (
        <Suspense
            fallback={
                <div
                    style={ {
                        color: "#fff",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                    } }
                >
                    Loading...
                </div>
            }
        >
            <Routes>
                <Route path="/">
                    <Route path="/" element={ <Navigate replace to="/home" /> } />
                    <Route path="/home" element={ <Home /> } />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default Index;