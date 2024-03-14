import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getClub = createAsyncThunk(
		'clubsSlice/getClub',
		async (id: string, thunkAPI) => {
			const response = await axios.get(`http://localhost:8000/clubs/${id}`);

			return response.data;
		}
)