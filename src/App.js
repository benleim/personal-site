import React from 'react';
import './App.css';
import Navigation from './Components/Navigation.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Experience from './Components/Experience.js'
import Projects from './Components/Projects.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Home">
                <Navigation home={this.state.home}
                            about={this.state.about}
                            experience={this.state.experience}
                            project={this.state.project}/>
                <Home ref={h => !this.state.home && this.setState({ home: h })}/>
                <About ref={a => !this.state.about && this.setState({ about: a })}/>
                <Experience ref={e => !this.state.experience && this.setState({ experience: e })}/>
                <Projects ref={p => !this.state.project && this.setState({ project: p })}/>
            </div>
        );
    }
}

export default App;
