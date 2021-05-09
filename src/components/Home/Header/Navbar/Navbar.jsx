import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navStyle, setNavStyle] = useState({
        backgroundColor: 'transparent',
    });
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                setNavStyle({ backgroundColor: '#0c243f', transition: '0.7s' });
            } else {
                setNavStyle({ backgroundColor: 'transparent' });
            }
        };
    }, []);
    return (
        <nav
            style={navStyle}
            className='navbar navbar-expand-lg navbar-dark fixed-top'
        >
            <div className='container'>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav m-auto text-center'>
                        <li className='nav-item px-2'>
                            <a
                                className='nav-link active'
                                aria-current='page'
                                href='#Home'
                            >
                                Home
                            </a>
                        </li>
                        <li className='nav-item px-2'>
                            <a className='nav-link' href='#AboutMe'>
                                About Me
                            </a>
                        </li>
                        <li className='nav-item px-2'>
                            <a className='nav-link' href='#Skills'>
                                Skills
                            </a>
                        </li>
                        <li className='nav-item px-2'>
                            <a className='nav-link' href='#Projects'>
                                Projects
                            </a>
                        </li>
                        <li className='nav-item px-2'>
                            <a className='nav-link' href='#Blogs'>
                                Blogs
                            </a>
                        </li>
                        {/* <li className='nav-item px-2'>
                            <a className='nav-link' href='#Services'>
                                Services
                            </a>
                        </li> */}
                        <li className='nav-item px-2'>
                            <a className='nav-link' href='#Contact'>
                                Contact
                            </a>
                        </li>
                        <li className='nav-item px-2'>
                            <a
                                href='https://drive.google.com/u/0/uc?id=1WP9oYYRPF3d589Wl7bXrHwnJeiX1fKy2&export=download'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <button className='btn btn-danger rounded-0 m-1 px-4'>
                                    Resume
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
