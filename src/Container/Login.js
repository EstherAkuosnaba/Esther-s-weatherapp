import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'


function Login() {
    return (
        <div className='home-bg'>
            <div id="login-box">
                <div class="left">
                    <h1>Sign up</h1>

                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="email" placeholder="E-mail" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="password2" placeholder="comfirm password" />

                    <input type="submit" name="signup_submit" value="Sign me up" />
                   

                </div>

                <div class="right">
                    <span class="loginwith">Sign in with<br />social network</span>

                    <button class="social-signin facebook">Signin with facebook <i class='bx bxl-facebook-circle'></i></button>
                    <button class="social-signin twitter"><i class='bx bxl-twitter'></i>signin with twitter </button>
                    <button class="social-signin google">signin with google<box-icon type='logo' name='google'></box-icon></button>
                    <button id="dee" class="social-signin instagram">signin with instagram<box-icon name='instagram' type='logo' ></box-icon></button>
                    <span>
                        <Link to='/weather'><button class="check">Check Weather</button></Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login


