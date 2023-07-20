import React, { useRef, useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';

const navBarSocial = { id: 'social' };
const navBarSocialR = { id: 'socials' };

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  const [activeID, setActiveID] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () =>
      window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'deutsch', label: 'Deutsch' }
  ];

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className='w-full h-20 flex items-center bg-primaryColor'
    >
      <div className='container flex'>
        <div className='header-left flex-grow flex items-center'>
          <i className='fa-solid fa-phone text-white ml-4 text-2xl'></i>
          <span className='phone text-2xl mr-2 text-white'>
            123-456-7890
          </span>
          <span className='text-base text-white'>
            support@laboom.com
          </span>
        </div>
        <div className='header-right ml-auto flex items-center'>
          <div className='social-media-icons flex gap-2'>
            <a href='#' className='social-icon'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fa-brands fa-google-plus-g'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fa-brands fa-dribbble'></i>
            </a>
            <a href='#' className='social-icon'>
              <i className='fa-brands fa-pinterest-p'></i>
            </a>
          </div>
          <div className='login-wrap ml-4'>
            <Dropdown
              options={languageOptions}
              className='dropdown'
              controlClassName='dropdown-control'
              menuClassName='dropdown-menu'
              placeholder='Language'
            />
          </div>
        </div>
        <div className='mobile-menu ml-auto' onClick={toggleMobileMenu}>
          <i className='fa-solid fa-bars text-white text-2xl'></i>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='mobile-menu-dropdown'>
          <ul className='flex flex-col items-center text-white'>
            <li>
              <i className='fa-solid fa-user mx-2'></i>
              <a
                onClick={() => showModalHandler(navBarSocial.id)}
                className='font-semibold text-white'
                href='#portfolio'
              >
                Login
              </a>
            </li>
            <li>
              <i className='fa-solid fa-lock mx-2'></i>
              <a
                onClick={() => showModalHandler(navBarSocialR.id)}
                className='font-semibold text-white'
                href='#contact'
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
      {showModal && (
        <ModalLogin setShowModal={setShowModal} activeID={activeID} />
      )}
      {showModals && (
        <ModalRegister setShowModals={setShowModals} activeID={activeID} />
      )}
    </header>
  );
};

export default Header;
