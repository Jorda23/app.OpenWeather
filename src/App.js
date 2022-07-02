import './assets/css/App.css';
import Ul from './components/IconAwesome';
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Ul />
      <Header />
      <NavBar />
      <WeatherPanel />
    </div>
  );
}

export default App;