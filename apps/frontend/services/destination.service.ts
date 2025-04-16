import axios from 'axios';

const API_URL = '/destinations';

export const getAllDestinations = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};

export const getDestinationBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching destination with slug ${slug}:`, error);
    throw error;
  }
};

export const createDestination = async (destinationData) => {
  try {
    const response = await axios.post(API_URL, destinationData);
    return response.data;
  } catch (error) {
    console.error('Error creating destination:', error);
    throw error;
  }
};

export const updateDestination = async (slug, destinationData) => {
  try {
    const response = await axios.put(`${API_URL}/${slug}`, destinationData);
    return response.data;
  } catch (error) {
    console.error(`Error updating destination with slug ${slug}:`, error);
    throw error;
  }
};

export const deleteDestination = async (slug) => {
  try {
    const response = await axios.delete(`${API_URL}/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting destination with slug ${slug}:`, error);
    throw error;
  }
};
