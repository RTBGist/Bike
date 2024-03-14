import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Club} from "src/entites/Club/model/types";

export const updateClub = createAsyncThunk(
		'clubsSlice/updateClub',
		async (club: Club, thunkAPI) => {
			const response = await axios.put(`http://localhost:8000/clubs/${club.id}`, club);

			return response.data;
		}
)