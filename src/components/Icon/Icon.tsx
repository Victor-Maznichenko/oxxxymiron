import { FC } from "react";

interface IProps {
   name: string,
   width?: number,
   height?: number
}

const Icon: FC<IProps> = ({ name, width, height }) => (
   <svg className={`icon icon-${name}`} style={{ width, height }}>
      <use xlinkHref={`images/sprite.svg#${name}`} />
   </svg>
);


export default Icon;
