function User(name) {
    this.name = name;
    this.ShowDetails = function() {
        console.log('Class : ' + this.name);
    }
    this.Display = () => {
        console.log('Class : ' + this.name);
    }
}
let u1 = new User('mitta');
let u2 = new User('pawa');
setTimeout(u1.ShowDetails, 1000);
setTimeout(u2.Display, 1000);