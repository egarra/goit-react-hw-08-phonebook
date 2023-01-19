import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async function(_, { rejectWithValue }) {
      try {
        const response = await axios.get(`/contacts`)
  
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )
  
  export const deleteFetchedContact = createAsyncThunk(
    'contacts/deleteFetchedContact',
    async function(id, {rejectWithValue}) {
      try {
        const response = await axios.delete(`/contacts/${id}`)
        return response.data
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )
  
  export const addFetchedContact = createAsyncThunk(
    'contacts/addFetchedContact',
    async function(contact, {rejectWithValue}) {
     try {
      
      const response = await axios.post(`/contacts`, {
        ...contact
      })
     
      return response.data
    }catch (error) {
      return rejectWithValue(error.message)
     }
    }
  )


  //////////User operations

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', newUser);
      setAuthHeader(res.data.token);
      console.log(res)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
