import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
// import { connect } from 'react-redux';
// import addProject from '.../action/addProject'; 

import { Form, Col } from 'react-bootstrap'


class AddProject extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     projectId: '',
        //     projectTitle: '',
        //     projectCategory: '',

        //     project: [
        //         {
        //             projectId: '2',
        //             projectTitle: 'PostgreSQL',
        //             projectCategory: 'back-end'
        //         }
        //     ]

        // }

    }

    // projectTitleChangeHandler = (e) => {
    //     this.setState({
    //         projectTitle: e.target.value
    //     })
    // }

    // projectCategoryChangeHandler = (e) => {
    //     this.setState({
    //         projectCategory:e.target.value
    //     })
      
    // }
    



    handleSubmit = (e) => {

        // console.log(this.refs.title.value);

        // console.log(this.refs.category.value)

        e.preventDefault();

        this.props.onAddProject({
            id: uuidv4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        })

        // this.setState({
        //     projectId: '',
        //     projectTitle: '',
        //     projectCategory: '',
        // })
    }


    render() {
        return (
            <>

                <h3>Add Project</h3>

                <form onSubmit={this.handleSubmit}>

                    <div>

                        <Form.Group>
                            <Form.Row>

                                <Col>
                                    <Form.Control size="lg" ref="title" type="text" placeholder="Title"/>
                                </Col>
                            </Form.Row>
                            <br />

                        </Form.Group>
                    </div>


                    <div>

                        <Form>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label >Category</Form.Label>
                                <Form.Control as="select" size="lg" custom ref="category" >
                                    <option value="Front-End">Front-End</option>
                                    <option value="Back-End">Back-End</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>

                    </div>

                    <input className="buttonStyle" type="submit" value="submit" />
                </form>
            </>
        );
    }
}


// let mapStateToProps = (state) => {
//     return {
//         projects: state.projects
//     }

// }

// let mapDispatchToProps = (dispatch) => {

//     return {
//         onAddproject: (projects) => dispatch(addProject(projects))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddProject)

export default AddProject
