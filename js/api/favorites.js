const FAVORITES_API_BASE_URL = 'http://localhost:8085';

class FavoritesAPI {
    static async getFavoritesByUser(userId) {
        const response = await fetch(`${FAVORITES_API_BASE_URL}/favoritos/usuario/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get favorites');
        }
        return response.json();
    }

    static async addToFavorites(favoriteData) {
        const response = await fetch(`${FAVORITES_API_BASE_URL}/favoritos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(favoriteData),
        });
        if (!response.ok) {
            throw new Error('Failed to add to favorites');
        }
        return response.json();
    }

    static async removeFromFavorites(id) {
        const response = await fetch(`${FAVORITES_API_BASE_URL}/favoritos/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to remove from favorites');
        }
        return response.json();
    }

    static async isFavorite(userId, entityType, entityId) {
        const response = await fetch(`${FAVORITES_API_BASE_URL}/favoritos/check/${userId}/${entityType}/${entityId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to check favorite status');
        }
        return response.json();
    }
}
