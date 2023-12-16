import logo from '../../assets/media/images/oxxxyshop.webp';
import bannerImg from '../../assets/media/images/banner.webp';
import '../../assets/styles/components/shopBanner.scss';
import { Link } from 'react-router-dom';

const ShopBanner = () => (
   <section className="merch fadeIn">
      <div className="container">
         <Link className="merch__inner" to={'./merch'}>
            <div className="merch__info">
               <p className="merch__description">ОБНОВЛЕННЫЙ МЕРЧ ОТ ОКСИМИРОНА</p>
               <h1 className="merch__title">OXXXYSHOP 2.0</h1>
            </div>
            <img src={logo} className="merch__logo" alt="" />
            <img src={bannerImg} className="merch__img" alt="" />
         </Link>
      </div>
   </section>
);


export default ShopBanner;
