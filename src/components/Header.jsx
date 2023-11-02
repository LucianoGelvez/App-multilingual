// import React from 'react';
import { Link } from 'react-router-dom';
import es from './../img/spain.png';
import en from './../img/united-kingdom.png';
import pt from './../img/brazil.png';
import { FormattedMessage } from 'react-intl';
import { useContext } from 'react';
import { langContext } from '../utils/langContext';

const Header = () => {

	const lang = useContext(langContext)

	return (
		<div className="header">
			<div className="navbar">
				<nav className="nav">
					<Link to="/"><FormattedMessage
						id='menu.home' defaultMessage="Home" /></Link>
					<Link to="/explore"><FormattedMessage
						id='menu.explore' defaultMessage="Explore" /></Link>
					<Link to="/profile"><FormattedMessage
						id='menu.profile' defaultMessage="Profile" /></Link>
				</nav>

				<div className="banderas">
					<button onClick={() => lang.setLanguage("es-AR")}><img src={es} alt="" /></button>
					<button onClick={() => lang.setLanguage("en-US")}><img src={en} alt="" /></button>
					<button onClick={() => lang.setLanguage("pt-BR")}><img src={pt} alt="" /></button>
				</div>
			</div>
		</div>
	)
}

export default Header