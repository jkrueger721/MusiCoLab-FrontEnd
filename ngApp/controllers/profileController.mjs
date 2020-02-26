export class ProfileController {
    constructor(projectService, $state) {
        
        this.user = sessionStorage.getItem("userName");
        this.userId = sessionStorage.getItem("userId");
        this.myProjects = projectService.listProjects();
        this.$state = $state;
        if (this.user == null){
            alert('You need to be logged in');
            this.$state.go("login");
        }
    
    }

    logOut() {
        
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userName');
        this.$state.go('home');

    }
}
ProfileController.$inject = ['projectService', '$state', '$stateParams'];