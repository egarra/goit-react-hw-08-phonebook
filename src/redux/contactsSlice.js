import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteFetchedContact, addFetchedContact } from './operations';

const setError = (state, {payload}) => {
  state.status = 'rejected';
  state.error = payload;
}

const setPending = (state) => {
  state.status = 'loading';
}

const contactsSlice = createSlice({
  
  name: 'contacts',
  initialState: {
    contacts: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    //pending
    builder.addCase(fetchContacts.pending, setPending)
    builder.addCase(deleteFetchedContact.pending, setPending)
    builder.addCase(addFetchedContact.pending, setPending)
    //fullfilled
    builder.addCase(fetchContacts.fulfilled, (state, {payload}) => {
      state.status = 'resolved';
      state.contacts = payload;
    })
    builder.addCase(addFetchedContact.fulfilled, (state, {payload}) => {
      state.status = 'resolved';
      state.contacts.push(payload);
    })
    builder.addCase(deleteFetchedContact.fulfilled, (state, {payload}) => {
      state.status = 'resolved';
      state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
    })
    //rejected
    builder.addCase(fetchContacts.rejected, setError)
    builder.addCase(deleteFetchedContact.rejected, setError)
    builder.addCase(addFetchedContact.rejected, setError)
  }
});
export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
