import React from "react";

const MessageForm = ({setImg, handleSubmit, text, setText, Disabled, loading}) => {
    return (
      <div style={{height: 'fit-content'}}>
        <div className="u-form u-form-1" style={{width: '100%'}}>
          <form className="u-clearfix u-form-horizontal u-form-spacing-0 u-inner-form" source="custom" name="form" style={{padding: '0px'}} onSubmit={handleSubmit}>
              <div>
            <label for='img'>
            <div className="u-btn u-button-style u-btn-3" style={{margin:'0 0 0 0', backgroundColor: '#09BC8A'}}>Upload</div>
            </label>
            <input type="file" id="img" accept='image/*' name="upload" style={{display: 'none'}} disabled={loading ? loading : Disabled} onChange={e => setImg(e.target.files[0])}/>
            </div>
            <div className="u-form-group u-form-name">
              <label for="name-5e66" className="u-form-control-hidden u-label"></label>
              <input type="text" placeholder={(Disabled) ? 'The other party has to be friends with you': 'message'} id="name-5e66" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="" autoComplete="off" disabled={Disabled} value={text} onChange={e => setText(e.target.value)}/>
            </div>
            <div className="u-align-center u-form-group u-form-submit">
              <button className="u-btn u-btn-submit u-button-style u-btn-1" disabled={loading ? loading : Disabled} style={{backgroundColor: '#09BC8A'}}>Send</button>
              <input type="submit" value="submit" className="u-form-control-hidden" disabled={loading ? loading : Disabled}/>
            </div>
          </form>       
      </div>
      </div>
    )
}

export default MessageForm;