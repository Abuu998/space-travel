import { 
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from "react-router-dom"

// Layout
import RootLayout from "./layout/RootLayout"

// Pages
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="destination" element={<Destination />} />
			<Route path="crew" element={<Crew />} />
			<Route path="technology" element={<Technology />} />
		</Route>
	)
)


function App() {
	return <RouterProvider router={router} />
}

export default App
