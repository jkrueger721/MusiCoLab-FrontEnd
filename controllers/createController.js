export class CreateController {
    constructor(projectService, $state , User) {
        this.projectService = projectService;
        this.$state = $state;
        this.User = User;
       
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
                
                this.projectToCreate.AudioUrl = fileUrl;
              });
            
     
    }

}


CreateController.$inject = ['projectService', '$state' , 'User'];