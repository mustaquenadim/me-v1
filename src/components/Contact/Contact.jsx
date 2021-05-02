import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_o1ajalh', 'template_57iayjb', e.target, 'user_2ndNs2fvzLORwxbB9H3D2')
        .then((result) => {
            console.log(result);
            alert('Your email has been sent successfully! Thank you!');
        }, (error) => {
            console.log(error);
        });
    }
    return (
        <div>
            <div style={{height: "100vh"}} className="banner d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-white">Contact</h1>
                    <form className="w-100 m-5" onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input type="text" className="form-control" name='fullName' placeholder="Full Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" name="email" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <textarea type="text" className="form-control" rows="5" name="message" placeholder='Message'></textarea>
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="w-100 btn btn-primary" value="Send Message" />
                    </form>
                </div>
            </div>
            {/* <div className="container py-5">
            <div className="m-auto bg-success p-3 rounded shadow">
                    <form onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input type="text" className="form-control" name='fullName' placeholder="Full Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" name="email" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <textarea type="text" className="form-control" rows="5" name="message" placeholder='Message'></textarea>
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="w-100 btn btn-primary" value="Send Message" />
                    </form>
                </div>
            </div> */}
        </div>
    );
};

export default Contact;