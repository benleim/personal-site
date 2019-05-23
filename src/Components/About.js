import React from 'react';
import './About.css';
import MePic from '../images/me.jpeg';

class About extends React.Component {
    render() {
        return (
            <div className="About">
                <div className="About-Header">
                    <h3 className="About-TitleNum">01.</h3>
                    <h3 className="About-TitleText">About Me</h3>
                </div>
                <p className="About-Desc">
                    Hey there, I'm Ben! I'm currently studying at the <a className="About-ImportantText">University of
                    Pennsylvania</a> in Philadelphia, PA. Outside of college, I enjoy playing guitar, lifting weights,
                    and developing mobile apps.

                </p>
                <img className="About-PicMe" src={MePic}></img>
                <p className="About-Desc">
                    For me, the beauty of creating web apps and mobile apps lies in the combination of design and
                    development. Each are equally important.
                </p>
                <p className="About-Desc">Recently, I've worked with:</p>
                <ul className="About-Techs">
                    <li>React</li>
                    <li>Vue</li>
                    <li>Polymer</li>
                    <li>Severless</li>
                    <li>AWS</li>
                    <li>Node.js</li>
                    <li>Swift</li>
                    <li>Firebase</li>
                    <li>CocoaPods</li>
                </ul>
            </div>
        );
    }
}

export default About;