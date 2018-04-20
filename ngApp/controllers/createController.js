export class CreateController {
    constructor(projectService, $state) {
        this.projectService = projectService;
        this.$state = $state;
      }
    
      addProject() {
        let vm = {
            project: this.projectToCreate,
            userId: 1
        };
        console.log("from CreateContorller", vm);
        this.projectService.save(vm).then(
            () => this.$state.go('home')
        );
    }
}

CreateController.$inject = ['projectService', '$state'];