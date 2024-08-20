import { ScheduleItem } from "@/sanity.types";
import classNames from "classnames";


export default function Event({time, label, subLabel, eventType}: ScheduleItem) {
  const isArtist = eventType && eventType[0] === 'artist';
  const isInfo = eventType && eventType[0] === 'info';
  const eventClasses = isArtist ? 'text-orange text-[1.8rem] md:text-[2.4rem]' : 'text-[1.4rem] md:text-[1.9rem]';
  const timeClasses = isArtist ? 'md:text-[2.4rem]' : 'md:text-[1.9rem]';
  const labelClasses = isArtist ? 'font-bold' : 'font-[300]';
  const moreLabelClasses = isInfo ? '' : 'uppercase';
  return (
    <li className={classNames('my-4 font-heading md:px-8 grid grid-cols-[100px_1fr] grid-rows-[repeat(2,auto)] items-center gap-x-4 md:grid-cols-[200px_1fr] md:gap-x-8 md:gap-y-2', eventClasses)}>
      {time && <time className={classNames('event__time text-black block text-[1.8rem] text-right', timeClasses)}>{time}</time>}
      <span className={classNames('event__label block col-start-2', labelClasses, moreLabelClasses)}>{label}</span> 
      {subLabel && <span className="event__sub-label block text-[1.6rem] italic col-start-2">{subLabel}</span>}
    </li>
  ); 
}