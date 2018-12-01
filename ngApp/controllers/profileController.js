export class ProfileController {
    constructor(projectService, $state, User) {
        this._user = User;
        this.user = sessionStorage.getItem("userName");
        this.myProjects = projectService.listProjects();
        this.$state = $state;
        console.log(this._user);
    }

    logOut() {
        //this._user.userLogged = false;
        console.log(this._user);
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userName');
        this.$state.go('home');

    }
}
ProfileController.$inject = ['projectService', '$state', '$stateParams', 'User'];