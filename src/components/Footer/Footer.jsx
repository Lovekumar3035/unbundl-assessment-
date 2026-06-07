import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main_div">

            <div className="footer_main">

                <div className="box1">
                    <h2>Quick Links</h2>

                    <ul className="link_list">
                        <li>Home</li>
                        <li>Book a Free Scan</li>
                        <li>How it Works</li>
                        <li>Range of Aligners</li>
                        <li>Aligners vs Braces</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="box2">
                    <h2>Get in Touch Now!</h2>

                    <p>📞 011-6932-8350</p>
                    <p>✉ support@whistle.in</p>
                </div>

                <div className="box3">
                    <h2>Follow us on</h2>

                    <div className="icon_box">
                        <span>📷</span>
                        <span>f</span>
                        <span>X</span>
                    </div>
                </div>

                <div className="box4">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>

            </div>

        </div>
    )
}

export default Footer