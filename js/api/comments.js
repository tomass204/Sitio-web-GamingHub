const COMMENTS_API_BASE_URL = 'http://localhost:8087/api/GamingHub/v1/Comentarios';

class CommentsAPI {
    static async getCommentsByPublication(publicationId) {
        const response = await fetch(`${COMMENTS_API_BASE_URL}/${publicationId}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Failed to get comments');
        }
        return response.json();
    }

    static async createComment(commentData) {
        const response = await fetch(`${COMMENTS_API_BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        });
        if (!response.ok) {
            throw new Error('Failed to create comment');
        }
        return response.json();
    }

    static async updateComment(commentId, commentData) {
        const response = await fetch(`${COMMENTS_API_BASE_URL}/${commentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        });
        if (!response.ok) {
            throw new Error('Failed to update comment');
        }
        return response.json();
    }

    static async deleteComment(commentId) {
        const response = await fetch(`${COMMENTS_API_BASE_URL}/${commentId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete comment');
        }
        return response.json();
    }
}
