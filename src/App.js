import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoadLibrary from "./.load";
import PopularRoom from "./pages/Accomodations/PopularRoom";
import LoginPage from './pages/Login';

const Home = lazy(() => new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/Home')), 800);
}));

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={
                        <Suspense fallback={<LoadLibrary.HomeLoad />}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/populer-room" element={
                        <Suspense fallback={<LoadLibrary.AccomodationsLoad />}>
                            <PopularRoom />
                        </Suspense>
                    } />
                    <Route path="/regis" element={
                        <Suspense fallback={<div>Loading Family Room...</div>}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/business-room" element={
                        <Suspense fallback={<div>Loading Business Room...</div>}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/load" element={
                        <Suspense fallback={<LoadLibrary.HomeLoad />}>
                            {/* <Loader /> */}
                        </Suspense>
                    } />
                    <Route path="/login" element={
                        <LoginPage />
                    } />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        );
    }
}
