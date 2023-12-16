import { useEffect } from "react";

import { RootState, useStoreDispatch } from "../../redux/store";
import { getTourItems } from "../../redux/reducers/tourReducer";
import { useSelector } from "react-redux";

import '../../assets/styles/components/tourItems.scss'
import Icon from './../Icon/Icon';
import { Link } from "react-router-dom";
import { calculateDelay, dateParseYMD } from "../../utils/common";



const TourItems = () => {
   const dispatch = useStoreDispatch();
   const { isLoading, tourList } = useSelector((state: RootState) => state.tour);
   const tourListSorted = [...tourList].sort((a, b) => +new Date(a.date) - +new Date(b.date));

   useEffect(() => {
      dispatch(getTourItems());
   }, [dispatch]);

   return (
      <section className="tour">
         <div className="container">
            <div className="tour__inner">
               <h2 className="tour__title">Концерты</h2>
               {
                  isLoading ? 'Loading...' :
                     <ul className="tour__list">
                        {
                           tourListSorted.map(({ date, place, country, city, sys }, index) => {
                              const tourDate = dateParseYMD(new Date(date));

                              return (
                                 <li className="tour__list-item meet animateSlideRight" key={sys.id} style={{animationDelay: calculateDelay(index)}} >
                                    <div className="meet__info">
                                       <span className="meet__info-date">{tourDate}</span>
                                       <span className="meet__info-place">{place}</span>
                                    </div>
                                    <h2 className="meet__region">{`${city}, ${country}`}</h2>
                                    <button className="meet__buy">
                                       <span>Билеты</span>
                                       <Icon name={"arrow-right"} />
                                    </button>
                                 </li>
                              )
                           })
                        }
                     </ul>
               }
               <Link className="tour__more more fadeIn" to={'/tour'}>все концерты</Link>
            </div>
         </div>
      </section>
   );
};

export default TourItems;
