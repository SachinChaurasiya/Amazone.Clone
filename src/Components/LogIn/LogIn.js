import React , {useState}from 'react';
import {Link, useHistory} from 'react-router-dom';
import './LogIn.css'
import {auth} from '../../Firebase/Firebase'



const LogIn = () => {
     const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = (e) => {
       e.preventDefault();
       auth.signInWithEmailAndPassword(email, password)
       .then(auth => {
           history.push('/')
           
       }).catch(err => {
           alert(err.message)
       })

    }
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            //it successfully create new user with email and password
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch((err) => {
            alert(err.message)
            console.log(err);
        })
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='LoGo_AmAzOnE'/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    type="email" 
                    placeholder="email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button
                    onClick={signin}
                    className="login_signInButton">Sign In</button>
                </form>
                <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <button
                onClick={register}
                className="login_registationButton">Create Your Amazone Account</button>
            </div>
        </div>
    )
}

export default LogIn
