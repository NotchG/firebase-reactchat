import React from "react";

const MessageForm = () => {
    return (
        <div className="u-form u-form-1" style={{position: 'relative', bottom: '0'}}>
          <form className="u-clearfix u-form-horizontal u-form-spacing-0 u-inner-form" source="custom" name="form" style={{padding: '0px'}}>
              <div>
            <label for='img'>
            <div className="u-btn u-button-style u-btn-3">Upload</div>
            </label>
            <input type="file" id="img" accept='image/*' name="upload" style={{display: 'none'}}/>
            </div>
            <div className="u-form-group u-form-name">
              <label for="name-5e66" className="u-form-control-hidden u-label"></label>
              <input type="text" placeholder="Message" id="name-5e66" name="message" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="" />
            </div>
            <div className="u-align-center u-form-group u-form-submit">
              <button className="u-btn u-btn-submit u-button-style u-btn-1">Send</button>
              <input type="submit" value="submit" className="u-form-control-hidden" />
            </div>
          </form>       
      </div>
    )
}

export default MessageForm;