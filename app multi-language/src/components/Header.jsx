// import React from 'react';
import { Link } from 'react-router-dom';
import es from './../img/spain.png';
import en from './../img/united-kingdom.png';



const Header = () => {
  return (
    <div className="header">
			<div className="navbar">
				<nav className="nav">
					<Link to="/">Inicio</Link>
					<Link to="/explore">Explorar</Link>
					<Link to="/profile">Perfil</Link>
				</nav>

				<div className="banderas">
					<button><img src={es} alt=""/></button>
					<button><img src={en} alt=""/></button>
				</div>
			</div>
		</div>
  )
}

export default Header