import axios from 'axios';

const API_URL = '/blogs';

export const getAllBlogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    throw error;
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(API_URL, blogData);
    return response.data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

export const updateBlog = async (slug, blogData) => {
  try {
    const response = await axios.put(`${API_URL}/${slug}`, blogData);
    return response.data;
  } catch (error) {
    console.error(`Error updating blog with slug ${slug}:`, error);
    throw error;
  }
};

export const deleteBlog = async (slug) => {
  try {
    const response = await axios.delete(`${API_URL}/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting blog with slug ${slug}:`, error);
    throw error;
  }
};
