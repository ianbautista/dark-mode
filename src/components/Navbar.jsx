import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	const { darkMode, setDarkMode, coinData } = props;
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className="navbar">
			<h1>Crypto Tracker</h1>
			<div className="links">
				{coinData.map((coin) => {
					return <Link to={`/${coin.id}`}>{coin.name}</Link>;
				})}
			</div>
			<div className="dark-mode__toggle">
				<div onClick={toggleMode} className={darkMode ? "toggle toggled" : "toggle"} />
			</div>
		</nav>
	);
};

export default Navbar;
