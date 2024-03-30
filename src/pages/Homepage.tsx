import SearchBar from "@/components/SearchBar"
import { CheckCircle } from "lucide-react"

function Homepage() {
	return (
		<div className="sm:px-8 px-3 max-w-7xl mx-auto">
			<div className="flex">
				<div className="flex-auto w-64 pt-9">
					<div className="flex flex-col space-y-8 pr-6">
						<h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
							Find Real Estate Properties & Get The Best Deals
						</h1>
						<p className="text-gray-500">
							Stop wasting time and money! Our comprehensive
							search tools help you find the perfect property that
							fits your needs and budget. We also provide expert
							tips and strategies to negotiate the best possible
							deal on your dream home or investment property.
						</p>
						<SearchBar />
					</div>
				</div>
				<div className="hidden sm:flex-auto w-32 sm:bg-[#fcf5f3] relative sm:flex items-center">
					<img src="/pngegg.png" alt="" />
				</div>
			</div>

			<section className="sm:py-20 py-10">
				<div className="flex flex-col lg:flex-row gap-2">
					<div className="lg:flex-auto lg:w-32">
						<div className="flex flex-col space-y-4">
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
								Our Services
							</h1>
							<div className="flex items-center space-x-8">
								<div>
									<h1 className="text-3xl font-extrabold">
										30+
									</h1>
									<h2 className="text-gray-500">
										Properties
									</h2>
								</div>
								<div>
									<h1 className="text-3xl font-extrabold">
										4M+
									</h1>
									<h2 className="text-gray-500">
										Happy Clients
									</h2>
								</div>
								<div>
									<h1 className="text-3xl font-extrabold">
										16+
									</h1>
									<h2 className="text-gray-500">
										Years of Experience
									</h2>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:flex-auto lg:w-64 pt-8 lg:pt-0">
						<p className="text-lg">
							We provide a wide range of services to help you find
							the perfect property. Our team of experts will guide
							you through the entire process, from finding the
							right property to closing the deal. We also offer
							expert advice on property investment and management.
						</p>
					</div>
				</div>
			</section>

			<section className="sm:py-20 py-10">
				<div className="flex gap-5">
					<div className="flex-auto w-64">
						<div className="flex flex-col space-y-4">
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
								Fast forward process in buying the properties
							</h1>
							<p className="text-lg">
								Our team of experts will guide you through the
								entire process, from finding the right property
								to closing the deal. We also offer expert advice
								on property investment and management.
							</p>
							<ul className="text-lg flex flex-col space-y-4 pt-8">
								<li className="flex items-center space-x-2">
									<CheckCircle color="red" />{" "}
									<span>Find the right property</span>
								</li>
								<li className="flex items-center space-x-2">
									<CheckCircle color="red" />{" "}
									<span>Close the deal</span>
								</li>
								<li className="flex items-center space-x-2">
									<CheckCircle color="red" />{" "}
									<span>
										Expert advice on property investment
									</span>
								</li>
								<li className="flex items-center space-x-2">
									<CheckCircle color="red" />{" "}
									<span>
										Expert advice on property management
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="sm:flex-auto sm:w-32 hidden">
						<div className="relative aspect-square w-full overflow-hidden rounded-2xl">
							<img
								src="/kisspng-skyscraper.png"
								alt=""
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
export default Homepage
