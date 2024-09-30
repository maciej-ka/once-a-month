import PojoDate from 'pojodate';

type Props = {
  date: PojoDate
}

const Day = ({ date }: Props) => {
  return (
    <>
      <div className="bg-blueberry border border-black">{date.format(({years, months, num}) => `${num.days}/${months}/${years}`)}</div>
      <div className="border border-black text-black font-normal"></div>
      <div className="border border-black text-black font-normal"></div>
      <div className="border border-black text-black font-normal"></div>
      <div className="border border-black text-black font-normal"></div>
    </>
  )
}

export default Day
