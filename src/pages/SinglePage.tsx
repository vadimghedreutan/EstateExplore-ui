import Slider from "@/components/Slider"
import { singlePostData, userData } from "@/data/dummydata"

const generalList = [
	{
		icon: "/utility.png",
		title: "Utilities",
		description: "Renter is responsible",
	},
	{
		icon: "/pet.png",
		title: "Pet Policy",
		description: "Pets Allowed",
	},
	{
		icon: "/fee.png",
		title: "Property Fees",
		description: "Must have 3x the rent in total household income",
	},
]

const roomList = [
	{
		icon: "/size.png",
		title: "80sqm(861sqft)",
	},
	{
		icon: "/bed.png",
		title: "2 bed",
	},
	{
		icon: "/bath.png",
		title: "1 bathroom",
	},
]

const nearPlaces = [
	{
		icon: "/school.png",
		title: "Hospital",
		description: "250m away",
	},
	{
		icon: "/bus.png",
		title: "School",
		description: "100m away",
	},
	{
		icon: "/restaurant.png",
		title: "Restaurant",
		description: "200m away",
	},
]

function SinglePage() {
	return (
		<div className="flex flex-col md:flex-row h-full sm:px-8 px-3 max-w-7xl mx-auto">
			<div className="md:flex-auto md:w-64">
				<div className="pr-3">
					<Slider images={singlePostData.images} />
					<div className="info">
						<div className="flex justify-between">
							<div className="flex flex-col gap-5">
								<h1 className="font-bold">
									{singlePostData.title}
								</h1>
								<div className="flex gap-1 items-center text-gray-400 text-sm">
									<img
										src="/pin.png"
										alt=""
										className="w-4 h-4"
									/>
									<span>{singlePostData.address}</span>
								</div>
								<div className="text-xl font-light p-1 rounded bg-amber-300/50 w-fit">
									<span>$ {singlePostData.price}</span>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center gap-5 px-12 rounded bg-amber-300/50 font-semibold ">
								<img
									src={userData.img}
									alt=""
									className="w-12 h-12 rounded-full object-cover"
								/>
								<span>{userData.name}</span>
							</div>
						</div>
						<div className="mt-12 text-gray-500 leading-5">
							<p>{singlePostData.description}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="md:flex-auto md:w-32 md:bg-[#fcf5f3] md:px-3">
				<div className="py-6">
					<p className="py-4 font-bold">General</p>
					<div className="bg-[#fcf5f3] p-4 rounded-md">
						<div className="flex flex-col gap-5">
							{generalList.map((item, index) => (
								<div
									key={index}
									className="flex items-center space-x-4"
								>
									<img
										src={item.icon}
										alt=""
										className="w-6 h-6"
									/>
									<div>
										<p className="font-bold">
											{item.title}
										</p>
										<p className="text-sm">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<p className="py-6 font-bold">Sizes</p>
					<div className="bg-[#fcf5f3] p-4 rounded-md">
						<div className="flex flex-col gap-5">
							{roomList.map((item, index) => (
								<div
									key={index}
									className="flex items-center space-x-4 bg-white p-2 rounded w-fit"
								>
									<img
										src={item.icon}
										alt=""
										className="w-6 h-6"
									/>
									<div>
										<p className="text-gray-600">
											{item.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<p className="py-6 font-bold">Nearby Places</p>
					<div className="bg-[#fcf5f3] p-4 rounded-md">
						<div className="flex flex-col gap-5">
							{nearPlaces.map((item, index) => (
								<div
									key={index}
									className="flex items-center space-x-4"
								>
									<img
										src={item.icon}
										alt=""
										className="w-6 h-6"
									/>
									<div>
										<p className="font-bold">
											{item.title}
										</p>
										<p className="text-sm">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default SinglePage
