import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import authorizationSlice from './authorization-slice/authorization-slice'
import bookingsSlice from './bookings-slice/bookings-slice';
import tripsSlice from './trips-slice/trips-slice';

export const store = configureStore({
  reducer: {
    authorization: authorizationSlice,
    trips: tripsSlice,
    bookings: bookingsSlice
  
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;