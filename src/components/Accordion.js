import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Data } from './Data';
import './Accordion.css';

function Accordion() {
    return (
        <div className="Accordion">
            <div className="wrapper-accordion">
                {Data.map((item, index) => {
                    return (
                        <div className="accordion-element">
                            <h1 className="question">
                                {item.question}{' '}
                                <FaAngleDown className="arrow-btn"></FaAngleDown>
                            </h1>
                            <p className="answer">{item.answer}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Accordion;
