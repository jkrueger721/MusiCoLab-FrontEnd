export class RegisterController {
    constructor(userService, $state) {
        this.userService = userService;
        this.$state = $state;
      }
    
      register() {
          console.log('registering this thing!!!');
        this.userService.save(this.userToRegister).then(

            () => {
            //  let userId = this.userToRegister.Id;
            //  let userName = this.userToRegister.userName;
            //  sessionStorage.setItem('userId',userId);
            //  sessionStorage.setItem('userName', userName);   
            this.$state.go('home')}
        );
    }
}

RegisterController.$inject = ['userService', '$state'];