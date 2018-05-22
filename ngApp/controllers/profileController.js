export class ProfileController {
    constructor(projectService){
        this.user = sessionStorage.getItem(userId, userName);
        this.myProjects = projectService.listProjects();
    }
} 
ProfileController.$inject = ['projectService'];