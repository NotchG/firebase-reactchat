import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {auth, db} from '../firebase'
import {useNavigate} from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import {AuthContext} from '../context/auth'

const Navbar = () => {
    const {user} = useContext(AuthContext)
    const Navigate = useNavigate();

    const logOut = async () => {
        try {
            await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                isOnline: false,
            });
            await signOut(auth);
            Navigate('/login')
        } catch (e) {
            alert(e.message);
        }
    }
    return (
        <nav>
            <h3>
                <Link to='/'>NotchG Inc.</Link>
            </h3>
            <div>
                {user ? (
                    <>
                    <Link to='/explore'>Explore</Link>
                    <Link to='/profile'>Profile</Link>
                    <button className='btn' style={{backgroundColor:'transparent', borderColor:'transparent'}} onClick={logOut}>Logout</button>
                    </>
                ) : (
                    <>
                <Link to='/about'>About</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                </>
                )}
            </div>
        </nav>
    )
}

export default Navbar;