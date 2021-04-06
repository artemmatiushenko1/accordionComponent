import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Data } from './Data';
import './Accordion.css';

function Accordion() {
    const [clicked, setClicked] = useState(false);

    const toogle = (index) => {
        if (clicked === index) {
            return setClicked(false);
        }

        setClicked(index);
    };

    console.log({ clicked, setClicked });

    return (
        <div className="Accordion">
            <div className="wrapper-accordion">
                {Data.map((item, index) => {
                    return (
                        <div
                            className={
                                'accordion-element' +
                                (clicked === index
                                    ? ' open-accordion-element'
                                    : '')
                            }
                        >
                            <h1
                                className={
                                    'question ' +
                                    (clicked === index ? 'question-active' : '')
                                }
                                onClick={() => toogle(index)}
                                key={index}
                            >
                                {item.question}
                                <span>
                                    <FaAngleDown
                                        className={
                                            'arrow-btn' +
                                            (clicked === index
                                                ? ' arrow-btn-active'
                                                : '')
                                        }
                                    ></FaAngleDown>
                                </span>
                            </h1>
                            <p
                                className={
                                    'answer' +
                                    (clicked === index ? ' open-answer' : '')
                                }
                            >
                                {item.answer}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Accordion;
