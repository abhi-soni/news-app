import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

const App = () => {
  const api = process.env.REACT_APP_API_KEY;
  return (
    <div>
      <NavBar />
      <News apiKey={api} />
    </div>
  )
}
export default App;
