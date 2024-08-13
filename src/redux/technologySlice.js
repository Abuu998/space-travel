import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json"


const technologySlice = createSlice({
    name: "technology",
    initialState: data.technology,
    reducers: {}
})

export default technologySlice.reducer