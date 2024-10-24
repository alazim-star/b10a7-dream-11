import './App.css'
import Header from './Componentes/Header/Header'
import Banner from './Componentes/Banner/Banner';
import Available from './Componentes/Available Players/Available';
import AllPlayers from './Componentes/AllPlayers/AllPlayers';
import Footer from './Componentes/Footer/Footer';
function App() {
 

  return (
   
      <div className='container mx-auto px-4'>
      {/* Header*/}
      <Header></Header>
      {/* banner  */}
      <Banner></Banner>
      {/* Available Players section  */}
      <Available></Available>
      {/* image view section */}
      <AllPlayers></AllPlayers>

      {/* Subscribe to our Newsletter section */}


      {/* footer section  */}
      <Footer></Footer>




      </div>
  
  )
}

export default App
