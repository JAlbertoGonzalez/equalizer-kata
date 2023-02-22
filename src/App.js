import './App.scss';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div>
      <div className="abstract-background"></div>
      <main className="container md:mx-16">
        <header class="">
          <div><img src="images/logo.svg" /></div>
        </header>
        <section>
          <h1>We make your music sound extraordinary.</h1>
          <p>A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
        </section>
        <section className="relative my-32">
          <div className="bg-eerie-black rounded-lg flex content-center absolute w-full my-32 z-[-1]">
            <img src="images/background-logo.svg" className="mx-auto" />
          </div>

          <div>
            <div className="md:absolute t-0 left-[10%] w-full xs:border-solid sm:text-center md:text-left">
              <img src="images/mobile-example.svg" />
            </div>

            <Card className="bg-outrageous-orange text-snow max-w-[446px] md:absolute right-[10%] top-[300px] sm:mx-auto">
              <p>Premium EQ</p>
              <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
              <p className="text-[65px]">$4<span className="text-[20px]">/month</span></p>

              <Button
                className="bg-eerie-black text-snow w-full">iOS Download</Button>
              <div className="h-[16px]"></div>
              <Button
                className="bg-snow text-eerie-black w-full">Android Download</Button>
            </Card>
          </div>
        </section>

        <footer className="flex relative">
          <div><img src="images/logo.svg" /></div>
          <div>All rights reserved © Equalizer 2021 Have any problems? Contact us via social media or email us at <strong>equalizer@example.com</strong></div>
          <div>Social</div>
        </footer>
      </main>

    </div>
  );
}

export default App;
