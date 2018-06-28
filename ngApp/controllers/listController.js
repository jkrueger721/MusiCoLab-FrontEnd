export class ListController {

    constructor(projectService) {
       
        this.projects = projectService.listProjects();
    }
}

ListController.$inject = ['projectService'];


export class ProjectsEditController {

    constructor(projectService, $state, $stateParams) {
        this.projectToEdit = projectService.getProject($stateParams['id']);
        this.$state = $state;
        this.projectService = projectService;
    }

    editProject() {
        this.projectService.edit(this.projectToEdit.id).then(
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