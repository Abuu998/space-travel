import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json"


const destinationsSlice = createSlice({
    name: "destinations",
    initialState: data.destinations,
    reducers: {}
})

export default destinationsSlice.reducer