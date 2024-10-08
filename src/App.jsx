import ButtonGradient from './assets/svg/ButtonGradient'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benifits } from './components/Benifits'
import { Collaboration } from './components/Collaboration'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { Roadmap } from './components/Roadmap'
import { Footer } from './components/Footer'

const App = () => {

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello World!</h1>

      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benifits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )

}

export default App
