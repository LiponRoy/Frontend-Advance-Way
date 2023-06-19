import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './redux/feature/userApi';
// import filterSlice from '../feature/filterSlice';

export const store = configureStore({
	reducer: {
		// for RTK
		[userApi.reducerPath]: userApi.reducer,
		// for Redux Toolkit
		// filterS: filterSlice,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
