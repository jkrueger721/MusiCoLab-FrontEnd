export class HomeController {
    constructor() {
      
        console.log('home!!');
        this.message = 'hello world';
    }

    getUsername(){
        var name = localStorage.getItem("username");
        console.log(name);
    }

}
