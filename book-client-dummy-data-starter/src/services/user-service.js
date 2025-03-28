const users=[
    {
        email:'vivek@conceptarchitect.in',
        password:"P@ss#123", 
        roles:["admin","author"], 
        image:"https://avatars.githubusercontent.com/u/9464908?v=4"
    },
    {
        email:'neha@gmail.com',
        password:"P@ss#123", 
        roles:["user"], 
        image:"https://randomuser.me/api/portraits/women/60.jpg"
    },
]

class UserService  {

    _getUserById(email){
        let user = users.find(u=>u.email === email)
        return user;
    }

    registerUser=(user)=>{
        if(!user.email)
            throw new Error('Email is required');
        if(!user.password)
            throw new Error('Password is required');
        
        user.roles=['user'];


        let existing= this._getUserById(user.email);
        if(existing)
            throw new Error('User already exists');

        users.push(user);
        return this.noPassUser(user);
        
    }

    _noPassUser(user) {
        let u = {...user};
        delete u.password;
        return u;
    }

    loginUser=(email,password)=>{
        let user = this._getUserById(email);
        if(!user || user.password!==password)
            throw new Error('Invalid email or password');
        return this._noPassUser(user);
    }

}

export default new UserService();