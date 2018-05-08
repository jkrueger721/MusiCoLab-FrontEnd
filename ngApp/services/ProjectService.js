   export class ProjectService {

        constructor($resource) {
            console.log('resource', $resource);
            this.ProjectResource = $resource('http://localhost:64152/api/projects/:id');
        }

        listProjects() {
        
            return this.ProjectResource.query();
        }

        save(project) {
            return this.ProjectResource.save(project).$promise;
        }

        getProject(id) {
            return this.ProjectResource.get({ id: id });
        }

        deleteProject(id) {
            return this.ProjectResource.delete({ id: id }).$promise;
        }

    }

    ProjectService.$inject = ['$resource'];
    