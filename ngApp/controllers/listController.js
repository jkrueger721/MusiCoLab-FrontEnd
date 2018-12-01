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
        console.log(this.projectToEdit);
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
            console.log(fileUrl);
            this.projectToEdit.audioUrl = fileUrl;
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
        let uId = sessionStorage.getItem("userId");
        console.log(this.projectToDelete);
       let projectOwner = this.projectToDelete.projectOwner.id;
       console.log('projectOwner: ' + projectOwner);
        let vm = {
           userId: uId,
           deleteProject : this.projectToDelete
            
        };
        console.log('this is deleting');
        if(projectOwner == uId){   
            this.projectService.deleteProject(this.projectToDelete.id ,vm).then(
                () => this.$state.go('home')
            );
        } else {

            alert("You need to be project owner in order to delete a Project!");
        }
        
    }

}

ProjectsDeleteController.$inject = ['projectService', '$state', '$stateParams'];