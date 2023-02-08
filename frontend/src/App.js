import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditEvent from './pages/EditEvent';
import EventDetail from './pages/EventDetail';
import Events from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import Root from './pages/Root';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> }, //index to specify if its path is same as parent's so that both home and root together.
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <Events /> },
          { path: ':id', element: <EventDetail /> },
          { path: 'new', element: <NewEvent /> }, // it will not be treated as 'events/id' as router is smart
          { path: ':id/edit', element: <EditEvent /> },
        ]
      },
    ]
  },
])

function App() {
  return <RouterProvider router={route} />;
}

export default App;
