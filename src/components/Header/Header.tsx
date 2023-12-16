import { Link, NavLink } from "react-router-dom";

import Logo from '../../assets/media/images/logo.webp';
import '../../assets/styles/components/header.scss';
import { MENU } from "../../utils/constants";
import Socials from "../Socials/Socials";

const Header = () => {
   return (
      <header className="header animateSlideDown">
         <div className="container">
            <div className="header__inner">
               <Link to="/"><img src={Logo} alt="" /></Link>
               <nav className="menu">
                  <ul className="menu__list">
                     {
                        MENU.map(({link, name}, i) => (
                           <li className="menu__item" key={i}>
                              <NavLink className="menu__item-link" to={link} end >{name}</NavLink>
                           </li>
                        ))
                     }
                  </ul>
               </nav>
               <Socials />
            </div>
         </div>
      </header >
   );
};

export default Header;
