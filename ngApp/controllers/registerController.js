export class RegisterController {
    constructor(userService, $state) {
        this.userService = userService;
        this.$state = $state;
      }
    
      register() {
          console.log('registering this thing!!!');
        this.userService.save(this.userToRegister).then(
            () => this.$state.go('home')
        );
    }
}

RegisterController.$inject = ['userService', '$state'];