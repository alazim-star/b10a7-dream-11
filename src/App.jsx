import './App.css';
import Header from './Componentes/Header/Header';
import Banner from './Componentes/Banner/Banner';
import AllPlayers from './Componentes/AllPlayers/AllPlayer';
import Footer from './Componentes/Footer/Footer';
import Newsletter from './Componentes/Newsletter/Newsletter';
import { useState } from 'react';
import CardContainer from './Componentes/CardContainer/CardContainer';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'; 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Selected from './Componentes/selected/Selected';


function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  });
  const [addCredit, setAddCredit] = useState(0)

  const handleIsActiveState = (status) => {
    setIsActive({
      cart: status === "cart",
      status: status
    });
  };

  const handleAddCredit = () => {
    setAddCredit(prevCredit => prevCredit + 10000000)
  };

  // Insufficient balance alert 
  const handleRemoveCredit = (price) => {
    if (addCredit >= price) {
      setAddCredit(prevCredit => prevCredit - price)
      return true;
    } else {
      if (!toast.isActive("creditToast")) {
        toast.error("Insufficient credit to choose this player.", { toastId: "creditToast" })
      }
      return false;
    }
  };

  // Player already selected 
  const selectPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error('You can only select up to 6 players.')
      return;
    }

    const isExist = selectedPlayers.some((prevSelectedPlayer) => prevSelectedPlayer.id === player.id);
    if (isExist) {
      toast.error('Player already selected')
      return;
    }

    if (handleRemoveCredit(player.price)) {
      setSelectedPlayers((prevSelectedPlayers) => [...prevSelectedPlayers, player])
      toast.success(`Congrats!! ${player.name} is now in your squad`)
    }
  };

  // Handle player removal
  const handleRemove = (id) => {
    const updatedPlayers = selectedPlayers.filter((player) => player.id !== id)
    setSelectedPlayers(updatedPlayers);
  };

  // Variable to display selected players count
  const selectedCountDisplay = selectedPlayers.length

  return (
    <div className='container mx-auto px-4'>
      {/* Header */}
      <Header addCredit={addCredit} />
      {/* Banner */}
      <Banner handleAddCredit={handleAddCredit} addCredit={addCredit} />

      {/* Conditional rendering for Players or Selected list */}
      <CardContainer

        handleRemove={handleRemove}
        selectPlayer={selectPlayer}
        handleIsActiveState={handleIsActiveState}
        isActive={isActive}
        selectedPlayers={selectedPlayers}
      />

      {isActive.status === "AllPlayer" ? (
        <AllPlayers handleRemoveCredit={handleRemoveCredit} selectPlayer={selectPlayer} />
      ) : (
        <div className="w-full rounded-xl border-2 p-4">
          <h1 className="text-lg font-bold">Selected Players: {selectedCountDisplay}</h1>
          <div className="w-2/3 mt-5 space-y-5">
            {selectedPlayers.length > 0 ? (
              selectedPlayers.map((player) => (
                <div key={player.id} className="p-4 border rounded-lg flex items-center justify-between">
                  <img src={player.image_url} alt={player.name} className="w-16 h-16 rounded-xl mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-md font-semibold">{player.name}</h2>
                    <p>Batting Hand: {player.batting_hand || "N/A"}</p>
                    <p>Bowling Hand: {player.bowling_hand || "N/A"}</p>
                  </div>
                  <button onClick={() => handleRemove(player.id)} className="btn text-red-600 text-xl ml-4" aria-label={`Remove ${player.name}`}>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              ))
            ) : (
              <p>No players selected.</p>
            )}
          </div>
          <div onClick={() => handleIsActiveState("AllPlayer")} className="btn bg-[#d1e528] mt-5">
            Add More Players
          </div>
        </div>
      )}

      <Selected selectedPlayers={selectedPlayers} />
      <Newsletter />
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
    </div>
  )
}

export default App;
