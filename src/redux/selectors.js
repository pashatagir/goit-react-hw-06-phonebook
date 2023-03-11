import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
const selectFilter = state => state.filter.query;

// createSelector
export const selectFilteredContacts = createSelector(
  // Масив вхідних селекторів
  [selectContacts, selectFilter],
  // Функція перетворювач
  (contacts, filter) => {
    // Виконуємо обчислення та повертаємо результат
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
