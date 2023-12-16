import video from '../../assets/media/video/text.webm'
import '../../assets/styles/components/banner.scss'

const MainBanner = () => (
   <section className="banner fadeIn">
      <div className="container">
         <div className="banner__inner">
            <video src={video} className="banner__video" loop autoPlay muted></video>
         </div>
      </div>
   </section>
);

export default MainBanner;
