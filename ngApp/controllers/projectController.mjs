export class ProjectsController {
    constructor(projectService, $state, $stateParams) {

        this.projectToView = projectService.getProject($stateParams['id']);
        this.$state = $state;
        this.projectService = projectService;

    }

    viewProject(){
        console.log(this.projectToView);
        this.projectToView.getProject(this.projectToView.id).then( 
            () => this.$state.go('project')
        );

    }
}
ProjectsController.$inject = ['projectService', '$state', '$stateParams'];