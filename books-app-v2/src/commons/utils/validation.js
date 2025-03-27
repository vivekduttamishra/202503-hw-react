

const assertValid=(condition,errorMessage,defaultErrorMessage)=>{

    if(!condition)
        return errorMssage||defaultErrorMessage;       

}


const required = errorMessage=> (value,model)=> assertValue(value && value.toString().trim(), errorMessage,"Required")

const maxLength = (maxLength,errorMessage)=> (value,model)=> assertValid(value && value.toString().length<=maxLength, errorMessage,`Max length allowed is ${maxLength}`)

const minLength = (minLength,errorMessage)=> (value,model)=> assertValid(value && value.toString().length>=minLength, errorMessage,`Min length required is ${minLength}`)

const email = errorMessage=> (value,model)=> assertValid(value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value), errorMessage,"Invalid email")

//strong password with at least 1 upper case, 1 lower case one diging and one special character ($_#.@<>~-)
const password = errorMessage=> (value,model)=> assertValid(value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value), errorMessage,"Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character")

const match = (field, errorMessage)=> (value,model)=> assertValid(value && value===model[field], errorMessage,`Passwords do not match`)

const range = (min,max,errorMessage)=> (value,model)=> {
    value=Number(value);
    return assertValid(value && value>=min && value<=max, errorMessage,`Value should be between ${min} and ${max}`)
}

const oneOf=(values,errorMessage)=> (value,model)=> assertValid(value && values.find(v=>v.toLowerCase() === value)!== undefined, errorMessage, `Value must be one of ${values.join(', ')}`)


//example schema
// const userSchema={
//     name:[required(),maxLength(20)],
//     email:[required(), email()],
//     password:[required(), password()],
//     confirmPassword:[required(), match('password')],
//     roles:[required(), oneOf(['reader','reviewer'])]
// }

//example object
// const user={
//     name:'Vivek Dutta Mishra',
//     photo:'xyz', //not validated
//     email:'vivek@conceptarchitect', //invalid
//     password:'P@ssw0rd123',
//     //confirmPassword:'P@ssw0rd122',  //required.
//     roles:[admin]    //invalid
// }

const validate = (model, schema)=>{
    const errors={};
    const errorCount=0;
    for(let key of schema){

        const fieldErrors=schema[key].map(validator=> validator(model[key],model));
        errors[key]=fieldErrors.filter(error=>error);
        errorCount+=fieldErrors.length;
    }

    return errorCount? errors: null;
}



export default {required, maxLength, minLength, email, password, match, range, oneOf, validate}