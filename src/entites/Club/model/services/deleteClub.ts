import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getAllClubs} from "src/entites/Club";

export const deleteClub = createAsyncThunk(
		'clubsSlice/deleteClub',
		async (id: string, thunkAPI) => {
			try {
				const response = await axios.delete(`http://localhost:8000/clubs/${id}`);

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