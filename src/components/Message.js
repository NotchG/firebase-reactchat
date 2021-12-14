import React from "react";
import moment from 'moment'
import { auth } from "../firebase";

const Message = ({key, msg}) => {
    let diff = moment(msg.createdAt.toDate()).fromNow()
    
    return (
        <div style={{width: '100%', textAlign: `${msg.from === auth.currentUser.uid ? 'right' : 'left'}`}}>
            <p style={{padding: '15px', display: 'inline-block', position: 'relative', maxWidth: '50%', height: 'auto', backgroundColor: `${msg.from === auth.currentUser.uid ? '#ABD1E2' : 'lightgray'}`}}>
            {msg.media ? <img src={msg.media} alt={msg.text} />: null}
            {msg.text}
            <br />
            <small style={{opacity: '0.8', display: 'inline-block'}}>
                {diff}
            </small>
            </p>
        </div>
    )
}

export default Message;