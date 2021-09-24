import React, { Fragment } from 'react';
import './App.css';

import Calendar from './components/Calendar';

function App() {
  return (
    <Fragment>
      <section className="hero is-primary">
      <div class="box">
        <h2>Calendário</h2>        
        </div>
      </section>
      <div className="container has-text-centered">
        <Calendar />
      </div>
    </Fragment>
  );
}

export default App;
