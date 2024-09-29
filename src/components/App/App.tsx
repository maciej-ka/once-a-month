import Timesheet from '../Timesheet/Timesheet';

function App() {
  return (
    <div className="App">
      <Timesheet date={new Date('2024-09-01')} />
    </div>
  );
}

export default App;
