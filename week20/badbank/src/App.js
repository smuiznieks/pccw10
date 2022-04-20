import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserContext } from './components/context';
import CreateAccount from './components/createaccount';
import Home from './components/home';
import Login from './components/login';
import NavBar from './components/navbar';
import AllData from './components/alldata';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import Balance from './components/balance';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <div className='container' style={{ padding: "20px" }}>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/CreateAccount/' element={<CreateAccount />} />
            <Route path='/login/' element={<Login />} />
            <Route path='/deposit/' component={<Deposit />} />
            <Route path='/withdraw/' component={<Withdraw />} />
            <Route path='/balance/' component={<Balance />} />
            <Route path='/alldata/' element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
