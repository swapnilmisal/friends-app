import 'antd/dist/antd.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import FriendsListComponent from './components/FriendsListComponent';
import AddFriendComponent from './components/AddFriendComponent';
import HeaderComponent from './components/HeaderComponent';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderComponent />
        <AddFriendComponent />
        <FriendsListComponent />
      </div>
    </Provider>
  );
}

export default App;
