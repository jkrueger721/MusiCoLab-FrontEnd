export class LoginController {
    constructor(userService, $state, $stateParams) {
        
        
        this.userService = userService;
        this.userToLogin = userService.getUser($stateParams['id'])
        this.$state = $state;
    }
    
        login() {
        
        console.log('login');
      
         
        
        
        this.userService.login(this.userToLogin).then(
            (result) => {
                console.log(result);
                let userId = result.id;
                let userName = result.userName;
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

    LoginController.$inject = ['userService', '$state', '$stateParams'];