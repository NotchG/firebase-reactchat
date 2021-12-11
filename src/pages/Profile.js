import React, {useState, useEffect} from "react";
import { storage, db, auth } from "../firebase";
import {ref, getDownloadURL, uploadBytes, deleteObject} from 'firebase/storage'
import {getDoc, doc, updateDoc} from 'firebase/firestore'
import '../css/nicepage.css'

const Profile = () => {
    const [image, setImage] = useState('');
    const [user, setUser] = useState();

    useEffect(() => {
        getDoc(doc(db, 'users', auth.currentUser.uid)).then(docSnap => {
            if(docSnap.exists) {
                try{
                    console.log(docSnap.data())
                    setUser(docSnap.data())
                } catch (e) {
                    alert(e.message)
                }
                //setUser(docSnap.data())
            }
        })
        if (image) {
            const uploadImg = async () => {
                const imgRef = ref(storage, `avatar/${new Date().getTime()} - ${image.name}`)
                try {
                if (user.avatarPath) {
                    await deleteObject(ref(storage, user.avatarPath))
                }
                const snap = await uploadBytes(imgRef, image)
                const url = await getDownloadURL(ref(storage, snap.ref.fullPath))

                await updateDoc(doc(db, 'users', auth.currentUser.uid), {
                    avatar: url,
                    avatarPath: snap.ref.fullPath,
                })
                setImage('')
                } catch (e) {
                    alert(e.message)
                }
            }
            uploadImg()
        }
    }, [])

    return user ? (
        <div>
            <style>{`
            .u-section-1 .u-sheet-1 {
                min-height: 540px;
              }
              
              .u-section-1 .u-layout-wrap-1 {
                margin: 60px auto 60px 0;
              }
              
              .u-section-1 .u-layout-cell-1 {
                min-height: 420px;
              }
              
              .u-section-1 .u-container-layout-1 {
                padding: 0 30px;
              }
              
              .u-section-1 .u-image-1 {
                width: 300px;
                height: 300px;
                background-image: url(${user.avatar || "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJtYW4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBzdHlsZT0id2lkdGg6IDI1NnB4OyBoZWlnaHQ6IDI1NnB4OyI+CjxyZWN0IGZpbGw9IiNDNkQ4RTEiIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2Ii8+CjxwYXRoIGZpbGw9IiM3Rjk2QTYiIGQ9Ik0xNzIuNiw5My40YzExLjYtNDQuNy0xMS4yLTQ4LjYtMTEuNy00OC4xYy0yMi40LTMxLjMtOTAuMy0xNi44LTc3LjQsNDguMWMtMTMuMy0yLjQtMS44LDMxLjYsMy43LDMyLjEKCWMwLDAsMCwwLDAsMGMwLjIsMCwwLjMsMCwwLjUtMC4xYzE0LjQsNDkuNyw2Mi43LDUwLjIsODAuNywwQzE3Mi4zLDEyNy4zLDE4Ni41LDkzLjMsMTcyLjYsOTMuNHoiLz4KPHBhdGggZmlsbD0iIzdGOTZBNiIgZD0iTTIwNS40LDE3Ny45Yy0yNC02LjEtNDMuNS0xOS44LTQzLjUtMTkuOGwtMjAuNiw2NC44bC04LTIyLjhjMTkuNy0yNy41LTMwLjMtMjcuNS0xMC42LDBsLTgsMjIuOEw5NCwxNTguMQoJYzAsMC0xOS41LDEzLjctNDMuNSwxOS44QzMyLjcsMTgyLjUsMzAsMjU2LDMwLDI1NmgxOTZDMjI2LDI1NiwyMjMuMywxODIuNSwyMDUuNCwxNzcuOXoiLz4KPC9zdmc+Cg=="});
                background-position: 50% 50%;
                margin: 60px auto 0;
              }
              
              .u-section-1 .u-btn-1 {
                border-style: none;
                font-weight: 700;
                text-transform: uppercase;
                font-size: 0.875rem;
                letter-spacing: 1px;
                background-image: none;
                margin: 27px auto -9px;
              }
              
              .u-section-1 .u-layout-cell-2 {
                min-height: 420px;
              }
              
              .u-section-1 .u-container-layout-2 {
                padding: 30px;
              }
              
              .u-section-1 .u-text-1 {
                margin: 68px auto 0 0;
              }
              
              .u-section-1 .u-text-2 {
                text-align: left;
                margin: 20px 0 0;
              }
              
              .u-section-1 .u-text-3 {
                margin: 15px 0 0;
              }
              
              @media (max-width: 1199px) {
                .u-section-1 .u-sheet-1 {
                  min-height: 26px;
                }
              
                .u-section-1 .u-layout-wrap-1 {
                  margin-right: initial;
                  margin-left: initial;
                }
              
                .u-section-1 .u-layout-cell-1 {
                  min-height: 346px;
                }
              
                .u-section-1 .u-layout-cell-2 {
                  min-height: 346px;
                }
              }
              
              @media (max-width: 991px) {
                .u-section-1 .u-layout-cell-1 {
                  min-height: 100px;
                }
              
                .u-section-1 .u-image-1 {
                  width: 216px;
                  height: 216px;
                }
              
                .u-section-1 .u-layout-cell-2 {
                  min-height: 100px;
                }
              }
              
              @media (max-width: 767px) {
                .u-section-1 .u-container-layout-1 {
                  padding-left: 10px;
                  padding-right: 10px;
                }
              
                .u-section-1 .u-container-layout-2 {
                  padding-left: 10px;
                  padding-right: 10px;
                }
              }
              
              @media (max-width: 575px) {
                .u-section-1 .u-text-1 {
                  width: auto;
                }
              }
            `}</style>
        <section className="u-clearfix u-section-1" id="sec-588d">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-left-cell u-size-23 u-layout-cell-1">
                <div className="u-container-layout u-container-layout-1">
                  <div alt="" className="u-image u-image-circle u-image-1" src="" data-image-width="256" data-image-height="256"></div>
                  <label for="photo" className="u-label">
                  <div className="u-border-none u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-dark-3 u-radius-50 u-btn-1">Upload Image<br />
                  </div>
                  </label>
                  <input type='file' accept='image/*' style={{display:'none'}} id='photo' onChange={e => setImage(e.target.files[0])}/>
                </div>
              </div>
              <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-37 u-layout-cell-2">
                <div className="u-container-layout u-valign-top-xs u-container-layout-2">
                  <h2 className="u-text u-text-default u-text-1">{user.name}</h2>
                  <p className="u-text u-text-2">Email: {user.email}</p>
                  <p className="u-text u-text-3">Created at: {user.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    ) :
    null
}

export default Profile;