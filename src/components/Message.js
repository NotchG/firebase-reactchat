import React from "react";
import Moment from "react-moment";
import { auth } from "../firebase";

const Message = ({key, msg}) => {
    return (
        <div style={{width: '100%', textAlign: `${msg.from == auth.currentUser.uid ? 'right' : 'left'}`}}>
            <p style={{padding: '15px', display: 'inline-block', position: 'relative', maxWidth: '50%', height: 'auto', backgroundColor: `${msg.from == auth.currentUser.uid ? 'lightblue' : 'lightgray'}`}}>
            {msg.media ? <img src={msg.media} alt={msg.text} />: null}
            {msg.text}
            <br />
            <small style={{opacity: '0.8', display: 'inline-block'}}>
                <Moment fromNow={msg.createdAt.toDate()}></Moment>
            </small>
            </p>
        </div>
    )
}

export default Message;