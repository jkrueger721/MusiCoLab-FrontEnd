export class HomeController {
    constructor() {
        let name = "LNastos"
        localStorage.setItem("username", name);
        console.log('home!!');
        this.message = 'hello world';
    }

    getUsername(){
        var name = localStorage.getItem("username");
        console.log(name);
    }

}
