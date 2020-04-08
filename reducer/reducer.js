import { v4 as uuidv4 } from 'uuid';


let reducer = (state, action) => {

    //check if state exists

    if (state === undefined) {
        state = {
            projects: [
                {
                    id: uuidv4(),
                    title: "Javascript",
                    category: 'Front-End'
                },
                {
                    id: uuidv4(),
                    title: "Node",
                    category: 'Back-End'
                },
                {
                    id: uuidv4(),
                    title: "React",
                    category: 'Front-End'
                }
            ]

        }
    }


    switch (action.type) {
        case 'addProject':
            return {
                ...state,
                projects:state.projects.concat(action.project)
            }

        case 'deleteProject':

            let updatedArray = state.projects.filter(projectObj => {
                return projectObj.id !== action.project.id

            })

            return {
                ...state,
                projects: updatedArray
            }

        default:
            return state;
    }

}

export default reducer