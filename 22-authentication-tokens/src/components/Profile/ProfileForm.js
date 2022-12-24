import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();
  const passwordRef = useRef();
  const authContext = useContext(AuthContext);

  const formSubmitHandler = (event)=> {
    event.preventDefault();
    const enteredPassword = passwordRef.current.value;


    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDXekyR3ocsp-ZLDLz5NWd6xdXCJTf7W0U',{
      method: 'POST',
      body: JSON.stringify({idToken: authContext.token,password:enteredPassword,returnSecureToken:true}),
      headers: {'Content-type': 'application/json'}
    }).then(res => {
      history.replace('/');
    })
  }

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passwordRef} type='password' id='new-password' minLength='6' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
