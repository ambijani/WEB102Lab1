import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1> The next 7 days</h1>
      <h2>Welcome to your schedule, Alymuhammad! Check out this calendar to find your tasks, meetings, and activities for the next week </h2>

      <Calendar />
      

    </div>
  )
}

export default App