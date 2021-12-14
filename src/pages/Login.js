import React, {useState} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {updateDoc, doc} from 'firebase/firestore'
import { auth, db } from "../firebase";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
    });

    const Navigate = useNavigate();

    const {email, password, error, loading} = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setData({...data, error: null, loading: true})
        if (!email || !password) {
            setData({...data, error: 'All Fields Must Have A Value'})
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            await updateDoc(doc(db, 'users', result.user.uid), {
              isOnline: true,
            });
            setData({name:'', email:'', password:'', error:null})
            Navigate('/')
        } catch (e) {
            setData({...data, error: e.message, loading:false})
            alert(error);
        }
    }

    return (
      <div>
        <style>
          {`
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
          
          .u-section-1 .u-btn-1 {
            width: 50%;
            padding: 10px 31px 10px 29px;
          }
          
          .u-section-1 .u-btn-2 {
            border-style: none none solid;
            margin: 20px auto 0;
            padding: 0;
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
          `}
        </style>
        <section className="u-align-center u-clearfix u-section-1" id="sec-1387" onSubmit={handleSubmit} style={{backgroundColor: '#EDF3F8'}}>
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div className="u-align-center u-container-style u-group u-radius-50 u-shape-round u-white u-group-1">
          <div className="u-container-layout u-valign-middle u-container-layout-1">
            <h3 className="u-text u-text-default u-text-1">Log In</h3>
            <div className="u-expanded-width u-form u-login-control u-form-1">
              <form action="#" method="POST" className="u-clearfix u-form-custom-backend u-form-spacing-35 u-form-vertical u-inner-form" source="custom" name="form-2" style={{padding: '10px'}}>
                <div className="u-form-group u-form-name">
                  <label for="username-708d" className="u-label">Email</label>
                  <input type="email" placeholder="Enter your Email" id="username-708d" name="email" className="u-grey-5 u-input u-input-rectangle" required="" autoComplete="off" value={email} onChange={handleChange}/>
                </div>
                <div className="u-form-group u-form-password">
                  <label for="password-708d" className="u-label">Password</label>
                  <input type="password" placeholder="Enter your Password" id="password-708d" name="password" className="u-grey-5 u-input u-input-rectangle" required="" autoComplete="off" value={password} onChange={handleChange}/>
                </div>
                <div className="u-form-checkbox u-form-group">
                  <input type="checkbox" id="checkbox-708d" name="remember" value="On" />
                  <label for="checkbox-708d" className="u-label">Remember me</label>
                </div>
                <div className="u-align-center u-form-group u-form-submit">
                  <button className="u-btn u-btn-round u-btn-submit u-button-style u-radius-17 u-btn-1" style={{backgroundColor: '#09BC8A'}} disabled={loading}>{loading ? 'logging In...' : 'Log In'}</button>
                  <input type="submit" value="submit" className="u-form-control-hidden" />
                </div>
                <input type="hidden" value="" name="recaptchaResponse" />
              </form>
            </div>
            <button href="" className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-1-base u-btn-2">Google Sign In</button>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
}

export default Login;