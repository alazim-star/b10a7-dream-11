import { useState, useEffect } from "react";

const AllPlayers = ({ selectPlayer, handleRemoveCredit }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./public/Player.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    return (
        <div className="grid mt-10 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((player) => {
                const { id, name, country, image_url, rating, batting_hand, price, speciality, bowling_hand } = player;
                return (
                    <div key={id} className="card bg-base-100 w-96 shadow-xl">
                        <figure className="h-48 overflow-hidden">
                            <img className="w-full h-full object-cover" src={image_url} alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <div className="flex justify-between">
                                <div>
                                    <p><i className="fas fa-flag mr-2"></i>{country}</p>
                                    <p>Rating:</p>
                                    <p>Batting hand:</p>
                                    <p>Bowling hand:</p>
                                    <p>Price: {price}</p>
                                </div>
                                <div>
                                    <p>{speciality}</p>
                                    <p>{rating}</p>
                                    <p>{batting_hand ? batting_hand : "N/A"}</p>
                                    <p>{bowling_hand ? bowling_hand : "N/A"}</p>
                                    <button 
                                        onClick={() => {
                                            selectPlayer(player);                 // Select the player
                                            handleRemoveCredit(price);     // Check and possibly reduce credit
                                        }} 
                                        className="btn"
                                    >
                                        Choose Player
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AllPlayers;
