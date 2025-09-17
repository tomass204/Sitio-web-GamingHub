const API_BASE_URL = 'http://localhost:8081';

class AuthAPI {
    static async login(credentials) {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    }

    static async register(userData) {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        return response.json();
    }

    static async getProfile(userId) {
        const response = await fetch(`${API_BASE_URL}/usuarios/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get profile');
        }
        return response.json();
    }

    static async updateProfile(userId, userData) {
        const response = await fetch(`${API_BASE_URL}/usuarios/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error('Failed to update profile');
        }
        return response.json();
    }
}
