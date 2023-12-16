import { Link } from "react-router-dom";

import 'swiper/css';
import '../../assets/styles/components/news.scss';
import { useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getNewsItems } from "../../redux/reducers/newsReducer";
import NewsSlider from "./NewsSlider";


const News = () => {
   const { isLoading, newsItems } = useSelector((state: RootState) => state.news);
   const dispatch = useStoreDispatch();

   useEffect(() => {
      dispatch(getNewsItems())
   }, [dispatch]);

   return (
      <section className="news fadeIn">
         <div className="container">
            <div className="news__inner">
               <h2 className="news__title">новости</h2>
               {
                  isLoading ? 'Loading...' : <NewsSlider newsItems={newsItems} />
               }
            </div>
            <Link className={'news__more more'} to={'news'}>все новости</Link>
         </div>
      </section >
   );
};

export default News;
