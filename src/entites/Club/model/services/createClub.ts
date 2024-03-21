import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Club} from "src/entites/Club/model/types";
import {getAllClubs} from "src/entites/Club";

export const createClub = createAsyncThunk(
		'clubsSlice/createClub',
		async (club: Club, thunkAPI) => {
			try {
				const response = await axios.post('http://localhost:8000/clubs', club);

				if(!response.data) {
					throw new Error()
				}

				if(response) {
					thunkAPI.dispatch(getAllClubs());
				}

				return response.data;
			} catch (e) {
				return thunkAPI.rejectWithValue(e);
			}
		}
)