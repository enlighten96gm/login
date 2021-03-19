import React, { useState } from 'react';
import s from './login.module.css'


const Login = () =>  {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={s.login}>
            <form className={s.login__form}>
                <div className={s.authorize}>AUTHORIZATION</div>
                <input className={s.firstInp} type="email" placeholder="Email" value={email}
                onChange={e => {
                    setEmail(e.target.value)
                }}></input>
                <input className={s.secondInp} type="password" placeholder="Password" value={password}
                onChange={e => {
                    setPassword(e.target.value)
                }}></input>
                <button type="submit" className={s.button}>Submit</button>
            </form>
        </div>
    )
}
export default Login