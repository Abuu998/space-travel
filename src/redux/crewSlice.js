import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json"


const crewSlice = createSlice({
    name: "crew",
    initialState: data.crew,
    reducers: {}
})

export default crewSlice.reducer