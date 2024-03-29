import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

function FilterBar() {
	return (
		<div className="pr-3">
			<h1>
				Search result for <b>London</b>
			</h1>
			<div className="flex flex-col space-y-4">
				<div className="pt-3 space-y-2">
					<Label htmlFor="terms">Location</Label>
					<Input
						type="text"
						id="city"
						name="city"
						placeholder="City Location"
					/>
				</div>
				<div>
					<div className="flex lg:flex-row items-center flex-col space-x-2">
						<div className="w-full lg:w-28">
							<Label htmlFor="property-type">Type</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="any" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="buy">Buy</SelectItem>
									<SelectItem value="rent">Rent</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="w-full lg:w-28">
							<Label htmlFor="property-type">Property</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="any" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="apartment">
										Apartment
									</SelectItem>
									<SelectItem value="house">House</SelectItem>
									<SelectItem value="condo">Condo</SelectItem>
									<SelectItem value="land">Land</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="w-full lg:w-28">
							<Label htmlFor="property-type">Min Price</Label>
							<Input
								type="number"
								id="minPrice"
								name="minPrice"
								placeholder="any"
							/>
						</div>
						<div className="w-full lg:w-28">
							<Label htmlFor="property-type">Max Price</Label>
							<Input
								type="number"
								id="maxPrice"
								name="maxPrice"
								placeholder="any"
							/>
						</div>
						<div className="w-full lg:w-28">
							<Label htmlFor="property-type">Bedroom</Label>
							<Input
								type="number"
								id="bedroom"
								name="bedroom"
								placeholder="any"
							/>
						</div>
					</div>
				</div>
				<Button variant={"default"} className="w-fit">
					Search
				</Button>
			</div>
		</div>
	)
}
export default FilterBar
