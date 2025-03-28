

export const assertValid=(condition,errorMessage,defaultErrorMessage)=>{

    if(!condition)
        return errorMessage||defaultErrorMessage;       

}


export const required = errorMessage=> (value,model)=> assertValid(value && value.toString().trim(), errorMessage,"Required")

export const maxLength = (maxLength,errorMessage)=> (value,model)=> assertValid(value && value.toString().length<=maxLength, errorMessage,`Max length allowed is ${maxLength}`)

export const minLength = (minLength,errorMessage)=> (value,model)=> assertValid(value && value.toString().length>=minLength, errorMessage,`Min length required is ${minLength}`)

export const email = errorMessage=> (value,model)=> assertValid(value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value), errorMessage,"Invalid email")

//strong password with at least 1 upper case, 1 lower case one diging and one special character ($_#.@<>~-)
export const password = errorMessage=> (value,model)=> assertValid(value && /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/.test(value), errorMessage,"Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character")

//a gneric pattern match validator

export const pattern = (pattern, errorMessage)=> (value,model)=> assertValid(value && pattern.test(value), errorMessage,errorMessage)

export const match = (field, errorMessage)=> (value,model)=> assertValid(value && value===model[field], errorMessage,`Passwords do not match`)

export const range = (min,max,errorMessage)=> (value,model)=> {
    value=Number(value);
    return assertValid(value && value>=min && value<=max, errorMessage,`Value should be between ${min} and ${max}`)
}

export const oneOf=(values,errorMessage)=> (value,model)=> assertValid(value && values.find(v=>v.toLowerCase() === value)!== undefined, errorMessage, `Value must be one of ${values.join(', ')}`)


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

export const validate = (model, schema)=>{
    const errors={};
    let errorCount=0;
    for(let key in schema){

        const fieldErrors=schema[key].map(validator=> validator(model[key],model));
        errors[key]=fieldErrors.filter(error=>error);
        console.log(key, fieldErrors.length);
        errorCount+=errors[key].length;
    }
    console.log('errorCount',errorCount)
    return errorCount ? errors: null;
}


