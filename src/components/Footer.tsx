import { Button } from "./ui/button"

function Footer() {
	return (
		<footer className="bg-gray-800 text-white text-center p-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex sm:flex-row flex-col gap-5 items-center sm:justify-between">
					<div className="flex flex-col sm:items-start">
						<h1 className="text-white font-bold text-lg">
							Estate
							<span className="text-red-600">Explore</span>
						</h1>
						<p className="text-xs text-gray-500">
							© 2024 Company Name
						</p>
					</div>
					<div className="flex items-center space-x-8">
						<div className="flex flex-col space-y-4">
							<span>+49 0710000000</span>

							<Button>Request a call</Button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
