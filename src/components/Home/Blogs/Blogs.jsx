import React from 'react';
import blog1 from '../../../assets/blog1.jpg';
import blog2 from '../../../assets/blog2.jpg';
import blog3 from '../../../assets/blog3.jpg';

const Blogs = () => {
    return (
        <div id='Blogs' className='container py-5'>
            <h1 className='text-uppercase text-center fw-bold py-5'>Blogs</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                <div className='col'>
                    <a
                        className='text-decoration-none text-dark'
                        href='https://mustaquenadim.medium.com/10-built-in-methods-you-should-know-when-switching-to-javascript-6b57f9ee5afa'
                        target='_blank'
                    >
                        <div className='card h-100'>
                            <img
                                src={blog1}
                                className='card-img-top'
                                alt='...'
                            />
                            <div className='card-body'>
                                <h4 className='card-title'>
                                    5 Built-in Methods you should know when
                                    switching to JavaScript
                                </h4>
                                <p className='card-text text-secondary'>
                                    JavaScript is the world’s most popular
                                    programming language which was invented by
                                    Brenden Eich while he was an engineer in
                                    Netscape. It’s a high-level language.
                                    Because this language is mostly softly
                                    coded. And...
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='col'>
                    <a
                        className='text-decoration-none text-dark'
                        href='https://mustaquenadim.medium.com/10-things-you-have-to-keep-in-mind-when-youre-a-javascript-developer-99d1470fa0e5'
                        target='_blank'
                    >
                        <div className='card h-100'>
                            <img
                                src={blog2}
                                className='card-img-top'
                                alt='...'
                            />
                            <div className='card-body'>
                                <h4 className='card-title'>
                                    10 Things you have to keep in mind when
                                    you’re a JavaScript Developer
                                </h4>
                                <p className='card-text text-secondary'>
                                    There’re 2 types of data types in
                                    javascript. Primitive Data Types: Numbers,
                                    strings, booleans, symbols and bigInts are
                                    primitive data types. These data types can
                                    contain...
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='col'>
                    <a
                        className='text-decoration-none text-dark'
                        href='https://mustaquenadim.medium.com/the-things-every-reactjs-developer-should-know-3e1c66eca0ae'
                        target='_blank'
                    >
                        <div className='card h-100'>
                            <img
                                src={blog3}
                                className='card-img-top'
                                alt='...'
                            />
                            <div className='card-body'>
                                <h4 className='card-title'>
                                    The Things every ReactJS Developer Should
                                    Know
                                </h4>
                                <p className='card-text text-secondary'>
                                    If you’re a ReactJS Developer or JavaScript
                                    Developer or you’re learning JavaScript
                                    language for web development, you must know
                                    certain things that will help you to give
                                    the best in your profession...
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

// https://i.ibb.co/Jc9fPrP/blog3.jpg
// https://i.ibb.co/FqYjMVB/blog2.jpg
// https://i.ibb.co/BnPC7z2/blog1.jpg
