import React, { useState } from "react";
import "./GenerateOTP.css";
import { Link } from "react-router-dom";

const GenerateOTP = () => {
    const [email, setEmail] = useState("");
    const [generatedOTP, setGeneratedOTP] = useState(null);

    const handleGenerateOTP = async () => {
        try {

            const response = await fetch(`/OneTimePassword/GenerateOTP/${email}`, {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error('Failed to generate OTP');
            }

            const data = await response.json();
            setGeneratedOTP(data.OTP);
        } catch (error) {
            console.error('Error generating OTP:', error);
        }
    };

    return (
        <div className="page-container-OTP">
            <div className="cover-generateOTP">
                <h1>Generate OTP</h1>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="generate-button" onClick={handleGenerateOTP}>
                    <Link to="/login">
                    Generate OTP
                    </Link>
                </button>
                {generatedOTP && (

                    <div>
                        <p>OTP generated: {generatedOTP}</p>
                    </div>

                )}
                <Link to="/login">
                    <p>Already have an OTP? Go to login</p>
                </Link>
            </div>
        </div>
    );
};

export default GenerateOTP;
