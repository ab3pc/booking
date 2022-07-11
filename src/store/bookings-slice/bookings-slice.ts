import { BookTripBodyType } from './../../request/bookings/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {InitialStateType} from './types';
import BookingsRequests from '../../request/bookings/bookings'

const initialState: InitialStateType = {
  bookings: [],
  error: null,
  loading: false
}

export const getAllTrips = createAsyncThunk(
  'bookings/getAll', async(_, {rejectWithValue, getState}) => {
    try {
    const { data } = await BookingsRequests.getBookings();
      return data
    } catch (e) {
      //@ts-ignore
       return rejectWithValue(e.response.data)
    }
  }
)
export const bookAtrip = createAsyncThunk(
  'bookings/getTrip', async(body:BookTripBodyType, {rejectWithValue, getState}) => {
    try {

    const { data } = await BookingsRequests.bookTrip(body);
      return data
    } catch (e) {
      //@ts-ignore
       return rejectWithValue(e.response.data)
    }
  }
)

export const deleteBookings = createAsyncThunk(
  'bookings/deleteTrip', async(tripId:string, {rejectWithValue, getState}) => {
    try {

    const { data } = await BookingsRequests.deleteBooking(tripId);
      return data
    } catch (e) {
      //@ts-ignore
       return rejectWithValue(e.response.data)
    }
  }
)

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    deleteBookingsItem (state, action:PayloadAction<string>) {
      const tripId = action.payload;
      state.bookings = state.bookings.filter(item => item.id !==tripId)
    }
  },
  extraReducers: {
    [getAllTrips.fulfilled.type]: (state, action:PayloadAction<any>) => {
      state.bookings = action.payload
      state.loading = false
    },
    [getAllTrips.pending.type]: (state, action:PayloadAction<any>) => {
      state.loading = true
    },
    [getAllTrips.pending.type]: (state, action:PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload
    },
    [bookAtrip.fulfilled.type]: (state, action:PayloadAction<any>) => {
      state.bookings = [...state.bookings, action.payload] 
      state.loading = false
    },
    [bookAtrip.pending.type]: (state, action:PayloadAction<any>) => {
      state.loading = true
    },
    [bookAtrip.pending.type]: (state, action:PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload
    },
    [deleteBookings.fulfilled.type]: (state, action:PayloadAction<any>) => {
      //state.bookings = [...state.bookings, action.payload] 
      state.loading = false
    },
    [deleteBookings.pending.type]: (state, action:PayloadAction<any>) => {
      state.loading = true
    },
    [deleteBookings.pending.type]: (state, action:PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload
    },

  }
})
export const {deleteBookingsItem} = bookingsSlice.actions;
export default bookingsSlice.reducer