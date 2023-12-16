import Icon from "../Icon/Icon";
import '../../assets/styles/components/onlyFansForm.scss'
import { ChangeEvent, useState } from "react";

const OnlyFansForm = () => {
   const [value, setValue] = useState('');
   const handleChange = ({ target }:ChangeEvent<HTMLInputElement>) => {
      setValue(target.value)
   }

   return (
      <form className="onlyfans" action="#">
         <span className="onlyfans__name">онлифанс оксимирона:</span>
         <input className="onlyfans__email" value={value} onChange={handleChange} type="email" name="email" placeholder="email" />
         <button className="onlyfans__btn">
            <span>ПОДПИСАТЬСЯ</span>
            <Icon name={'arrow-right'}></Icon>
         </button>
      </form>
   )
};

export default OnlyFansForm;
