export class ProfileController {
    constructor(projectService){
        this.user = sessionStorage.getItem("userName");
        this.myProjects = projectService.listProjects();
    }
} 
ProfileController.$inject = ['projectService'];