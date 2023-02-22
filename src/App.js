import './App.scss';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <main>
        <header class="">Hola</header>
        <section>
          <h1>We make your music sound extraordinary.</h1>
          <p>A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
        </section>
        <section>
          <div className="bg-eerie-black rounded-lg flex content-center">
            <img src="/images/background-logo.svg" />
          </div>
          <div><img src="/images/mobile-example.svg" /></div>
          <Card className="bg-outrageous-orange text-snow max-w-[446px]">
            <p>Premium EQ</p>
            <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
            <p className="text-[65px]">$4<span className="text-[20px]">/month</span></p>

            <Button
              className="bg-eerie-black text-snow w-full">iOS Download</Button>
            <div className="h-[16px]"></div>
            <Button
              className="bg-snow text-eerie-black w-full">Android Download</Button>
          </Card>
        </section>
        <footer>
          <div></div>
          <div>All rights reserved © Equalizer 2021 Have any problems? Contact us via social media or email us at <strong>equalizer@example.com</strong></div>
          <div></div>
        </footer>
      </main>
    </div>
  );
}

export default App;
