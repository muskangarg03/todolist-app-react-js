import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <TodoWrapper  />
      <Footer/>
      
    </div>
  );
}

export default App;
