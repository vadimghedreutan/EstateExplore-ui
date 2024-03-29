import { Marker, Popup } from "react-leaflet"
import { Link } from "react-router-dom"

interface IPin {
	item: {
		id: number
		latitude: number
		longitude: number
		title: string
		bedroom: number
		price: number
		img: string
	}
}

function Pin({
	item: { latitude, longitude, title, id, bedroom, price, img },
}: IPin) {
	return (
		<Marker position={[latitude, longitude]}>
			<Popup>
				<div className="flex flex-col gap-5 relative">
					<img
						src={img}
						alt=""
						className="aspect-video object-cover rounded"
					/>
					<div className="flex flex-col justify-between">
						<Link to={`/${id}`}>{title}</Link>
						<span>{bedroom} bedroom</span>
						<span>$ {price}</span>
					</div>
				</div>
			</Popup>
		</Marker>
	)
}
export default Pin
