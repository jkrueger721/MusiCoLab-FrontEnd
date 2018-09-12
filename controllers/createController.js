﻿export class CreateController {
    constructor(projectService, $state) {
        this.projectService = projectService;
        this.$state = $state;
       
       console.log('CreateController');
      }
       
      addProject() {
        let uID = sessionStorage.getItem('userId');
        let vm = {
            
            project: this.projectToCreate,
            userId: uID
        };
        console.log("from CreateContorller", vm);
        this.projectService.save(vm).then(
            () => this.$state.go('home')
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


CreateController.$inject = ['projectService', '$state'];