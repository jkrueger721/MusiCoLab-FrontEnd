export class ProfileController {
    constructor(projectService,  $state, User ){
        this._user = User;
        this.user = sessionStorage.getItem("userName");
        this.myProjects = projectService.listProjects();
        this.$state = $state;
        console.log('user factory from Profile: ' + this._user);
    }
    
    logOut(){
        this._user.userLogged = false; 
        console.log('user factory from logOut(): ' + this._user);
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userName');
        this.$state.go('home');
       
    }
} 
ProfileController.$inject = ['projectService', '$state' ,'$stateParams', 'User'];