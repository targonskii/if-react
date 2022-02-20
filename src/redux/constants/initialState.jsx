export const initialLoginState = {
  isLoggedIn: false,
  email: '',
  password: '',
};

export const initialHotelsState = {
  popularHotels: [],
  availableHotels: [],
};

export const initialQueryState = {
  search: '',
  dateFrom: null,
  dateTo: null,
  adults: 2,
  children: [],
  rooms: 1,
};

export const initialThemesState = {
  theme: 'dark',
};
