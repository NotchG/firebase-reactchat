import React from "react";
import '../css/nicepage.css'

const User = ({user, selectUser}) => {
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
                  
                  .u-section-1 .u-image-1 {
                    background-image: linear-gradient(0deg, rgba(41,45,51,0.75), rgba(41,45,51,0.75)), url(${user.avatar || "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJtYW4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBzdHlsZT0id2lkdGg6IDI1NnB4OyBoZWlnaHQ6IDI1NnB4OyI+CjxyZWN0IGZpbGw9IiNDNkQ4RTEiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ii8+CjxwYXRoIGZpbGw9IiM3Rjk2QTYiIGQ9Ik0xNzIuNiw5My40YzExLjYtNDQuNy0xMS4yLTQ4LjYtMTEuNy00OC4xYy0yMi40LTMxLjMtOTAuMy0xNi44LTc3LjQsNDguMWMtMTMuMy0yLjQtMS44LDMxLjYsMy43LDMyLjEKCWMwLDAsMCwwLDAsMGMwLjIsMCwwLjMsMCwwLjUtMC4xYzE0LjQsNDkuNyw2Mi43LDUwLjIsODAuNywwQzE3Mi4zLDEyNy4zLDE4Ni41LDkzLjMsMTcyLjYsOTMuNHoiLz4KPHBhdGggZmlsbD0iIzdGOTZBNiIgZD0iTTIwNS40LDE3Ny45Yy0yNC02LjEtNDMuNS0xOS44LTQzLjUtMTkuOGwtMjAuNiw2NC44bC04LTIyLjhjMTkuNy0yNy41LTMwLjMtMjcuNS0xMC42LDBsLTgsMjIuOEw5NCwxNTguMQoJYzAsMC0xOS41LDEzLjctNDMuNSwxOS44QzMyLjcsMTgyLjUsMzAsMjU2LDMwLDI1NmgxOTZDMjI2LDI1NiwyMjMuMywxODIuNSwyMDUuNCwxNzcuOXoiLz4KPC9zdmc+Cg=="});
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
                    margin: 6px auto 25px 94px;
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
            <div class="u-container-style u-image u-image-round u-list-item u-radius-23 u-repeater-item u-shading u-image-1" onClick={() => selectUser(user)} data-image-width="355" data-image-height="355" style={{width: 'auto',backgroundImage: `linear-gradient(0deg, rgba(41,45,51,0.75), rgba(41,45,51,0.75)), url(${user.avatar || "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJtYW4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBzdHlsZT0id2lkdGg6IDI1NnB4OyBoZWlnaHQ6IDI1NnB4OyI+CjxyZWN0IGZpbGw9IiNDNkQ4RTEiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ii8+CjxwYXRoIGZpbGw9IiM3Rjk2QTYiIGQ9Ik0xNzIuNiw5My40YzExLjYtNDQuNy0xMS4yLTQ4LjYtMTEuNy00OC4xYy0yMi40LTMxLjMtOTAuMy0xNi44LTc3LjQsNDguMWMtMTMuMy0yLjQtMS44LDMxLjYsMy43LDMyLjEKCWMwLDAsMCwwLDAsMGMwLjIsMCwwLjMsMCwwLjUtMC4xYzE0LjQsNDkuNyw2Mi43LDUwLjIsODAuNywwQzE3Mi4zLDEyNy4zLDE4Ni41LDkzLjMsMTcyLjYsOTMuNHoiLz4KPHBhdGggZmlsbD0iIzdGOTZBNiIgZD0iTTIwNS40LDE3Ny45Yy0yNC02LjEtNDMuNS0xOS44LTQzLjUtMTkuOGwtMjAuNiw2NC44bC04LTIyLjhjMTkuNy0yNy41LTMwLjMtMjcuNS0xMC42LDBsLTgsMjIuOEw5NCwxNTguMQoJYzAsMC0xOS41LDEzLjctNDMuNSwxOS44QzMyLjcsMTgyLjUsMzAsMjU2LDMwLDI1NmgxOTZDMjI2LDI1NiwyMjMuMywxODIuNSwyMDUuNCwxNzcuOXoiLz4KPC9zdmc+Cg=="})`}}>
              <div class="u-container-layout u-similar-container u-container-layout-1">
                <img class="u-image u-image-circle u-preserve-proportions u-image-2" src={user.avatar || "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJtYW4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBzdHlsZT0id2lkdGg6IDI1NnB4OyBoZWlnaHQ6IDI1NnB4OyI+CjxyZWN0IGZpbGw9IiNDNkQ4RTEiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ii8+CjxwYXRoIGZpbGw9IiM3Rjk2QTYiIGQ9Ik0xNzIuNiw5My40YzExLjYtNDQuNy0xMS4yLTQ4LjYtMTEuNy00OC4xYy0yMi40LTMxLjMtOTAuMy0xNi44LTc3LjQsNDguMWMtMTMuMy0yLjQtMS44LDMxLjYsMy43LDMyLjEKCWMwLDAsMCwwLDAsMGMwLjIsMCwwLjMsMCwwLjUtMC4xYzE0LjQsNDkuNyw2Mi43LDUwLjIsODAuNywwQzE3Mi4zLDEyNy4zLDE4Ni41LDkzLjMsMTcyLjYsOTMuNHoiLz4KPHBhdGggZmlsbD0iIzdGOTZBNiIgZD0iTTIwNS40LDE3Ny45Yy0yNC02LjEtNDMuNS0xOS44LTQzLjUtMTkuOGwtMjAuNiw2NC44bC04LTIyLjhjMTkuNy0yNy41LTMwLjMtMjcuNS0xMC42LDBsLTgsMjIuOEw5NCwxNTguMQoJYzAsMC0xOS41LDEzLjctNDMuNSwxOS44QzMyLjcsMTgyLjUsMzAsMjU2LDMwLDI1NmgxOTZDMjI2LDI1NiwyMjMuMywxODIuNSwyMDUuNCwxNzcuOXoiLz4KPC9zdmc+Cg=="} alt="" data-image-width="355" data-image-height="355" />
                <h5 class="u-text u-text-default u-text-1">{user.name}</h5>
                <p class="u-small-text u-text u-text-default u-text-variant u-text-2">lastmessage</p>
              </div>
            </div>
        </div>
    )
}

export default User;