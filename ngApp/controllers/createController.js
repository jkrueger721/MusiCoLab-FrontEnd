export class CreateController {
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
        console.log('filstack upload');
        fsClient.pick({
            fromSources:["local_file_system","imagesearch","facebook","instagram","dropbox"],
            accept:["audio/*"]
        }).then(function(response) {
            // declare this function to handle response
            handleFilestack(response);
      }); 
    }

}


CreateController.$inject = ['projectService', '$state'];