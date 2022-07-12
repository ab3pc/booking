import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAuthBodyType, UserAuthRegBodyType } from "../../request/auth/types";
import { RootState } from "../store";
import { AuthorizationStateType, formToggle, FormType } from "./types";
import AuthRequests from "../../request/auth/auth"

const initialState: AuthorizationStateType = {
  auth: false,
  typeForm: formToggle.SIGN_IN,
  login: '',
  userId: null,
  name: '',
  password: '',
  error: null,
  loading: false

}

export const signIn = createAsyncThunk(
  'authorization/signIn', async (_, { rejectWithValue, getState }) => {
    const state = (getState() as RootState).authorization;
    // if(!state.login || !state.password) {
    // 	return rejectWithValue('Fields should not be empty')
    // } else {
    try {
      const body: UserAuthBodyType = {
        email: state.login,
        password: state.password
      };
      const { data } = await AuthRequests.auth(body);
      return data
    } catch (e) {
      //@ts-ignore
      return rejectWithValue(e.response.data)


    }
  }
)

export const signUp = createAsyncThunk(
  'authorization/signUp', async (_, { rejectWithValue, getState }) => {
    const state = (getState() as RootState).authorization;
    // if(!state.login || !state.password) {
    // 	return rejectWithValue('Fields should not be empty')
    // } else {
    try {
      const body: UserAuthRegBodyType = {
        email: state.login,
        password: state.password,
        fullName: state.name
      };
      const { data } = await AuthRequests.registr(body);
      console.log(data, 'from server');
      return data
    } catch (e) {
      //@ts-ignore
      return rejectWithValue(e.response.data)

    }
  }
)

export const getUserID = createAsyncThunk(
  'authorization/getUserID', async (_, { rejectWithValue }) => {
    try {
      const { data } = await AuthRequests.getUserId();
      return data
    } catch (e) {
      //@ts-ignore
      return rejectWithValue(e.response.data)

    }
  }
)

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    changeLogin(state, action: PayloadAction<string>) {
      state.login = action.payload
      state.error = null
    },
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload
      state.error = null
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload
      state.error = null
    },
    toggleTypeForm(state, action: PayloadAction<FormType>) {
      state.typeForm = action.payload
    },
    exit(state) {
      state.auth = false,
        localStorage.clear()
    },
    toggleAuth(state, action: PayloadAction<boolean>) {
      state.auth = action.payload
    }

  },
  extraReducers: {
    [signIn.fulfilled.type]: (state, action: PayloadAction<any>) => {
      localStorage.setItem('access_token', JSON.stringify(action.payload.token))
      state.login = ''
      state.userId = action.payload.user.id
      state.password = ''
      state.error = null
      state.auth = true
      state.loading = false
    },
    [signIn.pending.type]: (state, action: PayloadAction<any>) => {
      state.loading = true
    },
    [signIn.rejected.type]: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.auth = false
      state.loading = false

    },
    [signUp.fulfilled.type]: (state, action: PayloadAction<any>) => {
      localStorage.setItem('access_token', JSON.stringify(action.payload.token))
      state.login = ''
      state.userId = action.payload.user.id
      state.password = ''
      state.error = null
      state.auth = true
      state.loading = false
    },
    [signUp.pending.type]: (state, action: PayloadAction<any>) => {
      state.loading = true
    },
    [signUp.rejected.type]: (state, action: PayloadAction<any>) => {
      state.error = action.payload
      state.auth = false
      state.loading = false
    },
    [getUserID.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.userId = action.payload.user.id
     },
    [getUserID.rejected.type]: (state, action: PayloadAction<any>) => {
      state.error = action.payload
      state.auth = false
      state.loading = false
    },

  }
})

export const { changeLogin,
  changePassword,
  toggleTypeForm,
  exit,
  toggleAuth,
  changeName,
} = authorizationSlice.actions;
export default authorizationSlice.reducer