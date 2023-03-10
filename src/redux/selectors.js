export const selectContacts = state => state.contacts.contacts;

export const selectStatus = state => state.contacts.status;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;


export const selectVisibleContacts = state => {
    const contacts = selectContacts(state);
    const filtered = selectFilter(state);
  
    return contacts.filter(contact => contact.name.toLowerCase().includes(filtered.toLowerCase()))
  };

  