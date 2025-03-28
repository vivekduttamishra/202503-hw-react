
import axios from '../utils/http'


const url = 'http://localhost:3000/api/users'

class UserService  {


    registerUser=async (user)=>{
        if(!user.email)
            throw new Error('Email is required');
        if(!user.password)
            throw new Error('Password is required');
        
        user.roles=['user'];

             
        const response = await axios.post(`${url}/register`, user);
        return this._noPassword(response.data);

        
    }

    _noPassUser(user) {
        let u = {...user};
        delete u.password;
        return u;
    }

    loginUser=async(loginInfo)=>{
       
        let response = await axios.post(`${url}/login`,loginInfo)
        console.log('response',response)
        return response.data;
    }


}

export default new UserService();