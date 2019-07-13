import React from 'react';
import './Projects.css';
import 'font-awesome/css/font-awesome.css';
import MvmtPic2 from '../images/MovementHome.png';
import MvmtPic from '../images/MovementSignIn.png';
import MillionePic from '../images/MillioneHome.png';
import MillionePic2 from '../images/MillioneGraph.png';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: 'Movement',
                    desc: 'A mobile app for organizing political, economic, and social movements. Create a movement, run ' +
                          'tactics, and post your thoughts. Features a home feed based on a custom hot ranking system. ' +
                           'Follow movements you care about and find others nearby.',
                    pic1: MvmtPic,
                    pic2: MvmtPic2,
                    skills: ['Firebase', 'Swift', 'Severless', 'Illustrator']
                },
                {
                    title: 'Millione',
                    desc: 'A personal finance mobile app to encourage saving and investing. User inputs basic finance ' +
                          'information and plans out the track to becoming a Millionaire. The app is filled with various ' +
                          'animations. Served as an exercise in UI and UX design.',
                    pic1: MillionePic,
                    pic2: MillionePic2,
                    skills: ['Swift', 'Illustrator']
                }
            ],
            otherProjects: [
                {
                    title: 'Timetracker',
                    desc: 'A React app for tracking employee time and daily planning.',
                    skills: ['React', 'Bootstrap']
                },
                {
                    title: 'Ticket Market',
                    desc: 'A platform to serve as a secondary market for party ticket sales.',
                    skills: ['Django']
                },
                {
                    title: 'Conformity',
                    desc: 'Mobile app for solving and explaining basic math equations.',
                    skills: ['Swift']
                }
            ]
        }
    }

    render() {
        return (
            <div className="Projects">
                <div className="Proj-Header">
                    <h3 className="Proj-TitleNum">03.</h3>
                    <h3 className="Proj-TitleText">Projects</h3>
                </div>
                <div className="Proj-FeatContainer">
                    {this.state.projects.map((object, i) => {
                        return (<div className="Proj-Container"
                                     id={(i === 0) ? "FirstProj" : ""}>
                                    <div className={(i % 2 === 1) ? "Proj-DataDiv2" : "Proj-DataDiv"}>
                                        <h4 className={(i % 2 === 1) ? "Proj-FeatTitle2" : "Proj-FeatTitle"}>Featured Project</h4>
                                        <h5 className={(i % 2 === 1) ? "Proj-FeatPTitle2" : "Proj-FeatPTitle"}>{object.title}</h5>
                                        <div className={(i % 2 === 1) ? "Proj-DescDiv2" : "Proj-DescDiv"}>
                                            {object.desc}
                                        </div>
                                        <div>
                                            <ul className={(i % 2 === 1) ? "Proj-SkillList2" : "Proj-SkillList"}>
                                                {this.state.projects[i].skills.map((skill, j) => {
                                                    return <li className={(i % 2 === 1) ? "Proj-SkillListItem2" : "Proj-SkillListItem"}>{this.state.projects[i].skills[j]}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={(i % 2 === 1) ? "Proj-PicDiv2" : "Proj-PicDiv"}>
                                        <img className="Proj-Pic" src={object.pic1}></img>
                                        <img className="Proj-Pic" src={object.pic2}></img>
                                    </div>
                                </div>);
                    })}
                </div>
                <h4 className="Proj-OtherProjTitle">Other Projects</h4>
                <div className="Proj-ProjContainer">
                    {this.state.otherProjects.map((object, i) => {
                        return (<div className="Proj-OtherProjContainer">
                                    <i className="fa-tool"></i>
                                    <p className="Proj-OtherTitle">{object.title}</p>
                                    <p className="Proj-OtherDesc">{object.desc}</p>
                                </div>)
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;