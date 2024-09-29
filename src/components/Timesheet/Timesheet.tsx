import PojoDate from 'pojodate';
import logo from "../../logo.png"

const timesheetDate = new PojoDate('2024-09-01')
const data = {
  name: "Frontend development projects",
  period: timesheetDate.toLocaleString('default', { month: 'long' }) + ' ' + timesheetDate.years,
  date: timesheetDate.add({ months: 1 }).set({ days: 0 })
}

const Timesheet = () => {
  return (
    <div className="grid grid-cols-5 text-center font-bold text-white border border-black">
      <div className="bg-raspberry">NAME:</div>
      <div className="bg-raspberry">{data.name}</div>
      <div className="col-span-3 row-span-7"><img alt="logo" src={logo}/></div>
      <div className="bg-raspberry">PERIOD:</div>
      <div className="bg-raspberry">{data.period.toUpperCase()}</div>
      <div className="bg-raspberry">DATE:</div>
      <div className="bg-raspberry">{data.date.format(({ years, months, days }) => `${days}/${months}/${years}`)}</div>
      <div className="col-span-2 h-6" />
      <div className="bg-raspberry">Number of HOURS TOTAL:</div>
      <div className="bg-raspberry text-left">[Hours]</div>
      <div className="bg-raspberry">Number of DAYS TOTAL:</div>
      <div className="bg-raspberry text-left">[MD]</div>
      <div className="col-span-2 h-6" />
      <div className="bg-blueberry border border-black">Date</div>
      <div className="bg-blueberry border border-black">Hours</div>
      <div className="bg-blueberry border border-black">Tasks</div>
      <div className="bg-blueberry border border-black">Task ID</div>
      <div className="bg-blueberry border border-black">Comments</div>
    </div>
  )
}

export default Timesheet
