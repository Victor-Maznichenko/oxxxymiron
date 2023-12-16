
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { INewsItem } from "../../redux/reducers/newsReducer";
import Icon from '../Icon/Icon';
import { useCallback, useRef } from 'react';

interface ISliderProps {
   newsItems: Array<INewsItem>
}

const NewsSlider = ({ newsItems }: ISliderProps) => {
   const sliderRef = useRef<SwiperRef>(null);

   const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
   }, []);

   const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
   }, []);

   return (
      <Swiper
         ref={sliderRef}
         className="news__slider"
         spaceBetween={15}
         slidesPerView={'auto'}
         modules={[Navigation]}
         navigation
         loop={true}
      >
         {
            newsItems.map(({ sys, title, cover }: INewsItem) => (
               <SwiperSlide key={sys.id}>
                  <img className="news__slider-img" src={cover.url} alt="" />
                  <h3 className="news__slider-title">{title}</h3>
               </SwiperSlide>
            ))
         }

         <div className="news__slider-btns">
            <button className="news__slider-btn news__slider-prev" onClick={handlePrev}>
               <Icon name={'arrow-right'} />
            </button>
            <button className="news__slider-btn news__slider-next" onClick={handleNext}>
               <Icon name={'arrow-right'} />
            </button>
         </div>

      </Swiper>
   );
};

export default NewsSlider;
