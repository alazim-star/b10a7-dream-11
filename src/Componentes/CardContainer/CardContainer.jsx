import React from 'react';
import Cart from "../Cart/Cart";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const CardContainer = ({ handleIsActiveState, isActive, AllPlayers, selectedPlayers, handleRemove,}) => {
    const selectedCountDisplay = `${selectedPlayers.length}/6`;

    
   //  player selection with a limit check
const selectPlayers = (player) => {
    const selectedCount = selectedPlayers.length; 

    if (selectedCount >= 6) {
        toast.error('You can only select up to 6 players.');
        return;
    }

    if (selectedPlayers.some((p) => p.name === player.id)) {
        toast.error('Player is already selected.');
        return;
    }

    // Add the new player to the selected players array
    setSelectedPlayers((prevSelectedPlayers) => [...prevSelectedPlayers, player]);
    toast.success('Player added successfully');
};


    return (
        <div>
            <div className="flex justify-end gap-5 mt-5">
                <h1 className="text-xl font-bold mr-[750px]">Available Player</h1>

                <div 
                    onClick={() => handleIsActiveState("cart")} 
                    className={`${isActive.cart ? "btn bg-[#d1e528]" : "btn"}`}
                >
                    Available
                </div>
                
                <div 
                    onClick={() => handleIsActiveState("about")} 
                    className={`${isActive.about ? "btn bg-[#d1e528]" : "btn"}`}
                >
                    Select ({selectedCountDisplay})
                </div>
            </div>

            {isActive.cart ? (
                <Cart AllPlayers={AllPlayers} selectPlayers={selectPlayers} />
            ) : (
                <div className="w-full rounded-xl border-2 p-4">
                    <h1 className="text-lg font-bold">Selected Players: {selectedCountDisplay}</h1>
              <div className="w-2/3 mt-5 space-y-5">
                        {selectedPlayers.length > 0 ? (
                            selectedPlayers.map((player) => (
                 <div 
                                    key={player.id} 
                          className="p-4 border rounded-lg flex items-center justify-between"
                                >
                                    <img 
                                        src={player.image_url} 
                                        alt={player.name} 
                                  className="w-16 h-16 rounded-xl mr-4"
                                    /> 
                                    
                                    <div className="flex-grow">
                                        <h2 className="text-md font-semibold">{player.name}</h2>
                                        <p>Batting Hand: {player.batting_hand || "N/A"}</p>
                                  <p>Bowling Hand: {player.bowling_hand || "N/A"}</p>
                                    </div>
                                    <button 
                                        onClick={() => handleRemove(player.id)} 
                                        className="btn text-red-600 text-xl ml-4"
                                        aria-label={`Remove ${player.name}`}
                     >
                   <RiDeleteBin6Line />
                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No players selected.</p>
                        )}
                    </div>
                    <div 
                onClick={() => handleIsActiveState("cart")} 
                className={`${isActive.cart ? "btn " : "bg-[#d1e528] btn "}`}
            >
                Add More Player
            </div>
            
                </div>
                
                
            )}

        </div>
    );
};

export default CardContainer;
