import {
	GithubLogo,
	InstagramLogo,
	LinkedinLogo,
	List,
	TwitterLogo,
	X,
} from "phosphor-react";
import Logo from "../assets/Logo";
import debounce from "lodash/debounce";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }) {
	const [isToggled, setIsToggled] = useState(false);
	const [vector, setVector] = useState(0);
	const nav = useRef();

	const deBounce = debounce(scroll, 500, { leading: true });

	useEffect(() => {}, [isToggled]);

	useEffect(() => {
		window.addEventListener("scroll", deBounce);
		return () => {
			window.removeEventListener("scroll", deBounce);
		};
	});

	function scroll() {
		if (document.body.getBoundingClientRect().top >= vector) {
			nav.current.style.translate = 0;
		} else nav.current.style.translate = `0 ${-200}px`;
		setVector(document.body.getBoundingClientRect().top);
	}

	function toggle() {
		setIsToggled((pre) => !pre);
	}

	return (
		<>
			<div
				className='overlay'
				style={{
					opacity: isToggled ? 1 : 0,
					pointerEvents: isToggled ? "unset" : "none",
				}}
			/>
			<Head>
				<link rel='icon' href='favicon.ico' />
			</Head>
			<header ref={nav}>
				<nav className='mobile-navigation'>
					<div className='logo'>
						<Link href='/'>
							<Logo />
						</Link>
					</div>
					{/* Mobile */}
					<div
						className='mobile-menu'
						style={{
							translate: isToggled ? 0 : 200,
							opacity: isToggled ? 1 : 0,
							pointerEvents: isToggled ? "unset" : "none",
						}}
					>
						<div className='mobile-nav-items' onClick={toggle}>
							<a className='nav-link' href='#about'>
								<span>01.</span>About
							</a>
							<a className='nav-link' href='#experience'>
								<span>02.</span>Experience
							</a>
							<a className='nav-link' href='#work'>
								<span>03.</span>Work
							</a>
							<a className='nav-link' href='#contact'>
								<span>04.</span>Contact
							</a>
							<a href={resume_link}>
								<button className='button' type='button'>
									Resume
								</button>
							</a>
						</div>
					</div>
					{/* Desktop */}
					<div className='desk-menu'>
						<div className='desk-nav-items'>
							<a className='nav-link' href='#about'>
								<span>01.</span>About
							</a>
							<a className='nav-link' href='#experience'>
								<span>02.</span>Experience
							</a>
							<a className='nav-link' href='#work'>
								<span>03.</span>Work
							</a>
							<a className='nav-link' href='#contact'>
								<span>04.</span>Contact
							</a>
							<a href={resume_link}>
								<button className='button resume' type='button'>
									Resume
								</button>
							</a>
						</div>
					</div>
					{!isToggled ? (
						<List
							className='open-icon nav-icon pointer '
							size={30}
							onClick={toggle}
						/>
					) : (
						<X
							className='close-icon nav-icon pointer'
							size={30}
							onClick={toggle}
						/>
					)}
				</nav>
			</header>
			<main className='main'>{children}</main>
			<footer>
				<div className='socials pointer'>
					<a
						href='https://github.com/asta-otaku'
						target='_blank'
						rel='noopener noreferrer'
					>
						<GithubLogo size={25} />
					</a>
					<a
						href='https://www.instagram.com/ibrahim_olashina/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<InstagramLogo size={25} />
					</a>
					<a
						href='https://twitter.com/Afolabi69093815'
						target='_blank'
						rel='noopener noreferrer'
					>
						<TwitterLogo size={25} />
					</a>
					<a
						href='https://www.linkedin.com/in/ibrahim-afolabi-074b141a9/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<LinkedinLogo size={25} />
					</a>

					<hr />
				</div>
				<div className='email'>
					<p>afolabiibrahim08@gmail.com</p>
					<hr />
				</div>
				<p className='attribution'>
					Designed by Brittany Chiang & Built Ibrahim Afolabi
				</p>
			</footer>
		</>
	);
}

const resume_link =
	"https://docs.google.com/document/d/14Hc5DLDKPDc7ffxNGTLwxE8NhiuNhbnAp-kvgvg51A8/edit?usp=sharing";
