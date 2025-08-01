
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import Card2 from "./Components/Card2"
import items from "./Components/Array"
import Section from "./Components/Section"
import SectionProducts from './Components/SectionProducts';
import Pet from "./Components/Pet"
import contents from "./Components/Arrays"
import LastSec from "./Components/LastSec"
import FinalSec from "./Components/FinalSec"
import Footer from "./Components/Footer"

function App() {
  const animals = [
    {
      id: 1,
      src: "card/Dog1.avif",
      text: "Dog"
    },
    {
      id: 2,
      src: "card/cat.avif",
      text: "Cat"
    },
    {
      id: 3,
      src: "card/pet_parent.avif",
      text: "Pet Parent"
    },
    {
      id: 4,
      src: "card/horse.avif",
      text: "Horse"
    },
    {
      id: 5,
      src: "card/bird.avif",
      text: "Wild Bird"
    },
    {
      id: 6,
      src: "card/hen.avif",
      text: "Chicken"
    },
    {
      id: 7,
      src: "card/wildcat.avif",
      text: "WildLife"
    }
  ]



  return (
    <>

      <Header />
      <div className="w-full text-center py-3 shadow-md font-bold" >
        <p>$20 eGift card $49+ on 1st order* use WELCOME</p>
      </div>
      <div className="px-8">
        <Hero />
        <div>
          <p className="text-2xl font-bold mt-11">Who are you shopping for today?</p>
        </div>
        <div className="flex gap-4">
          {animals.map(animal => (<Card key={animal.id} src={animal.src} text={animal.text} />))}
        </div >
        <div >
          <div className="text-2xl font-bold mt-11">
             <p>Explore popular categories</p>
          </div>
         
          <div className="flex justify-between">
            {items.map((item) => (<Card2 key={item.id} src={item.src} text={item.text} />))}
          </div>
        </div>
        <div className="mt-11 ">
           <Section/>
        </div>
        <div>
           <SectionProducts />
        </div>
        <div  className="text-2xl font-bold mt-11">
          <p>Pet parenting made easy</p>
        </div>
        <div className="flex gap-7 mt-3">
            {contents.map((content)=> (<Pet key={content.id} src={content.src} text={content.text} />))}
        </div>
      </div>
      <LastSec/>
      <FinalSec/>
      <Footer/>
    </>
  )
}

export default App
