import {apiClient} from "./apiClient.js";

export const getAllGround = async (token) => {
    try {
        const response = await apiClient.get('/ground', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const createGround = async (token, request) => {
    try {
        const response = await apiClient.post(
            '/ground',
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

export const getGroundById = async (token, id) => {
    try {
        const response = await apiClient.get(`/ground/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const updateGroundById = async (token, id, request) => {
    try {
        const response = await apiClient.put(
            `/ground/${id}`,
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

export const deleteGroundById = async (token, id) => {
    try {
        const response = await apiClient.delete(`/ground/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};