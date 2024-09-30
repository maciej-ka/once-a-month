import PojoDate from 'pojodate';

import Day from './Day';
import logo from "../../logo.png"

type Props = {
  date: Date
}

const Timesheet = ({ date }: Props) => {
  const monthStart = new PojoDate(date);
  const monthEnd = monthStart.add({ months: 1 }).set({ days: 0 });
  const monthName = monthStart.format(({ long, years }) => `${long.month.toUpperCase()} ${years}`)

  const days: PojoDate[] = [];
  let current = monthStart;
  while (current <= monthEnd) {
    days.push(current);
    current = current.add({ days: 1 })
  }

  const localStorageData = {
    username: "Frontend development projects",
  }

  return (
    <div className="grid grid-cols-5 text-center font-bold text-white border border-black leading-snug">
      <div className="bg-raspberry">NAME:</div>
      <div className="bg-raspberry">{localStorageData.username}</div>
      <div className="col-span-3 row-span-7"><img alt="logo" src={logo} className="m-auto pt-8 w-60"/></div>
      <div className="bg-raspberry">PERIOD:</div>
      <div className="bg-raspberry">{monthName}</div>
      <div className="bg-raspberry">DATE:</div>
      <div className="bg-raspberry">{monthEnd.format(({ years, months, days }) => `${days}/${months}/${years}`)}</div>
      <div className="col-span-2 h-6"/>
      <div className="bg-raspberry">Number of HOURS TOTAL:</div>
      <div className="bg-raspberry text-left">[Hours]</div>
      <div className="bg-raspberry">Number of DAYS TOTAL:</div>
      <div className="bg-raspberry text-left">[MD]</div>
      <div className="col-span-2 h-6"/>
      <div className="bg-blueberry border border-black">Date</div>
      <div className="bg-blueberry border border-black">Hours</div>
      <div className="bg-blueberry border border-black">Tasks</div>
      <div className="bg-blueberry border border-black">Task ID</div>
      <div className="bg-blueberry border border-black">Comments</div>
      {days.map(day => <Day date={day} />)}
    </div>
  )
}

export default Timesheet
