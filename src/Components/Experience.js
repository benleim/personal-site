import React from 'react';
import './Experience.css';

class Experience extends React.Component {
    render() {
        return (
            <div className="Experience">
                <div className="Exp-Header">
                    <h3 className="Exp-TitleNum">02.</h3>
                    <h3 className="Exp-TitleText">Experience</h3>
                </div>
                <ul className="Exp-List">
                    <li className="Exp-List-Item Exp-List-Selected">Paymerang</li>
                    <li className="Exp-List-Item">Richweb</li>
                    <li className="Exp-List-Item">Impact Makers</li>
                    <li className="Exp-List-Item">Ben Leimberger LLC</li>
                </ul>
                <div className="Exp-DescContainer">
                    <h4 className="Exp-JobTitle">
                        <span>SWE Intern</span>
                        <span>
                        <span className="Exp-At"> @ </span>
                        <a className="Exp-JobLink">Paymerang</a>
                    </span>
                    </h4>
                    <h5 className="Exp-JobSubtitle">May 2019 - August 2019</h5>
                </div>
            </div>
        );
    }
}

export default Experience;