import PojoDate from 'pojodate';

const timesheetDate = new PojoDate('2024-09-01')
const data = {
  name: "Frontend development projects",
  period: timesheetDate.toLocaleString('default', { month: 'long' }) + ' ' + timesheetDate.years,
  date: timesheetDate.add({ months: 1 }).set({ days: 0 })
}

const Timesheet = () => {
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.period.toUpperCase()}</div>
      <div>{data.date.format(({ years, months, days }) => `${days}/${months}/${years}`)}</div>
    </div>
  )
}

export default Timesheet
