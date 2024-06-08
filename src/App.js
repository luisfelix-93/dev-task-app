import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import Layout from './components/Layout';
import Todo from './pages/Todo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}>
        <Route path='todo'>{<Todo/>}</Route>
      </Route>
    </Routes>
  );
}

export default App;
