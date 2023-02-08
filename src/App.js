import './App.css';
import DefaultLayout from './components/Layout/DefaultLayout';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <DefaultLayout >
        <Home />
      </DefaultLayout>
    </div>
  );
}

export default App;
