import React, { useEffect, useState } from 'react'
import "./WhyWhistle.css"

const WhyWhistle = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=4")
            .then(res => res.json())
            .then(data => {
                console.log("products data:", data)
                setCards(data.products);
            })
            .catch(() => {
                console.log("something went wrong");
            })
    }, [])


    return (
        <div>
            <section className="first_section">
                <h1>Why Whistle?</h1>

                <div className="cardsContainer">
                    {cards.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <hr />
                            <div className="cardContent">
                                <h3>{item.title}</h3>
                                <p>{item.description.slice(0, 80)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="second_section">

                <div className="main_box">

                    <div className="left_box">

                        <h2>The Whistle Difference</h2>

                        <div className="item_box">
                            <div className="icon">🦷</div>

                            <div className="text_box">
                                <h3>Next-Gen</h3>
                                <p>
                                    Crafted with top-notch 3D printing, laser tech
                                    and Zendura FLX material.
                                </p>
                            </div>
                        </div>

                        <div className="item_box">
                            <div className="icon">📈</div>

                            <div className="text_box">
                                <h3>Hassle-Free</h3>
                                <p>
                                    Predictable, comfortable & lifestyle-friendly
                                    for an easy smile transformation.
                                </p>
                            </div>
                        </div>

                        <div className="item_box">
                            <div className="icon">💰</div>

                            <div className="text_box">
                                <h3>Transparent Pricing</h3>
                                <p>
                                    Everything's included from scans to aligners,
                                    doctor consults and retainers.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="right_box">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800"
                            alt=""
                        />
                    </div>

                </div>

            </section>

        </div>
    )
}

export default WhyWhistle