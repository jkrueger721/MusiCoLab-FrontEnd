export class ListController {

    constructor(projectService) {
       
        this.projects = projectService.listProjects();
    }
}

ListController.$inject = ['projectService'];


export class ProjectsEditController {

    constructor(projectService, $state, $stateParams) {
        projectService.getProject($stateParams['id'])
            .then(project => this.projectToEdit = project);
        this.$state = $state;
        this.projectService = projectService;
    }

    editProject() {
        console.log("Got to EditProject. Id: " + this.projectToEdit.id);
        this.projectService.edit(this.projectToEdit.id, this.projectToEdit).then(
            () => this.$state.go('home')
        );
    }

}

ProjectsEditController.$inject = ['projectService', '$state', '$stateParams'];

export class ProjectsDeleteController {

    constructor(projectService, $state, $stateParams) {
        projectService.getProject($stateParams['id'])
            .then(project => this.projectToDelete = project);
        this.$state = $state;
        this.projectService = projectService;
    }

    deleteProject() {
        console.log('this is deleting');
        this.projectService.deleteProject(this.projectToDelete.id).then(
            () => this.$state.go('home')
        );
    }

}

ProjectsDeleteController.$inject = ['projectService', '$state', '$stateParams'];