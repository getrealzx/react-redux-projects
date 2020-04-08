import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
// import { connect } from 'react-redux';
// import deleteProject from '.../actions/deleteProject';


class Project extends React.Component {
    // constructor(props) {
    //     super(props);

    // }




    render() {

        let projectItem = this.props.projects.map((projectObj) => {

            return <ProjectItem project={projectObj} onDelete={this.props.onDelete} key={projectObj.id} />
        })
        return (

            <ul>
                {projectItem}
            </ul>

        );
    }
}


// let mapStateToProps = (state) => {
//     return {
//         projects: state.projects

//     }

// }

// //mapDispatchToProps
// let mapDispatchToProps = (dispatch) => {
//     return {
//         onDelete: (id) => dispatch(deleteProject(id))

//     }

// }




// export default connect(mapStateToProps, mapDispatchToProps)(Project)

export default Project