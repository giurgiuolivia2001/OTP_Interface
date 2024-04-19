import './App.css';
import './GenerateOTP/GenerateOTP.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenerateOTP from './GenerateOTP/GenerateOTP.js';
import Login from './Login/Login';
function App() {
    return (
        <div className="page">
            <Router>
                <Routes>
                    <Route path="/" element={<GenerateOTP />} />
                    <Route path={"/Login"} element={<Login/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
