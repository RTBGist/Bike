import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllClubs = createAsyncThunk(
		'clubsSlice/getAllClubs',
		async () => {
			const response = await axios.get('http://localhost:8000/clubs');
			return response.data;
		}
)