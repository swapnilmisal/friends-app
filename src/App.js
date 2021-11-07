import 'antd/dist/antd.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import FriendsListComponent from './components/FriendsListComponent';
import AddFriendComponent from './components/AddFriendComponent';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddFriendComponent />
        <FriendsListComponent />
      </div>
    </Provider>
  );
}

export default App;
