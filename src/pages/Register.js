import React, {useState} from "react";
import '../css/nicepage.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'
import { auth, db } from "../firebase";
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
    });

    const Navigate = useNavigate();

    const {name, email, password, error, loading} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setData({...data, error: null, loading: true})
        if (!name || !email || !password) {
            setData({...data, error: 'All Fields Must Have A Value'})
        }
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'users', result.user.uid), {
                uid: result.user.uid,
                name,
                email,
                createdAt: new Date().toString(),
                isOnline: true,
            });
            setData({name:'', email:'', password:'', error:null, loading: false})
            Navigate('/')
        } catch (e) {
            setData({...data, error: e.message, loading:false})
            alert(error);
        }
    }

    return (
      <div>
        <style>{`
         .u-section-1 {
          background-image: none;
        }
        
        .u-section-1 .u-sheet-1 {
          min-height: 633px;
        }
        
        .u-section-1 .u-group-1 {
          width: 584px;
          min-height: 514px;
          margin: 25px auto;
        }
        
        .u-section-1 .u-container-layout-1 {
          padding: 30px;
        }
        
        .u-section-1 .u-text-1 {
          font-size: 2.25rem;
          margin: 0 auto;
        }
        
        .u-section-1 .u-form-1 {
          margin: 30px 0 0;
        }
        
        .u-section-1 .u-form-group-2 {
          margin-left: 0;
        }
        
        .u-section-1 .u-btn-1 {
          width: 50%;
          padding: 10px 31px 10px 29px;
        }
        
        @media (max-width: 1199px) {
          .u-section-1 .u-form-1 {
            margin-right: initial;
            margin-left: initial;
          }
        }
        
        @media (max-width: 767px) {
          .u-section-1 .u-group-1 {
            width: 540px;
          }
        
          .u-section-1 .u-container-layout-1 {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
        
        @media (max-width: 575px) {
          .u-section-1 .u-group-1 {
            width: 340px;
          }
        
          .u-section-1 .u-text-1 {
            font-size: 1.5rem;
          }
        }
          `}</style>
        <section className="u-align-center u-clearfix u-grey-10 u-section-1" id="sec-5280">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div className="u-align-center u-container-style u-group u-radius-50 u-shape-round u-white u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <h3 className="u-text u-text-default u-text-1">Sign Up</h3>
            <div className="u-expanded-width u-form u-login-control u-form-1">
              <form action="#" method="POST" className="u-clearfix u-form-custom-backend u-form-spacing-35 u-form-vertical u-inner-form" source="custom" name="form-2" style={{padding: '10px'}} onSubmit={handleSubmit}>
                <div className="u-form-group u-form-name">
                  <label for="username-708d" className="u-label">Username</label>
                  <input type="text" placeholder="Enter your Username" id="username-708d" name="name" className="u-grey-5 u-input u-input-rectangle" required="" value={name} onChange={handleChange}/>
                </div>
                <div className="u-form-group u-form-group-2">
                  <label for="text-9db8" className="u-label">Email</label>
                  <input type="email" id="text-9db8" name="email" className="u-grey-5 u-input u-input-rectangle" placeholder="Enter your Email" required="required" value={email} onChange={handleChange}/>
                </div>
                <div className="u-form-group u-form-password">
                  <label for="password-708d" className="u-label">Password</label>
                  <input type="password" placeholder="Enter your Password" id="password-708d" name="password" className="u-grey-5 u-input u-input-rectangle" required="" value={password} onChange={handleChange}/>
                </div>
                <div className="u-align-center u-form-group u-form-submit">
                  <button className="u-btn u-btn-round u-btn-submit u-button-style u-radius-17 u-btn-1" disabled={loading}>{loading ? 'Creating' : 'Sign Up'}<br />
                  </button>
                  <input type="submit" value="submit" className="u-form-control-hidden" />
                </div>
                <input type="hidden" value="" name="recaptchaResponse" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
}

export default Register;