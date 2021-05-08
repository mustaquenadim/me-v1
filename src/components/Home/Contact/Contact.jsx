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
        <div id='Contact' className="container py-5">
            <h1 className="text-uppercase text-center fw-bold py-5">Contact Me</h1>
            <form className="w-100" onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-0" name='fullName' placeholder="Full Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control rounded-0" name="email" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-0" name="subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <textarea type="text" className="form-control rounded-0" rows="5" name="message" placeholder='Message'></textarea>
                        </div>
                    </div>
                </div>
                <input type="submit" className="w-100 btn btn-primary rounded-0" value="Send Message" />
            </form>
        </div>
    );
};

export default Contact;