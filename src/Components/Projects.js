import React from 'react';
import './Projects.css';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: 'Movement',
                    desc: 'A mobile app for organizing political, economic, and social movements. Create a movement, run ' +
                          'tactics, and post your thoughts. Features a home feed based on a custom hot ranking system. ' +
                           'Follow movements you care about and find others nearby.'
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
                    {this.state.projects.map(function(object, i){
                        return([<div>
                                    <h4 className="Proj-FeatTitle">Featured Project</h4>
                                    <h5 className="Proj-FeatPTitle">{object.title}</h5>
                                    <div className="Proj-DescDiv">
                                        {object.desc}
                                    </div>
                                    <image></image>
                                </div>
                        ]);
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;