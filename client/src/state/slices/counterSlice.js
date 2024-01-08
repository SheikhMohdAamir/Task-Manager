import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { userData: [] };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, () => {
        console.log("PENDING FETCHING DATA");
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.userData = action.payload;
        console.log("COMPLETED FETCHING DATA");
      });
    builder
      .addCase(addData.pending, () => {
        console.log("PENDING ADDING DATA");
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.userData = action.payload;
        console.log("COMPLETED ADDING DATA");
      });
    builder
      .addCase(deleteData.pending, () => {
        console.log("PENDING DELETING DATA");
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.userData = action.payload;
        console.log("COMPLETED DELETING DATA");
      });
  },
});

export const getData = createAsyncThunk("getData", async () => {
  const response = await axios.get("http://localhost:4000/user/getData", {
    headers: { Authorization: localStorage.getItem("token") },
  });
  return response.data;
});
export const addData = createAsyncThunk("addData", async (data) => {
  const response = await axios.post(
    "http://localhost:4000/user/addData",
    data,
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  return response.data;
});
export const deleteData = createAsyncThunk("deleteData", async (id) => {
  const response = await axios.post(
    "http://localhost:4000/user/deleteData",
    { id },
    { headers: { Authorization: localStorage.getItem("token") } }
  );
  return response.data;
});

export default counterSlice.reducer;
