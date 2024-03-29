import { Card, CardContent } from "@/components/ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

interface SliderProps {
	images: string[]
}

function Slider({ images }: SliderProps) {
	return (
		<div className="my-16 px-12">
			<Carousel className="w-full max-w-3xl mx-auto">
				<CarouselContent>
					{images.map((image, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-video items-center justify-center p-1">
										<img
											src={image}
											alt=""
											className="w-full h-full"
										/>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
export default Slider
