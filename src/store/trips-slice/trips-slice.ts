import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {InitialStateType} from "./types"
import TripsRequests from '../../request/trips/trips'

const initialState: InitialStateType = {
  fetchedTrips: [],
  error: null,
  loading: false
}

export const getAllTrips = createAsyncThunk(
  'trips/getAll', async(_, {rejectWithValue, getState}) => {
    try {
    const { data } = await TripsRequests.getTrips();
      return data
    } catch (e) {
      //@ts-ignore
       return rejectWithValue(e.response.data)
    }
  }
)

export const getTrip = createAsyncThunk(
  'trips/getAll', async(id:string, {rejectWithValue, getState}) => {
    try {
    const { data } = await TripsRequests.getTripByID(id);
      return data
    } catch (e) {
      //@ts-ignore
       return rejectWithValue(e.response.data)
    }
  }
)

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    clearErrorsTrips(state) {
      state.error = null
},
  },
  extraReducers: {
    [getAllTrips.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.fetchedTrips = action.payload;
      state.loading = false;
          
    },
    [getAllTrips.pending.type]: (state, action: PayloadAction<any>) => {
      state.loading = true;
          
    },
    [getAllTrips.rejected.type]: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
          
    },
  }
})
export const {clearErrorsTrips} = tripsSlice.actions
export default tripsSlice.reducer