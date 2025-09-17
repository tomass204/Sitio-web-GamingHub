const MODERATION_API_BASE_URL = 'http://localhost:8084';

class ModerationAPI {
    static async getAllReports() {
        const response = await fetch(`${MODERATION_API_BASE_URL}/reportes`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get reports');
        }
        return response.json();
    }

    static async getReportById(id) {
        const response = await fetch(`${MODERATION_API_BASE_URL}/reportes/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to get report');
        }
        return response.json();
    }

    static async createReport(reportData) {
        const response = await fetch(`${MODERATION_API_BASE_URL}/reportes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(reportData),
        });
        if (!response.ok) {
            throw new Error('Failed to create report');
        }
        return response.json();
    }

    static async updateReportStatus(id, status) {
        const response = await fetch(`${MODERATION_API_BASE_URL}/reportes/${id}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ status }),
        });
        if (!response.ok) {
            throw new Error('Failed to update report status');
        }
        return response.json();
    }

    static async suspendUser(userId, reason) {
        const response = await fetch(`${MODERATION_API_BASE_URL}/moderacion/suspend/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ reason }),
        });
        if (!response.ok) {
            throw new Error('Failed to suspend user');
        }
        return response.json();
    }

    static async hidePublication(publicationId) {
        const response = await fetch(`${MODERATION_API_BASE_URL}/moderacion/hide/${publicationId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to hide publication');
        }
        return response.json();
    }
}
