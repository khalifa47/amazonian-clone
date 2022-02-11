import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        //firebase
        auth.signInWithEmailAndPassword(auth.getAuth(), email, password)
            .then(auth => history('/'))
            .catch(error => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();

        //firebase
        auth.createUserWithEmailAndPassword(auth.getAuth(), email, password)
            .then((auth) => { if (auth) { history('/') } })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className='login_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="logo" />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>
                <button onClick={register} className='login_registerButton'>Create your Account</button>
            </div>
        </div>
    );
}

export default Login;