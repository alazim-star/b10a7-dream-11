

const CardContainer = ({ handleIsActiveState, isActive, selectedPlayers}) => {
  const selectedCountDisplay = `${selectedPlayers.length}/6`


  return (
    <div>
      <div className="flex justify-end gap-5 mt-5">
        <h1 className="text-xl font-bold mr-[750px]">Available Players</h1>

        <div 
          onClick={() => handleIsActiveState("AllPlayer")} 
          className={`${isActive.status === "AllPlayer" ? "btn bg-[#d1e528]" : "btn"}`}
        >
          Available
        </div>
        
        <div 
          onClick={() => handleIsActiveState("Selected")} 
          className={`${isActive.status === "Selected" ? "btn bg-[#d1e528]" : "btn"}`}
        >
          Select ({selectedCountDisplay})
        </div>
      </div>
   
    </div>
  )
}

export default CardContainer
