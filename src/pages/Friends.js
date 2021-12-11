import React, { useState , useEffect} from "react";
import { db, auth } from "../firebase";
import {collection, query, where, onSnapshot, getDoc, doc, updateDoc} from 'firebase/firestore'
import User from '../components/User'
import { Navigate } from "react-router-dom";

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [users, setUsers] = useState([]);
    const [friendres, setFriendres] = useState([]);
    const [data, setData] = useState({
        friendname: '',
        loading: false
    })
    const [currentuserselected, setCurrentUserSelected] = useState(null)

    const {friendname, loading} = data

    useEffect(() => {
        const QueryFriends = () => {
            try {
                if (friends.length !== 0) {
                const userRef = collection(db, 'users')
                const q = query(userRef, where('uid', 'not-in', friends))
                const unsub = onSnapshot(q, querySnap => {
                    let friendss = []
                    querySnap.forEach(doc => {
                        friendss.push(doc.data())
                    });
                    setUsers(friendss)
                    setFriendres(users)
                })
                return () => unsub()
            }
            } catch (err) {
                alert(err)
            }
        }
        const getFriends = async () => {
            await getDoc(doc(db, 'users', auth.currentUser.uid)).then(docSnap => {
                if (docSnap.exists) {
                    if (docSnap.data().friends) {
                        let friends = docSnap.data().friends.split(' ')
                        console.log('getting friends')
                        friends.push(auth.currentUser.uid)
                        setFriends(friends)
                    } else {
                        let friends = []
                        console.log('no friends')
                        friends.push(auth.currentUser.uid)
                        setFriends(friends)
                    }
                }
            })
        }
        if (friends.length !== 0) {
            QueryFriends()
        } else {
        getFriends()
        }
    }, [friends])


    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        if (!loading) {
        setData({...data, loading: true})
        let userss = users
        if (friendname === '') {
            setFriendres(users)
        } else {
            var friend = userss.filter(function(user) {return (user.name.toLowerCase().includes(friendname.toLowerCase()))})
            setFriendres(friend)
        }
        setData({...data, loading: false})
        }
    }

    const addFriend = async () => {
        if (!loading) {
        setData({...data, loading: true})
        let final = friends
        //final.push(currentuserselected.uid)
        let idx = final.indexOf(auth.currentUser.uid)
        let finalstring = ''
        if (idx < 0) {
            finalstring = final.join(' ')
        } else {
            finalstring = final.splice(idx, 1).join(' ')
        }
        console.log(friends)
        console.log(idx)
        console.log(finalstring)
        console.log('mine: ' + auth.currentUser.uid)
        /*await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            friends: finalstring
        })*/
        setData({...data, loading: false})      
        }
    }

    const selectUser = (user) => {
        setCurrentUserSelected(user)
    }

    return (
        <div>
            <style>
                {`
                .u-section-1 .u-sheet-1 {
                    min-height: 500px;
                  }
                  
                  .u-section-1 .u-list-1 {
                    width: 302px;
                    margin: 34px auto 60px 0;
                  }
                  
                  .u-section-1 .u-repeater-1 {
                    grid-gap: 10px 10px;
                    grid-auto-columns: 100%;
                    grid-template-columns: 100%;
                    min-height: 310px;
                  }
                  
                  .u-section-1 .u-container-layout-1 {
                    padding: 0;
                  }
                  
                  .u-section-1 .u-image-2 {
                    width: 71px;
                    height: 70px;
                    margin: 13px auto 0 10px;
                  }
                  
                  .u-section-1 .u-text-1 {
                    margin: -60px auto 0 94px;
                  }
                  
                  .u-section-1 .u-text-2 {
                    font-size: 0.75rem;
                    margin: 6px auto 0 94px;
                  }
                  
                  .u-section-1 .u-container-layout-2 {
                    padding: 0;
                  }
                  
                  .u-section-1 .u-image-4 {
                    width: 71px;
                    height: 70px;
                    margin: 13px auto 0 10px;
                  }
                  
                  .u-section-1 .u-text-3 {
                    margin: -60px auto 0 94px;
                  }
                  
                  .u-section-1 .u-text-4 {
                    font-size: 0.75rem;
                    margin: 6px auto 0 94px;
                  }
                  
                  .u-section-1 .u-container-layout-3 {
                    padding: 0;
                  }
                  
                  .u-section-1 .u-image-6 {
                    width: 71px;
                    height: 70px;
                    margin: 13px auto 0 10px;
                  }
                  
                  .u-section-1 .u-text-5 {
                    margin: -60px auto 0 94px;
                  }
                  
                  .u-section-1 .u-text-6 {
                    font-size: 0.75rem;
                    margin: 6px auto 0 94px;
                  }
                  
                  @media (max-width: 1199px) {
                    .u-section-1 .u-image-2 {
                      height: 71px;
                    }
                  
                    .u-section-1 .u-text-1 {
                      margin-top: -55px;
                    }
                  
                    .u-section-1 .u-image-4 {
                      height: 71px;
                    }
                  
                    .u-section-1 .u-text-3 {
                      margin-top: -61px;
                    }
                  
                    .u-section-1 .u-image-6 {
                      height: 71px;
                    }
                  
                    .u-section-1 .u-text-5 {
                      margin-top: -61px;
                    }
                  }
                  
                  @media (max-width: 575px) {
                    .u-section-1 .u-sheet-1 {
                      min-height: 485px;
                    }
                  }
                `}
            </style>
        <div className="u-form u-form-1" style={{position: 'relative', bottom: '0'}}>
          <form className="u-clearfix u-form-horizontal u-form-spacing-0 u-inner-form" source="custom" name="form" style={{padding: '0px'}} onSubmit={handleSubmit}>
            <div className="u-form-group u-form-name">
              <label for="name-5e66" className="u-form-control-hidden u-label"></label>
              <input type="text" placeholder="Friend Name" id="name-5e66" name="friendname" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="" onChange={handleChange}/>
            </div>
            <div className="u-align-center u-form-group u-form-submit">
              <button className="u-btn u-btn-submit u-button-style u-btn-1" disabled={loading}>Send</button>
              <input type="submit" value="submit" className="u-form-control-hidden" />
            </div>
          </form>       
      </div>
      <section className="u-clearfix u-section-1" id="sec-0554" style={{marginTop:'-1px',width: '20%',borderStyle:'solid', borderColor:'black', borderWidth:'0 5px 0 0', overflowY: 'scroll', height: '92vh'}}>
      <div className="u-clearfix u-sheet u-sheet-1" style={{width: '100%'}}>
        <div className="u-list u-list-1" style={{marginLeft: 'auto', marginRight: 'auto', width:'auto', margin:'10px'}}>
          <div className="u-repeater u-repeater-1">
              {friendres.map((user) => (
                  <User key={user.uid} user={user} selectUser={selectUser}/>
              ))}
            </div>
          </div>
        </div>
    </section>
      {(currentuserselected) ? (
            <div style={{float: 'right', width: '80%', marginTop: '-1px', paddingLeft: '10px', marginTop: '-92vh'}}>
                <h3 class="u-text u-text-default u-text-7">{currentuserselected.name}</h3>
        <p class="u-small-text u-text u-text-default u-text-variant u-text-8" style={{marginTop: '-10px'}}>{currentuserselected.isOnline ? 'online' : 'offline'}</p>
        <hr />
        <button className="u-btn u-btn-submit u-button-style u-btn-1" onClick={addFriend} disabled={loading}>Add Friend</button>
      </div>
        ) : null}
      </div>
    )
}

export default Friends;