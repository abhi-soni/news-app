import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

const App = () => {
  const api = import.meta.env.VITE_APP_API_KEY;
  return (
    <div>
      <NavBar />
      <News apiKey={api} />

    </div>
  )
}
export default App;
