export class ProjectService {

    constructor($resource) {
        console.log('resource', $resource);
        this.ProjectResource = $resource('http://localhost:64152/api/projects/:id', { id: '@id'}, {
            update: { method: 'PUT' }
        });
    }

    listProjects() {
       
        return this.ProjectResource.query();
        
    }

    save(project) {
        return this.ProjectResource.save(project).$promise;
    }
    edit(id, vm) {
       
        console.log(vm);
       

        return this.ProjectResource.update({id}, vm).$promise;
    }

    getProject(id) {
        return this.ProjectResource.get({ id }).$promise;
    }

    deleteProject(id) {
        console.log("Id to delete:" + id);
        return this.ProjectResource.delete({ id }).$promise;
    }

}

ProjectService.$inject = ['$resource'];