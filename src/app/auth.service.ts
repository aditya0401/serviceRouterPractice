export class AuthService{
    loggedIn= false;

    isAuthenticate(){
        const promise= new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedIn)
                },500)
        });
        return promise;
    }
    logIn(){
        this.loggedIn= true;
    }

    logOut(){
        this.loggedIn= false;
    }
}