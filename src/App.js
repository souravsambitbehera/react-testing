import { createBrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import TestOne from './components/TestOne';
import Counter from './components/Counter';
import Form from './components/Form';
import FetchApi from './components/FetchApi';

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
  }



])


export default App;
