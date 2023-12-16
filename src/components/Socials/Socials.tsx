import { SOCIALS } from "../../utils/constants";
import Icon from "../Icon/Icon";
import '../../assets/styles/components/social.scss';

const Socials = () => (
   <div className={`social`}>
      <ul className="social__list">
         {
            SOCIALS.map(({ icon, link }) => (
               <li className="social__item" title={icon} key={icon}>
                  <a href={link} className="social__item-link" target="__blank">
                     <Icon name={icon} />
                  </a>
               </li>
            ))
         }
      </ul>
   </div>
);

export default Socials;
