// src/utils/localStorage.js

export const loadCartState = () => {
  try {
    const serialized = localStorage.getItem('cart');
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    console.error('Failed to load cart from localStorage', err);
    return undefined;
  }
};

export const saveCartState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('cart', serialized);
  } catch (err) {
    console.error('Failed to save cart to localStorage', err);
  }
};
