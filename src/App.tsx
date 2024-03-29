import Homepage from "./pages/Homepage"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ListPage from "./pages/ListPage"
import Layout from "./Layout"
import SinglePage from "./pages/SinglePage"

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ path: "/", element: <Homepage /> },
				{ path: "/list", element: <ListPage /> },
				{
					path: "/:id",
					element: <SinglePage />,
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
