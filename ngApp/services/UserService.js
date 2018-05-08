export class UserService {
    
    constructor($resource) {
        this.UserResource = $resource('http://localhost:64152/api/users/:id', null , {
            login: {
                method: 'POST',
                url: 'http://localhost:64152/api/users/login'
            }
        });
    }
    save(user) {
        console.log(user);
        return this.UserResource.save(user).$promise;
    }
    getUser(id) {
        return this.UserResource.get({ id: id });
    }
    login(user){
        return this.UserResource.login(user).$promise;
    }
}
    UserService.$inject = ['$resource'];