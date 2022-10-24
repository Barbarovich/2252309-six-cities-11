import Main from '../../pages/main/main';

type AppProps = {
  availablePlaces: number;
}

function App({availablePlaces}: AppProps): JSX.Element {
  return <Main availablePlaces={availablePlaces}/>;
}

export default App;
