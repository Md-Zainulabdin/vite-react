import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

const App = () => (
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/sign-up" element={<SignUp />}/>
    </Routes>
);

export default App;
