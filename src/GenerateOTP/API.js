class API {
    static async generateOTP(email) {
        try {
            const response = await fetch(`/OneTimePassword/GenerateOTP/${email}`, {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error('Failed to generate OTP');
            }

            const data = await response.json();
            return data.OTP;
        } catch (error) {
            console.error('Error generating OTP:', error);
            throw error;
        }
    }


}

export default API;
