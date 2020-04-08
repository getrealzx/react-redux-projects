import { v4 as uuidv4 } from 'uuid';

let addProject = (project) => {

    return {
        type: 'addProject',
        project: project

    }

}

export default addProject