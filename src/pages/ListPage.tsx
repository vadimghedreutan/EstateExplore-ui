import FilterBar from "@/components/FilterBar"
import { listData } from "../data/dummydata"
import Card from "@/components/Card"
import Map from "@/components/Map"

function ListPage() {
	const data = listData

	return (
		<div className="flex px-8 max-w-7xl mx-auto">
			<div className="flex-auto w-64 py-9">
				<FilterBar />
				<div className="flex flex-col gap-5 pt-6 pr-3">
					{data.map((item) => (
						<Card key={item.id} {...item} />
					))}
				</div>
			</div>
			<div className="hidden md:flex-auto w-32 md:bg-[#fcf5f3] md:flex items-center py-9">
				<Map items={data} />
			</div>
		</div>
	)
}
export default ListPage
