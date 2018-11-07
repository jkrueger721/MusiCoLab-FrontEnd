export class ListController {

    constructor(projectService) {
       
        this.projects = projectService.listProjects();
       
    }
}

ListController.$inject = ['projectService'];


export class ProjectsEditController {

    constructor(projectService, $state, $stateParams) {
        projectService.getProject($stateParams['id'])
            .then(project => this.projectToEdit = project);
        this.$state = $state;
        this.projectService = projectService;
    }

    editProject() {
        let uId = sessionStorage.getItem('userId');
        let vm = {
            userId : uId,
            updatedProject : this.projectToEdit
            
        };

        console.log("Got to EditProject. Id: " + vm.updatedProject.id);
        console.log("This is user Id :" + uId);

        this.projectService.edit(vm.updatedProject.id, vm).then(
            () => this.$state.go('list')
        );
    }
    upload()  {
        var fsClient = filestack.init('Ab6WXYLeSC60vuczv05zQz');
         
          fsClient.pick({
            fromSources:["local_file_system","url","dropbox","audio"],
            accept:["audio/*"]
          }).then((response) => {
            // declare this function to handle response
           // handleFilestack(response)
           console.log(response);
           const fileUrl = response.filesUploaded[0].url;
            // project.AudioUrl = fileUrl;
            // return project;
            this.projectToCreate.AudioUrl = fileUrl;
          });
        
 
}

}

ProjectsEditController.$inject = ['projectService', '$state', '$stateParams'];

export class ProjectsDeleteController {

    constructor(projectService, $state, $stateParams) {
        projectService.getProject($stateParams['id'])
            .then(project => this.projectToDelete = project);
        this.$state = $state;
        this.projectService = projectService;
    }

    deleteProject() {
        console.log('this is deleting');
        this.projectService.deleteProject(this.projectToDelete.id).then(
            () => this.$state.go('home')
        );
    }

}

ProjectsDeleteController.$inject = ['projectService', '$state', '$stateParams'];