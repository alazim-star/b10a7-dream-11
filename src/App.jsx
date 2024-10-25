import './App.css';
import Header from './Componentes/Header/Header';
import Banner from './Componentes/Banner/Banner';
import AllPlayers from './Componentes/AllPlayers/AllPlayers';
import Footer from './Componentes/Footer/Footer';
import Newsletter from './Componentes/Newsletter/Newsletter';
import { useState } from 'react';
import SelectedPlayer from './Componentes/SelectedPlayer/SelectedPlayer';
import CardContainer from './Componentes/CardContainer/CardContainer';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';










function App() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isActive, setIsActive] = useState({
      cart: true,
      status: "cart"
  });
  const [addCredit, setAddCredit] = useState(0);

  const handleIsActiveState = (status) => {
      setIsActive({
          cart: status === "cart",
          status: status
      });
  };

  const handleAddCredit = () => {
      setAddCredit(prevCredit => prevCredit + 10000000);
  };










 
  // Insufficient balance alart 

  const handleRemoveCredit = (price) => {
    if (addCredit >= price) {
        setAddCredit(prevCredit => prevCredit - price);
        return true; 
    } else {
        if (!toast.isActive("creditToast")) {  
            toast.error("Insufficient credit to choose this player.", { toastId: "creditToast" });
        }
        return false;
    }
};


// Player already selected 

  const selectPlayer = (player) => {
      const isExist = selectedPlayers.some((prevSelectedPlayer) => prevSelectedPlayer.id === player.id);
      if (isExist) {
          toast.error('Player already selected');
          return; 
      }

// choose gratings alert
      if (handleRemoveCredit(player.price)) {  
          setSelectedPlayers((prevSelectedPlayers) => [...prevSelectedPlayers, player]);
          toast.success(`Congrats!! ${player.name} is now your squad`);
      }
  };



 














// delete button work 
  const handleRemove = (id) => {
      const updatedPlayers = selectedPlayers.filter((player) => player.id !== id);
      setSelectedPlayers(updatedPlayers);
  };

    return (
        <div className='container mx-auto px-4'>
            {/* Header */}
            <Header addCredit={addCredit} />
            {/* Banner */}
            <Banner handleAddCredit={handleAddCredit} addCredit={addCredit} />
            {/* Available Players section */}
            <CardContainer handleIsActiveState={handleIsActiveState} isActive={isActive} selectedPlayers={selectedPlayers} handleRemove={handleRemove} />
            {/* <SelectedPlayer  handleRemove={handleRemove} selectedPlayers={selectedPlayers} /> */}
            {/* Image view section */}
            <AllPlayers handleRemoveCredit={handleRemoveCredit} selectPlayer={selectPlayer} />
            {/* Subscribe to our Newsletter section */}
            <Newsletter />
            {/* Footer section */}
            <Footer />
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} /> {/* Add ToastContainer */}
        </div>
    );
}

export default App;
