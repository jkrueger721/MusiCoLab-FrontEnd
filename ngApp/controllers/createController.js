export class CreateController {
    constructor(projectService, $state) {
        this.projectService = projectService;
        this.$state = $state;
      }
       
      addProject() {
        let vm = {
            project: this.projectToCreate,
            userId: 1
        };
        console.log("from CreateContorller", vm);
        this.projectService.save(vm).then(
            () => this.$state.go('home')
        );
    //     var fsClient = filestack.init('Ab6WXYLeSC60vuczv05zQz');
    //     function upLoad()  {
            
    //     fsClient.pick({
    //         fromSources:["local_file_system","imagesearch","facebook","instagram","dropbox"],
    //         accept:["audio/*"]
    //     }).then(function(response) {
    //         // declare this function to handle response
    //         handleFilestack(response);
    //   }); 
    // }

    }
}


CreateController.$inject = ['projectService', '$state'];