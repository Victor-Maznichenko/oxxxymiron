import OnlyFansForm from "../OnlyFansForm/OnlyFansForm";
import LOGO from '../../assets/media/images/logo.webp'
import '../../assets/styles/components/footer.scss'
import Socials from "../Socials/Socials";

const Footer = () => {
   return (
      <footer className="footer fadeIn">
         <div className="container">
            <div className="footer__inner">
               <OnlyFansForm />
               <div className="footer__copyright">
                  <img src={LOGO} alt="" />
                  <span>oxxxymiron, 2023</span>
               </div>
               <Socials />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
