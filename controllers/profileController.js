export class ProfileController {
    constructor(projectService,  $state,){
        this.user = sessionStorage.getItem("userName");
        this.myProjects = projectService.listProjects();
        this.$state = $state;
    }

    logOut(){
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userName');
        this.$state.go('home');
       
    }
} 
ProfileController.$inject = ['projectService', '$state' ,'$stateParams'];