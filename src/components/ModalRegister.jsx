import React from 'react'
import navBarSocials from './NavBarSocial'

const ModalRegister = ({activeID, setShowModals}) => {

  const navBarSocialR = navBarSocials(navBarSocialR => navBarSocialR.id === activeID)

  return (
    <div src={navBarSocialR} className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40'>
      <div className='w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5'>
        <div>
          <figure>
            <div >
              <span>Login</span>
              <div>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"/>
              </div>
              <div>
                <label for="pass">Password</label>
                <input type="password" id="pass" name="password" minlength="8" required/>
              </div>
              <div>
                <label for="pass">Repeat Password</label>
                <input type="password" id="pass" name="password" minlength="8" required/>
              </div>
              <div>
                <label for="pass">Email</label>
                <input type="password" id="pass" name="password" minlength="8" required/>
              </div>
                <button>Register Now</button>
            </div>
            <span>Have an account?</span>
            <a href="">Sign In</a>
          </figure>
        </div>
      </div>
    </div>
    
  )
}

export default ModalRegister