import {
	IoIosCheckmarkCircle,
	IoLogoFacebook,
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoYoutube,
} from "react-icons/io";
import Features1Img from "./assets/img/features-1.png";
import Features2Img from "./assets/img/features-2.png";
export const navigation = [
	{
		name: "home",
		href: "home",
	},
	{
		name: "about",
		href: "about",
	},
	{
		name: "features",
		href: "features",
	},
	{
		name: "contact",
		href: "contact",
	},
];

export const hero = {
	title: "Decor Your Home using Our AI Model",
	subtitle: "Transform Your Space with AI-Powered Home Decor",
	buttonText: "Upload",
};

export const features = {
	image: <Features1Img />,
	title: "We Create your home more aesthetic",
	subtitle:
		"Our AI Tool Home Decor offers a versatile AI-powered Interior Decor System",
	buttonText: "Show Now",
	items: [
		{
			icon: <IoIosCheckmarkCircle />,
			title: "Valuation Services",
			subtitle:
				"Sometimes features require a short description.  This can be detailed description",
		},
		{
			icon: <IoIosCheckmarkCircle />,
			title: "Interior Decoration",
			subtitle:
				"Sometimes features require a short description.  This can be detailed description",
		},
	],
	feature2: {
		image: <Features2Img />,
		title: "The Best Interior decorator of your choice",
		subtitle:
			"Our AI Tool Home Decor offers a versatile AI-powered Interior Decor System",
	},
};

export const footer = {
	social: [
		{
			icon: <IoLogoYoutube />,
			href: "#",
		},
		{
			icon: <IoLogoInstagram />,
			href: "#",
		},
		{
			icon: <IoLogoGithub />,
			href: "#",
		},
		{
			icon: <IoLogoFacebook />,
			href: "#",
		},
	],
	copyright: "HomeDecor 2024-All Rights Reserved.",
};
