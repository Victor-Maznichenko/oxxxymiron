import video from '../../assets/media/video/oxxxytour.mp4'
import '../../assets/styles/components/tourBanner.scss'

const TourBanner = () => (
   <section className="tour-banner">
      <div className="container">
         <video loop muted autoPlay>
            <source src={video} type='video/mp4' />
         </video>
      </div>
   </section>
);

export default TourBanner;
