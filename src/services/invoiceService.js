import { apiClient } from "./apiClient.js";

// Get all invoices (general endpoint)
export const getAllInvoiceReservasi = async (token) => {
    try {
        const response = await apiClient.get('/invoice-reservasi', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

// Get all invoices for admin
export const getAllInvoiceReservasiAdmin = async (token) => {
    try {
        const response = await apiClient.get('/admin/invoice-reservasi', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

// Get a single invoice by its ID
export const getInvoiceReservasiById = async (token, id) => {
    try {
        const response = await apiClient.get(`/invoice-reservasi/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

// Create a new invoice reservation
export const createInvoiceReservasi = async (token, request) => {
    try {
        const response = await apiClient.post(
            '/invoice-reservasi',
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

// Update an invoice reservation by ID
export const updateInvoiceReservasiById = async (token, id, request) => {
    try {
        const response = await apiClient.put(
            `/invoice-reservasi/${id}`,
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

// Delete an invoice reservation by ID
export const deleteInvoiceReservasiById = async (token, id) => {
    try {
        const response = await apiClient.delete(`/invoice-reservasi/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

// Update an invoice's status to "ditolak"
export const rejectInvoiceReservasi = async (token, id) => {
    try {
        const response = await apiClient.put(`/invoice-reservasi/${id}/tolak`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

// Update an invoice's status to "verifikasi"
export const verifyInvoiceReservasi = async (token, id) => {
    try {
        const response = await apiClient.put(`/invoice-reservasi/${id}/verifikasi`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

// Update invoice files (perizinan and pembayaran)
export const updateInvoiceReservasiFiles = async (token, id, formData) => {
    try {
        const response = await apiClient.put(
            `/invoice-reservasi/${id}/file`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data', // Make sure to handle file upload correctly
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};
