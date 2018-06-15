export class ProjectsController {
    constructor(projectService, $state, $stateParams) {

        this.projectToView = projectService.getProject($stateParams['id']);
        this.$state = $state;
        this.projectService = projectService;

    }

    viewProject(){
        this.projectToView.viewProject(this.projectToView).then( 
            () => this.$state.go('project')
        );

    }
}
ProjectsController.$inject = ['projectService', '$state', '$stateParams'];