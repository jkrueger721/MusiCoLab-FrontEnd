export class LoginController {
    constructor(userService, $state, $stateParams, user) {
        
        
        this.userService = userService;
        this.userToLogin = userService.getUser($stateParams['id'])
        this.$state = $state;
        this.User = user;
    }
    
        login() {
        
        console.log('login');
        console.log(this.User);
         
        
        
        this.userService.login(this.userToLogin).then(
            (result) => {
                console.log(result);
                let userId = result.id;
                let userName = result.userName;
                this.User.userLogged = true;
                console.log(this.User);
                console.log(userId ,'this is user id');
                sessionStorage.setItem("userId", userId);
                sessionStorage.setItem('userName', userName); 
                this.$state.go('profile');
                var item = sessionStorage.getItem("userId");
                console.log(item);
            }
        );  
    
    }
        
            
        
    
}

    LoginController.$inject = ['userService', '$state', '$stateParams' , 'User'];