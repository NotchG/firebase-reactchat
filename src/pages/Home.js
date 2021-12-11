import React from 'react';
import '../css/nicepage.css'
import bg from "../css/images/3d4703fc210d65ec4bc77661262df7fc8379bba4cc44584976b856893feeca02f7e020d8b9f85ae81cac8e29f04cef00bf64e1a1ef029c5fc718b5_1280.jpg"

const Home = () => {
    return (
        <div>
            <style> 
                {`
                 .u-section-1 {
                    margin-top: -1px;
                    background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg});
                    background-position: 50% 50%;
                  }
                  
                  .u-section-1 .u-sheet-1 {
                    min-height: 800px;
                  }
                  
                  .u-section-1 .u-text-1 {
                    text-transform: uppercase;
                    font-size: 6rem;
                    font-weight: 700;
                    margin: 60px auto 0 20px;
                  }
                  
                  .u-section-1 .u-text-2 {
                    margin: 30px 97px 0 20px;
                  }
                  
                  .u-section-1 .u-btn-1 {
                    background-image: none;
                    text-transform: uppercase;
                    font-weight: 700;
                    margin: 40px 20px 60px;
                  }
                  
                  @media (max-width: 1199px) {
                    .u-section-1 .u-sheet-1 {
                      min-height: 660px;
                    }
                  
                    .u-section-1 .u-text-1 {
                      margin-left: 0;
                    }
                  
                    .u-section-1 .u-text-2 {
                      margin-right: 0;
                      margin-left: 0;
                    }
                  
                    .u-section-1 .u-btn-1 {
                      margin-left: 0;
                      margin-right: 0;
                    }
                  }
                  
                  @media (max-width: 991px) {
                    .u-section-1 .u-sheet-1 {
                      min-height: 506px;
                    }
                  }
                  
                  @media (max-width: 767px) {
                    .u-section-1 .u-sheet-1 {
                      min-height: 380px;
                    }
                  
                    .u-section-1 .u-text-1 {
                      font-size: 3.75rem;
                    }
                  }
                  
                  @media (max-width: 575px) {
                    .u-section-1 .u-sheet-1 {
                      min-height: 239px;
                    }
                  
                    .u-section-1 .u-text-1 {
                      font-size: 3rem;
                    }
                  }
                `}
            </style>
        <section className="u-align-left u-clearfix u-image u-shading u-section-1" src="" data-image-width="1280" data-image-height="852" id="sec-c0da">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <h1 className="u-text u-text-default u-title u-text-1">Notchg inc.</h1>
        <p className="u-large-text u-text u-text-variant u-text-2">Meet the new Text Messaging app which you can text with your friends in groups and it's <span style={{fontWeight: '700'}}>P<span style={{fontWeight: '700'}}>rivate</span>
          </span>
        </p>
      </div>
    </section>
    </div>
    )
};

export default Home;