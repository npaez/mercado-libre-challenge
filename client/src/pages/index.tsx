// modules
import {
  createBrowserRouter
} from 'react-router-dom';

// pages
import Main from './Main';
import Search from './Search';
import Detail from './Detail';

// router creation
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/items',
    element: <Search />,
  },
  {
    path: '/item/:id',
    element: <Detail />
  },
]);
;

export default router;