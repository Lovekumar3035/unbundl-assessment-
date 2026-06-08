import React from 'react'
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="heroContainer">
            <header>
                <div className="navbar">
                    <div className="logo">
                        whistle
                        <span>AND SMILE</span>
                    </div>

                    <div className="callButton">📞</div>
                </div>

                <div className="offer">
                    Starting at <del>₹69,999</del> ₹47,999. Hurry! Offer ends soon.
                </div>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1>Invisible Aligners for a dream smile</h1>

                    <p>
                        Book a Scan and avail a free Orthodontist Consult
                        <span> worth ₹1500</span>
                    </p>
                </div>

                <div className="hero-image">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/050/817/792/small_2x/happy-smiling-business-woman-in-suit-with-hand-pointing-at-empty-space-standing-isolate-on-transparent-background-png.png"
                        alt="Smile"
                    />
                </div>
            </section>

            <section className="formSection">
                <h2>Do you have Teeth Gaps or Crooked Teeth?</h2>

                <div className="radioButtons">
                    <label>
                        <input type="radio" name="teeth" /> Yes
                    </label>

                    <label>
                        <input type="radio" name="teeth" /> No
                    </label>
                </div>

                <div className="form-row">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="+91 Mobile Number" />

                    <button>Book a Free Scan</button>
                </div>

                <div className="checkbox">
                    <input type="checkbox" />
                    <span>
                        I hereby consent to receive calls/messages from Whistle and its
                        partners.
                    </span>
                </div>
            </section>

            <section className="clinicBox">
                <div className="clinic-text">
                    Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental
                    Clinic near you.
                </div>

                <div className="clinicLinks">
                    <div className="clove-logo">clove:)</div>

                    <a href="/">Find Clinic ▼</a>
                </div>
            </section>
        </div>
    )
}

export default HeroSection