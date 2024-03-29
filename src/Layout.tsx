import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
	return (
		<div className="w-full flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow">
				<Outlet />
			</main>
			<div className="mt-auto">
				<Footer />
			</div>
		</div>
	)
}

export default Layout
