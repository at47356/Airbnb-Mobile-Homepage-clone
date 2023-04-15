
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navb from './nav'
import Hero from './Hero'
import Card from './Card'
import data from './data'



function App() {
  const cards = data.map(card => {
    return <Card
      key={card.id} 
      {...card}
    />
  })

  return (
    <div className="App">
      <Navb/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
