export class RegisterController {
    constructor(userService, $state) {
        this.usertService = userService;
        this.$state = $state;
      }
    
      register() {
       
       
        this.userService.save(this.userToRegister).then(
            () => this.$state.go('home')
        );
    }
}

RegisterController.$inject = ['userService', '$state'];