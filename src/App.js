import './App.scss';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div>
      <div className="abstract-background"></div>
      <main className="md:mx-32">
        <header className="h-32 flex">
          <div className="flex w-32"><img src="images/logo.svg" /></div>
        </header>
        <section className="hero md:w-[70%]">
          <h1>We make your music sound extraordinary.</h1>
          <p>A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
        </section>
        <section className="py-32">
          <div className="relative">
            <div className="w-full xs:border-solid float-left absolute top-[-128px]">
              <img src="images/mobile-example.svg" />
            </div>

            <Card className="bg-outrageous-orange text-snow max-w-[446px] absolute right-0 top-[128px] mx-8">
              <p>Premium EQ</p>
              <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
              <p className="text-[65px]">$4<span className="text-[20px]">/month</span></p>

              <Button
                icon={'apple'}
                className="bg-eerie-black text-snow w-full">iOS Download</Button>
              <div className="h-[16px]"></div>
              <Button
                icon={'android'}
                className="bg-snow text-eerie-black w-full">Android Download</Button>
            </Card>

            <div className="bg-eerie-black rounded-lg w-full my-32">
              <img src="images/background-logo.svg" className="mx-auto" />
            </div>

          </div>
        </section>

        <footer className="flex w-full content-center justify-center">
          <div className='flex'><img src="images/logo.svg" /></div>
          <div className="flex-grow mx-32">All rights reserved © Equalizer 2021<br />Have any problems? Contact us via social media or<br />email us at <strong>equalizer@example.com</strong></div>
          <div className="grid grid-cols-3 gap-2 justify-between self-center">
            <a href="#"><img src="images/facebook.svg" /></a>
            <a href="#"><img src="images/instagram.svg" /></a>
            <a href="#"><img src="images/twitter.svg" /></a>
          </div>
        </footer>
      </main>

    </div>
  );
}

export default App;
