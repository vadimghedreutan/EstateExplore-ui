import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Pin from "./Pin"

const defaultPosition = {
	lat: 52.4797,
	lng: -1.90269,
	zoom: 7,
}

interface IMap {
	items: any[]
}

function Map({ items }: IMap) {
	const position: [number, number] = [
		defaultPosition.lat,
		defaultPosition.lng,
	]

	return (
		<MapContainer
			center={position}
			zoom={defaultPosition.zoom}
			scrollWheelZoom={false}
			className="w-full h-full rounded-md"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{items.map((item) => (
				<Pin key={item.id} item={item} />
			))}
		</MapContainer>
	)
}

export default Map
