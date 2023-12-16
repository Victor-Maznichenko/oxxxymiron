import { useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import { ITrack, getTracks } from "../../redux/reducers/trackReducer";

import '../../assets/styles/components/trackItems.scss'
import TrackItem from "./TrackItem";
import { Link } from "react-router-dom";
import { calculateDelay } from "../../utils/common";

const TracksItems = () => {
   const { trackItems, isLoading } = useSelector((state: RootState) => state.track);
   const [audio] = useState(new Audio());
   const [playing, setPlaying] = useState(false);
   const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);

   const dispatch = useStoreDispatch();
   const handleAudioClick = (track: ITrack) => {
      if (track ?? false) {
         const trackId = track.sys.id;
         const trackUrl = track.link.url;
         setPlaying((prev) => {
            const isPlaying = trackId === currentTrack?.sys?.id ? !prev : true;
            audio.src = trackUrl;
            !isPlaying ? audio.pause() : audio.play();
            return isPlaying;
         })
         setCurrentTrack(track);
      }
   }
   useEffect(() => {
      return () => {
         audio.pause();
      };
   }, [audio]);

   useEffect(() => {
      dispatch(getTracks());
   }, [dispatch]);

   return (
      <section className="tracks">
         <div className="container">
            <div className="tracks__inner">
               <h2 className="tracks__title">РЕЛИЗЫ</h2>
               {
                  isLoading ? 'Loading...' :
                     <ul className="tracks__list">
                        {
                           trackItems.map((track, index) => (
                              <TrackItem
                                 className={`tracks__list-item ${index % 2 === 0 ? 'animateSlideRight' : 'animateSlideLeft'}`}
                                 isPlay={currentTrack?.sys?.id === track.sys.id && playing}
                                 onClick={(track: ITrack) => handleAudioClick(track)}
                                 style={{
                                    animationDelay: calculateDelay(index),
                                    animationDuration: '0.9s'
                                 }}
                                 key={track.sys.id}
                                 {...track}
                              />
                           ))
                        }
                     </ul>
               }
               <Link className="tracks__more more fadeIn" to={'./releases'}>все релизы</Link>
            </div>
         </div>
      </section>
   );
};

export default TracksItems;
