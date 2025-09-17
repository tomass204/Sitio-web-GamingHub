const NEWS_API_BASE_URL = 'http://localhost:8083';

class NewsAPI {
    static async getAllPublications() {
        const response = await fetch(`${NEWS_API_BASE_URL}/publicaciones`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get publications');
        }
        return response.json();
    }

    static async getPublicationById(id) {
        const response = await fetch(`${NEWS_API_BASE_URL}/publicaciones/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get publication');
        }
        return response.json();
    }

    static async createPublication(publicationData) {
        const response = await fetch(`${NEWS_API_BASE_URL}/publicaciones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(publicationData),
        });
        if (!response.ok) {
            throw new Error('Failed to create publication');
        }
        return response.json();
    }

    static async updatePublication(id, publicationData) {
        const response = await fetch(`${NEWS_API_BASE_URL}/publicaciones/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(publicationData),
        });
        if (!response.ok) {
            throw new Error('Failed to update publication');
        }
        return response.json();
    }

    static async deletePublication(id) {
        const response = await fetch(`${NEWS_API_BASE_URL}/publicaciones/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to delete publication');
        }
        return response.json();
    }
}
