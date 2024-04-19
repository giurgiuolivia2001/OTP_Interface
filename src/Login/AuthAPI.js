
class AuthAPI {
    static async login(email, password) {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data = await response.json();
            return data.token;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }
}

export default AuthAPI;
