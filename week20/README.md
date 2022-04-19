# Week 20

Keep your eye out for these gotchas!

Add to `index.jsx`
```
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
```

```
npm i bootstrap
npm i react-router-dom@5.3.1
```

React Router has a few changes with v6:
```
<Routes>
  <Route path='/' exact element={<Home />} />
  <Route path='/CreateAccount/' element={<CreateAccount/>} />
  <Route path='/login/' element={<Login/>} />
  <Route path='/deposit/' element={<Deposit/>} />
  <Route path='/withdraw/' element={<Withdraw/>} />
  <Route path='/balance/' element={<Balance/>} />
  <Route path='/alldata/' element={<AllData/>} />
</Routes>
```
