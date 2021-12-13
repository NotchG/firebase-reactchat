import React, {useEffect, useState} from "react";
import { db, auth, storage } from "../firebase";
import {collection, query, where, onSnapshot, getDoc, doc, addDoc, orderBy, Timestamp} from 'firebase/firestore'
import User from '../components/User'
import '../css/nicepage.css'
import MessageForm from "../components/MessageForm";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Message from "../components/Message";

const Chat = () => {
    const [users, setUsers] = useState([]);
    const [chat, setChat] = useState();
    const [friends, setFriends] = useState();
    const [text, setText] = useState('');
    const [img, setImg] = useState('')
    const [msgs, setMsgs] = useState([]);

    const user1 = auth.currentUser.uid;

    useEffect(() => {
      const queryFriends = () => {
        console.log(friends)
        const userRef = collection(db, 'users')
          if (friends) {
          console.log('querying friends')
          const friendss = friends.split(' ')
          const q = query(userRef, where('uid', 'in', friendss))
          const unsub = onSnapshot(q, querySnap => {
              let users = []
              querySnap.forEach(doc => {
                  users.push(doc.data())
              })
              setUsers(users)
          })
          return () => unsub()
      }
    }
      const getFriends = (async () => {
            await getDoc(doc(db, 'users', auth.currentUser.uid)).then(docSnap => {
                if(docSnap.exists) {  
                    try{
                        console.log('Retrieving User..')
                        setFriends(docSnap.data().friends)
                    } catch (e) {
                        alert(e.message)
                    }
                }
            })
            })
            if (friends){
              queryFriends()
            } else {
              getFriends()
            }
    }, [friends])

    const selectUser = (user) => {
        setChat(user);
        console.log(user);

        const user2 = user.uid
        const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}` 

        const msgsRef = collection(db, 'messages', id, 'chat')
        const q = query(msgsRef, orderBy('createdAt', 'asc'))

        onSnapshot(q, querySnap => {
          let msgs = []
          querySnap.forEach(doc => {
            msgs.push(doc.data())
          })
          setMsgs(msgs)
        })
    }
    console.log(msgs)

    const handleSubmit = async (e) => {
      e.preventDefault()
      const user2 = chat.uid
      const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}` 
      let url ;
      if(img) {
        const imgRef = ref(storage, `images/${new Date().getTime} - ${img.name}`)
        const snap = await uploadBytes(imgRef, img)
        const dlurl = await getDownloadURL(ref(storage, snap.ref.fullPath))
        url = dlurl;
      }
      await addDoc(collection(db, 'messages', id, 'chat'), {
        text,
        from: user1,
        to: user2,
        createdAt: Timestamp.fromDate(new Date()),
        media: url || ''
      })
      setText('')
      setImg(null)
    }
    return(
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
        <section className="u-clearfix u-section-1" id="sec-0554" style={{float: 'left',width: '20%',borderStyle:'solid', borderColor:'black', borderWidth:'0 5px 0 0', overflowY: 'scroll', height: 'calc(100vh - 70px)'}}>
      <div className="u-clearfix u-sheet u-sheet-1" style={{width: '100%'}}>
        <div className="u-list u-list-1" style={{marginLeft: 'auto', marginRight: 'auto', width:'auto', margin:'10px'}}>
          <div className="u-repeater u-repeater-1" style={{minHeight: '0'}}>
              {users.map((user) => (
                  <User key={user.uid} user={user} selectUser={selectUser}/>
              ))}
            </div>
          </div>
        </div>
    </section>
    {chat ? (
            <div style={{float: 'right', width: '80%', paddingLeft: '10px', paddingRight: '10px'}}>
              <div style={{height: '100px'}}>
                <h3 className="u-text u-text-default u-text-7">{chat.name}</h3>
        <p className="u-small-text u-text u-text-default u-text-variant u-text-8" style={{marginTop: '-10px'}}>{chat.isOnline ? 'online' : 'offline'}</p>
        <hr />
        </div>
        <table style={{width: '100%', height: 'calc(100vh - 190px)'}}>
          <tr style={{height: '100%'}}>  
            <td valign="top">
              <div style={{overflowY: 'scroll', height: '100%', width: '100%'}}>
                {msgs.length ? msgs.map((msg, i) =><Message key={i} msg={msg} />) : null}
              </div>
            </td>
          </tr>
          <tr>
            <td valign='bottom'>
            <MessageForm setImg={setImg} handleSubmit={handleSubmit} text={text} setText={setText} Disabled={chat.friends ? !chat.friends.includes(auth.currentUser.uid) : true}/>
            </td>
          </tr>
        </table>
      </div>
        ) : null}
        </div>
    )
}

export default Chat;