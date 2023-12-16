import { dateParseYMD } from "../../utils/common";
import Icon from "../Icon/Icon";
import { ITrack } from "../../redux/reducers/trackReducer";

interface IProps extends ITrack {
   className: string,
   isPlay: boolean,
   style: {
      animationDelay: string,
      animationDuration: string
   }
   onClick: (track: ITrack) => void
}

const TrackItem = (track: IProps) => {
   const trackDate = dateParseYMD(new Date(track.date));

   return (
      <li className={`${track.className} track ${track.isPlay ? 'active' : ''}`} key={track.sys.id} style={track.style}>
         <div className="track__preview">
            <button className="track__audio" onClick={() => track.onClick(track)}>
               <img src={track.cover.url} className="track__audio-img" alt="" />
               <Icon name={"pause"} />
               <Icon name={"play"} />
            </button>
            <h2 className="track__title">{track.title}</h2>
         </div>
         <div className="track__info">
            <p className="track__date">{trackDate}</p>
            <p className="track__description">{track.description}</p>
         </div>
      </li>
   );
};

export default TrackItem;
