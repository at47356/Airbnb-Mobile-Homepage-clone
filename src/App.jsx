
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
      title = {card.title}
      price = {card.price}
      img = {card.coverImg}
      rating = {card.stats.rating}
      reviews = {card.stats.reviewCount}
      location = {card.location}
    />
  })

  return (
    <div className="App">
      <Navb/>
      <Hero/>
      {cards}
    </div>
  )
}

export default App
