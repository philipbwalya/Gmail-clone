import { Button } from '@mui/material';
import './Login.css';
import { auth, provider } from './firebase';
import img from './images/gmail.png';
import { login, logout } from './features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user}) => {
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }))
    })
    .catch(error => alert(error.message))
  };
  return (
    <div className='login'>
      <div className="login__container">
        <img src={img} alt="" />
        <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
      </div>
    </div>
  )
}

export default Login;