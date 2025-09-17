const API_BASE_URL = 'http://localhost:8083';

class NewsAPI {
    static async getAllNews() {
        const response = await fetch(`${API_BASE_URL}/publicaciones`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get news');
        }
        return response.json();
    }

    static async createNews(newsData) {
        const response = await fetch(`${API_BASE_URL}/publicaciones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(newsData),
        });
        if (!response.ok) {
            throw new Error('Failed to create news');
        }
        return response.json();
    }

    static async getNewsById(newsId) {
        const response = await fetch(`${API_BASE_URL}/publicaciones/${newsId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get news');
        }
        return response.json();
    }

    static async updateNews(newsId, newsData) {
        const response = await fetch(`${API_BASE_URL}/publicaciones/${newsId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(newsData),
        });
        if (!response.ok) {
            throw new Error('Failed to update news');
        }
        return response.json();
    }

    static async deleteNews(newsId) {
        const response = await fetch(`${API_BASE_URL}/publicaciones/${newsId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to delete news');
        }
        return response.json();
    }
}
