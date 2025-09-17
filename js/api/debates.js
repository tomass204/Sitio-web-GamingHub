const DEBATES_API_BASE_URL = 'http://localhost:8086';

class DebatesAPI {
    static async getAllDebates() {
        const response = await fetch(`${DEBATES_API_BASE_URL}/debates`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get debates');
        }
        return response.json();
    }

    static async getDebateById(id) {
        const response = await fetch(`${DEBATES_API_BASE_URL}/debates/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get debate');
        }
        return response.json();
    }

    static async createDebate(debateData) {
        const response = await fetch(`${DEBATES_API_BASE_URL}/debates`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(debateData),
        });
        if (!response.ok) {
            throw new Error('Failed to create debate');
        }
        return response.json();
    }

    static async updateDebate(id, debateData) {
        const response = await fetch(`${DEBATES_API_BASE_URL}/debates/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(debateData),
        });
        if (!response.ok) {
            throw new Error('Failed to update debate');
        }
        return response.json();
    }

    static async deleteDebate(id) {
        const response = await fetch(`${DEBATES_API_BASE_URL}/debates/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to delete debate');
        }
        return response.json();
    }
}
