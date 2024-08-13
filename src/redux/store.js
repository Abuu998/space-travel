import { configureStore } from "@reduxjs/toolkit";
import crewReducer from "./crewSlice"
import destinationsReducer from "./destinationSlice"
import technologyReducer from "./technologySlice"

export default configureStore({
    reducer: {
        crew: crewReducer,
        destinations: destinationsReducer,
        technology: technologyReducer
    }
})