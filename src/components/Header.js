import React, { useEffect, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { navigation } from "../data";
import NavMobile from "./NavMobile";

const Header = () => {
	const [bg, setBg] = useState(false);
	const [mobileNav, setMobileNav] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			return window.scrollY > 50 ? setBg(true) : setBg(false);
		});
	});
	return (
		<header
			className={`${
				bg ? "bg-primary py-4 lg:py-6" : "bg-none"
			} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<a href="#" className="text-white text-2xl">
						HOME DECOR
					</a>
				</div>
				<div className="md:hidden">
					<div
						onClick={() => setMobileNav(!mobileNav)}
						className="text-2xl text-white cursor-pointer">
						{mobileNav ? <CgClose /> : <CgMenuRight />}
					</div>
				</div>
				<nav className="hidden md:flex ml-auto">
					<ul className="md:flex md:gap-x-12">
						{navigation.map((item, index) => (
							<li key={index}>
								<a
									className="capitalize text-white hover:border-b transition-all"
									href={item.href}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<div
					className={`${
						mobileNav ? "left-0" : "-left-full"
					} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
					<NavMobile />
				</div>
			</div>
		</header>
	);
};

export default Header;
