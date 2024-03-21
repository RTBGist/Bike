import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Club} from "src/entites/Club/model/types";

export const updateClub = createAsyncThunk(
		'clubsSlice/updateClub',
		async (club: Club, thunkAPI) => {
			try {
				const response = await axios.put(`http://localhost:8000/clubs/${club.id}`, club);;

				if(!response.data) {
					throw new Error()
				}

				return response.data;
			} catch (e) {
				return thunkAPI.rejectWithValue(e)
			}
		}
)