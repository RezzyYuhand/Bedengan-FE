import {apiClient} from "./apiClient.js";

export const getAllPerlengkapan = async (token) => {
    try {
        const response = await apiClient.get('/perlengkapan', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const createPerlengkapan = async (token, request) => {
    try {
        const response = await apiClient.post(
            '/perlengkapan',
            request,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const getPerlengkapanById = async (token, id) => {
    try {
        const response = await apiClient.get(`/perlengkapan/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const updatePerlengkapanById = async (token, id, request) => {
    try {
        const response = await apiClient.put(
            `/perlengkapan/${id}`,
            request,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const deletePerlengkapanById = async (token, id) => {
    try {
        const response = await apiClient.delete(`/perlengkapan/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};