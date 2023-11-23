import { createBrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import TestOne from './components/TestOne';
import Counter from './components/Counter';
import Form from './components/Form';
import FetchApi from './components/FetchApi';
import MemoPractice from './components/Practice';
import Practice from './components/Practice';

function App() {
  return (
    <>
    App component render
    </>
  );
}
export const router = createBrowserRouter([

  {
    path:"/",
    element:<App/>
  },
  {
    path:"/testone",
    element:<TestOne/>
  },
  {
    path:"/counter",
    element:<Counter />
  },
  {
    path:"/form",
    element:<Form />
  },
  {
    path:"/fetchapi",
    element:<FetchApi />
  },
  {
    path:"/practice",
    element:<Practice />
  }



])


export default App;
