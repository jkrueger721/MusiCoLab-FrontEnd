export class UserService {
    
    constructor($resource) {
        this.UserResource = $resource('http://localhost:64152/api/users/:id');
    }
    save(user) {
        return this.UserResource.save(user).$promise;
    }
    getUser(id) {
        return this.UserResource.get({ id: id });
    }
}
    UserService.$inject = ['$resource'];