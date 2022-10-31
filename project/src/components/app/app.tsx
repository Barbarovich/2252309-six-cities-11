import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {LoginPage} from '../../pages/login-page/login-page';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page';
import {RoomPage} from '../../pages/room-page/room-page';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  availablePlaces: number;
}

function App({availablePlaces}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main availablePlaces={availablePlaces}/>}
        >
        </Route>
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        >
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage/>
            </PrivateRoute>
          }
        >
        </Route>
        <Route
          path={AppRoute.Room}
          element={<RoomPage/>}
        >
        </Route>
        <Route
          path="*"
          element={<NotFoundPage/>}
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
