import { useState } from "react"
import { Button } from "./ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Navbar() {
	const [position, setPosition] = useState("bottom")
	return (
		<nav className="h-24 w-full flex items-center justify-between px-8 max-w-7xl mx-auto">
			<div className="flex items-center justify-between pr-3 flex-auto w-64">
				<a href="/" className="font-bold text-2xl">
					<h1>
						Estate
						<span className="text-red-600">Explore</span>
					</h1>
				</a>
				<div className="hidden md:flex items-center space-x-6">
					<a href="/">Home</a>
					<a href="/list">ListPage</a>
					<a href="/list">Contact</a>
					<a href="/list">Agents</a>
				</div>
				<div className="md:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">Menu</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>
								Panel Position
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuRadioGroup
								value={position}
								onValueChange={setPosition}
							>
								<DropdownMenuRadioItem value="top">
									<a href="/">Home</a>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="right">
									<a href="/list">ListPage</a>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="right">
									<a href="/list">Contact</a>
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="right">
									<a href="/list">Agents</a>
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			<div className="md:bg-[#fcf5f3] flex items-center justify-end h-full flex-auto w-32">
				<div className="space-x-4 mr-3">
					<a href="/login">Login</a>
					<Button variant={"default"}>
						<a href="/register">Register</a>
					</Button>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
