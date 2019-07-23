import React from 'react';
import './About.css';
import MePic from '../images/me.jpeg';

class About extends React.Component {
    render() {
        return (
            <div className="About" ref={ (divElement) => this.divElement = divElement}>
                <div className="About-Header">
                    <h3 className="About-TitleNum">01.</h3>
                    <h3 className="About-TitleText">About Me</h3>
                </div>
                <p className="About-Desc">
                    Hey there, I'm Ben! I'm currently studying at the <a className="About-ImportantText">University of
                    Pennsylvania</a> in Philadelphia, PA. I'm an entrepreneur, software engineer, and designer. The
                    intersection of technology & business is a passion of mine.

                </p>
                <img className="About-PicMe" src={MePic}></img>
                <p className="About-Desc">
                    Outside of college, I enjoy playing guitar, powerlifting, meditating, and reading.
                </p>
                <p className="About-Desc">Recently, I've worked with:</p>
                <ul className="About-Techs">
                    <li>React</li>
                    <li>Vue</li>
                    <li>Polymer</li>
                    <li>AWS</li>
                    <li>Serverless</li>
                    <li>Node.js</li>
                    <li>Swift</li>
                    <li>Firebase</li>
                    <li>YAML</li>
                </ul>
            </div>
        );
    }
}

export default About;