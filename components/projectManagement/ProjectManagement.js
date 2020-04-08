import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Project from './Project';
import AddProject from './AddProject';
import './styles.css'
// import ProjectItem from './ProjectItem';
import { connect } from 'react-redux';
import addProject from '../../actions/addProject';
import deleteProject from '../../actions/deleteProject';


class ProjectManagement extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         projects: []
    //     }
    // }

    // componentWillMount() {

    //     this.setState({
    //         projects: [
    //             {
    //                 id: uuidv4(),
    //                 title: "Javascript",
    //                 category: 'Front-End'
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: "Node",
    //                 category: 'Back-End'
    //             },
    //             {
    //                 id: uuidv4(),
    //                 title: "React",
    //                 category: 'Front-End'
    //             }
    //         ]
    //     })
    // }

    handleAddProject = (newProject) => {

        // let oldProjects = [...this.state.projects];
        // oldProjects.push(newProject);

        // this.setState({
        //     projects: oldProjects
        // })

        this.props.onAddProject(newProject)

    }


    handleDeleteProject = (id) => {

        // let filteredProjects = [...this.state.projects];

        // let index = filteredProjects.findIndex(pObj => pObj.id === id)

        // filteredProjects.splice(index, 1)

        // this.setState({
        //     projects: filteredProjects
        // })
        this.props.onDeleteProject(id)
    }


    render() {
        return (
            <div className="project rounded shadow">

                <AddProject addProject={(project) => { this.handleAddProject(project) }} />

                <br /><br />
                <Project projects={this.state.proj} onDelete={(id) => { this.handleDeleteProject(id) }} />
                <br/>

                {this.props.proj}


            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        proj: state.projects

    }

}

//mapDispatchToProps
let mapDispatchToProps = (dispatch) => {
    return {
        onAddProject: (project)=> dispatch(addProject(project)),
        onDeleteProject: (id) => dispatch(deleteProject(id))

    }

}




export default connect(mapStateToProps, mapDispatchToProps)(ProjectManagement)