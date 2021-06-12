import CakeContainer from './Components/CakeContainer';
import {Provider} from 'react-redux'
import store from './Redux/store'
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCream from './Components/IceCream';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';
import Home from './Components/Home';
import Login from './Components/Login';
function App() {
  return (
    <Provider store={store}>
      <div className="App" >
        <ItemContainer cake/>
        <ItemContainer />
        <CakeContainer></CakeContainer>
        <HooksCakeContainer></HooksCakeContainer>
        <IceCream></IceCream>
        <NewCakeContainer></NewCakeContainer>
        {/* <UserContainer></UserContainer> */}
        <Home></Home>
        <Login ></Login>
      </div>
    </Provider>
  );
} 

export default App;
