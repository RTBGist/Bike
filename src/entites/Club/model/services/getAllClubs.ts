import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllClubs = createAsyncThunk(
		'clubsSlice/getAllClubs',
		async (arg, thunkAPI) => {
			try {
				const response = await axios.get('http://localhost:8000/clubs');

				if(!response.data) {
					throw new Error()
				}

				return response.data;
			} catch (e) {
				return thunkAPI.rejectWithValue(e);
			}


		}
)