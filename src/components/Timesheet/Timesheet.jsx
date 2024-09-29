const data = {
  name: "Frontend development projects",
  period: new Date('2024-09-01'),
}

const Timesheet = () => {
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.period.toLocaleString('default', { month: 'long' })}</div>
    </div>
  )
}

export default Timesheet
