import React, { useEffect } from 'react';
import { router } from './Router/Router';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { getUser, logout, setUser } from './feature/auth/authSlice';

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      console.log(user);
      if (user) {
        dispatch(getUser(user.email))
      }else{
        dispatch(logout())
      }
    })
  },[])
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
};

export default App;
