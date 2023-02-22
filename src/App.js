import './App.scss';
import Content from './views/Content';
import Footer from './views/Footer';

import Header from './views/Header'
import Hero from './views/Hero'

function App() {
  return (
    <div>
      <div className="abstract-background"></div>
      <main className="md:mx-32">
        <Header />
        <Hero />
        <Content />
        <Footer />
      </main>

    </div>
  );
}

export default App;
