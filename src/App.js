import React from 'react';
import Accordion from './components/Accordion';
import boxIllustration from './images/illustration-box-desktop.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="card">
                <div className="image-block">
                    <img
                        className="box-img-element"
                        src={boxIllustration}
                        alt="box-img"
                    ></img>
                </div>
                <div className="accordion-block">
                    <h1 className="accordion-block-headline">faq</h1>
                    <Accordion></Accordion>
                </div>
            </div>
        </div>
    );
}

export default App;
