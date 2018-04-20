export class ListController {

    constructor(projectService) {
       
        this.projects = projectService.listProjects();
    }
}

ListController.$inject = ['projectService'];

//  class ProjectsAddController {

//     constructor(projectService, $state) {
//         this.projectService = projectService;
//         this.$state = $state;
//     }

//     addProject() {
//         let vm = {
//             project: this.projectToCreate,
//             userId: 1
//         };
//         console.log("from listContorller", vm);
//         this.projectService.save(vm).then(
//             () => this.$state.go('home')
//         );
//     }
// }

//ProjectsAddController.$inject = ['projectService', '$state'];

export class ProjectsEditController {

    constructor(projectService, $state, $stateParams) {
        this.projectToEdit = projectService.getProject($stateParams['id']);
        this.$state = $state;
        this.projectService = projectService;
    }

    editProject() {
        this.projectService.save(this.projectToEdit).then(
            () => this.$state.go('home')
        );
    }

}

ProjectsEditController.$inject = ['projectService', '$state', '$stateParams'];

export class ProjectsDeleteController {

    constructor(projectService, $state, $stateParams) {
        this.projectToDelete = projectService.getProject($stateParams['id']);
        this.$state = $state;
        this.projectService = projectService;
    }

    deleteProject() {
        this.projectService.deleteProject(this.projectToDelete.id).then(
            () => this.$state.go('home')
        );
    }

}

ProjectsDeleteController.$inject = ['projectService', '$state', '$stateParams'];