import './App.css';
import Login from './component/LOGIN/login';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Login store={store}/>
    </div>
  );
}

export default App;
