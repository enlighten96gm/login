import React from 'react';
import s from './logout.module.css'

const Logout = () => {
    return (
        <div className={s.logout}>
            <div>Welcome <span className={s.name}>Gleb</span></div>
            <button className={s.logoutBtn}>Logout</button>
        </div>
    )
}

export default Logout