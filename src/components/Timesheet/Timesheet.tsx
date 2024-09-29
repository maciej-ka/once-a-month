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
    <div className="grid grid-cols-5">
      <div className="text-center">NAME:</div>
      <div className="text-center">{data.name}</div>
      <div className="col-span-3 row-span-7"><img alt="logo" src={logo}/></div>
      <div className="text-center">PERIOD:</div>
      <div className="text-center">{data.period.toUpperCase()}</div>
      <div className="text-center">DATE:</div>
      <div className="text-center">{data.date.format(({ years, months, days }) => `${days}/${months}/${years}`)}</div>
      <div className="col-span-2" />
      <div className="text-center">Number of HOURS TOTAL:</div>
      <div>[Hours]</div>
      <div className="text-center">Number of DAYS TOTAL:</div>
      <div>[MD]</div>
      <div className="col-span-2" />
      <div>Date</div>
      <div>Hours</div>
      <div>Tasks</div>
      <div>Task ID</div>
      <div>Comments</div>
      <button>test</button>
    </div>
  )
}

export default Timesheet
