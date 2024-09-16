import axios from 'axios';

const API_URL = 'https://api.perkemahanbedengan.com/api/v1'

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getUserById = async (token) => {
    try {
        const response = await apiClient.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const loginUser = async (email, password) => {
    try {
      const response = await apiClient.post('/user/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
};

export const registerUser = async (formData) => {
    try {
      const response = await apiClient.post('/user/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
};

export const updateUser = async (userData, token) => {
    try {
      const response = await apiClient.put('/user', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
};

export const logoutUser = async (token) => {
    try {
      const response = await apiClient.get('/user/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
};