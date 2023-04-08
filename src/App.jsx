
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navb from './nav'
import Hero from './Hero'
import Card from './Card'

function App() {
  return (
    <div className="App">
      <Navb/>
      <Hero/>
      <Card
        img="./katie-zaferes.png"
        rating="5.0"
        reviews={6}
        location="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
