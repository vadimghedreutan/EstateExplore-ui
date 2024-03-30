import { Link } from "react-router-dom"

interface IPost {
	id: number
	title: string
	img: string
	bedroom: number
	bathroom: number
	price: number
	address: string
	latitude: number
	longitude: number
}

function Card({ id, title, img, bedroom, bathroom, price, address }: IPost) {
	return (
		<div className="flex gap-5 bg-white shadow-md rounded-lg overflow-hidden">
			<Link to={`/${id}`} className="flex-auto w-32 h-48">
				<img
					className="w-full h-full object-cover rounded-lg"
					src={img}
					alt="Card Image"
				/>
			</Link>
			<div className="flex-auto w-64 flex justify-between flex-col py-2">
				<h2 className="text-lg font-bold mb-2 text-gray-700">
					<Link to={`/${id}`}>{title}</Link>
				</h2>
				<p className="text-gray-400 text-sm flex items-center space-x-2">
					<img src="/pin.png" alt="" className="w-4 h-4" />
					<span>{address}</span>
				</p>
				<p className=" text-xl font-light p-1 rounded bg-amber-300 w-fit">
					$ {price}
				</p>
				<div className="flex items-center justify-between">
					<div className="flex flex-col pt-2 sm:flex-row sm:space-x-4">
						<div className="flex items-center space-x-2">
							<img src="/bed.png" alt="" className="w-4 h-4" />
							<span className="text-sm">{bedroom} Bedroom</span>
						</div>
						<div className="flex items-center space-x-2">
							<img src="/bath.png" alt="" className="w-4 h-4" />
							<span className="text-sm">{bathroom} Bathroom</span>
						</div>
					</div>
					<div className="flex items-center space-x-1 pr-2">
						<div>
							<img src="save.png" alt="" className="w-4 h-4" />
						</div>
						<div>
							<img src="chat.png" alt="" className="w-4 h-4" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Card
