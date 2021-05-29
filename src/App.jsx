import './styles/main.scss';
import React from 'react';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import Variants from './components/Variants/Variants';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Description />
        </section>
        <section>
          <Variants />
        </section>
        <section>
          <Information />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
