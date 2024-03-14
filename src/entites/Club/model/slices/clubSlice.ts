import {createSlice} from "@reduxjs/toolkit";
import {getAllClubs} from "../services/getAllClubs";
import {createClub} from "../services/createClub";
import {deleteClub} from "../services/deleteClub";
import {getClub} from "../services/getClub";

interface initialStateProps {
	loading: boolean,
	error: string,
	entities: any
}

const initialState: initialStateProps = {
	loading: false,
	entities: {
		clubDetail: {},
		clubs: []
	},
	error: ''
}

const clubSlice = createSlice({
	name: 'clubsSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllClubs.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getAllClubs.fulfilled, (state, action) => {
			state.loading = false;
			state.entities.clubs = action.payload;
		});
		builder.addCase(getAllClubs.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});

		builder.addCase(createClub.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(createClub.fulfilled, (state, action) => {
			state.loading = false;
		});
		builder.addCase(createClub.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});

		builder.addCase(deleteClub.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(deleteClub.fulfilled, (state, action) => {
			state.loading = false;
		});
		builder.addCase(deleteClub.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});

		builder.addCase(getClub.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getClub.fulfilled, (state, action) => {
			state.loading = false;
			state.entities.clubDetail = action.payload;
		});
		builder.addCase(getClub.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});

// export const {} = clubSlice.actions;
export default clubSlice.reducer;