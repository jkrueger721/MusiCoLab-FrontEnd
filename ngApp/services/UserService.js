const baseUrl = 'http://localhost:64152/api/user';
export class UserService {
    constructor($resource) {
        this.UserResource = $resource(baseUrl, null , {
            login: {
                method: 'POST',
                url: `${baseUrl}/login`
            }
        });
    }
    save(user) {
        console.log(user);
        return this.UserResource.save(user).$promise;
    }
    getUser(id) {
        return this.UserResource.get({ id });
    }
    login(user){
        return this.UserResource.login(user).$promise;
    }
}
    UserService.$inject = ['$resource'];