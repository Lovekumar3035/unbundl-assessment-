import React from "react";
import "./HappySmilers.css";

const smileData = [
    {
        id: 1,
        name: "Ananya",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
        id: 2,
        name: "Priya",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
    {
        id: 3,
        name: "Riya",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    },
    {
        id: 4,
        name: "Rahul",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
        id: 5,
        name: "Neha",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
    },
];

const HappySmilers = () => {
    return (
        <section className="happy_section">
            <h2>Happy Smilers!</h2>

            <div className="cards_box">
                {smileData.map((item) => (
                    <div className="cards" key={item.id}>
                        <div className="logo_text">whistle</div>

                        <img src={item.image} alt={item.name} />

                        <h3>{item.name}</h3>

                        <p>BY WHISTLE</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HappySmilers;