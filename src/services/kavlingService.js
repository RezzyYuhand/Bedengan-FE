import {apiClient} from "./apiClient.js";

export const getAllKavling = async (token) => {
    try {
        const response = await apiClient.get('/kavling', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const createKavling = async (token, request) => {
    try {
        const response = await apiClient.post(
            '/kavling',
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

export const getKavlingById = async (token, id) => {
    try {
        const response = await apiClient.get(`/kavling/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const updateKavlingById = async (token, id, request) => {
    try {
        const response = await apiClient.put(
            `/kavling/${id}`,
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

export const deleteKavlingById = async (token, id) => {
    try {
        const response = await apiClient.delete(`/kavling/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};