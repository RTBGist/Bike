import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getClub = createAsyncThunk(
		'clubsSlice/getClub',
		async (id: string, thunkAPI) => {
			try {
				const response = await axios.get(`http://localhost:8000/clubs/${id}`);

				if(!response.data) {
					throw new Error()
				}

				return response.data;
			} catch (e) {
				return thunkAPI.rejectWithValue(e)
			}
		}
)