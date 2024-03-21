export const selectAllClubs = (state) => state?.clubs?.entities?.clubs;
export const selectClub = (state) => state?.clubs?.entities?.clubDetail;
export const selectLoading = (state) => state?.clubs?.loading;
export const selectError = (state) => state?.clubs?.error;