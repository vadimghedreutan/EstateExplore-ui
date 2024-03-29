import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const types = ["buy", "rent"]

function SearchBar() {
	const [query, setQuery] = useState({
		type: "buy",
		location: "",
		minPrice: 0,
		maxPrice: 0,
	})

	const switchType = (type: string) => {
		setQuery({ ...query, type })
	}

	return (
		<div className="searchbar">
			<div className="mb-4 space-x-1">
				{types.map((type) => (
					<Button
						key={type}
						variant={query.type === type ? "default" : "ghost"}
						onClick={() => switchType(type)}
					>
						{type}
					</Button>
				))}
			</div>
			<form action="" className="flex flex-col space-y-4">
				<Input
					type="text"
					name="location"
					placeholder="City Location"
				/>
				<Input
					type="number"
					min={0}
					max={1000000}
					name="minPrice"
					placeholder="Min Price"
				/>
				<Input
					type="number"
					min={0}
					max={1000000}
					name="maxPrice"
					placeholder="Max Price"
				/>
				<Button variant={"default"}>Search</Button>
			</form>
		</div>
	)
}
export default SearchBar
