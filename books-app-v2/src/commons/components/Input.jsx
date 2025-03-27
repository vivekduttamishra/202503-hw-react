
import {validate} from '../utils/validation'


export const Input = ({ model, name, label, placeholder, onChange, errorObject, type = "text", elementRenderer = null }) => {


    //if label is missing it should be generated for name by uppercaseing first letter and spacing word joins in camelCase
    label = label || name.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    placeholder = placeholder || label;
    let error = errorObject[name];
    if (error) {
        error = Array.isArray(error) ? error.join(',') : error.toString();
    }

    let errorClass= error? 'form-control-error':'';


    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>

            {
                elementRenderer ? elementRenderer({model, name, type,placeholder, onChange, error}) :
                    <input
                        value={model[name]} onChange={onChange}
                        type={type} className={"form-control "+errorClass} id={name} placeholder={placeholder} />
            }

            <div className="form-text text-danger">
                {error}
            </div>
        </div>
    )
}


//form + validation schema

const userSchema={
    name: [required()],  //{ validators:[required()], defaultValue:'', elementType:null, label:null}
    photo: "", // {validators:[], defaultValue:'', elementType:null, label:null}
    role: { defaultValue:'reader', validators:[required(),oneOf('reader','moderator','author')], elmentType=({model, name, type,placeholder, onChange, error})=>{
        return <select value={model[name]} onChange={onChange} className={"form-select "+(error?'form-control-error':'')}>
            <option value="">Select Role</option>
            <option value="reader">Reader</option>
            <option value="moderator">Moderator</option>
            <option value="author">Author</option>
        </select>
    }}
}


export const updateSchema= (schema)=>{
    
    let updated={};

    for(let key in schema){
        let value=schema[key];
        if(Array.isArray(value)){
            //validators are passed
            value={
                validators:value,
                defaultValue:'',
                elementType:null,
                label:null
            }
        }else if (typeof value === 'function'){
            value={
                validators:[value],
                defaultValue:'',
                elementType:null,
                label:null
            }
        }        
        else if( value instanceof string || value instanceof Number || value instanceof Boolean){
            //default value is passed
            value={
                validators:[],
                defaultValue:value,
                elementType:null,
                label:null
            }
        } else if(!value.validators){
            value.validators=[]
        }
        updated[key]=value;
        
    }

    return updated;
}

export const buildModel = schema =>{

    let updatedSchema = updateSchema(schema);

    let model={};
    for(let key in updatedSchema){
        let value=updatedSchema[key];
        model[key]=value.defaultValue;
    }

    return model;
}


export const useModel(schema,initialModel={})=>{
    schema=updateSchema(schema);
    let schemaModel= buildModel(schema);    
    let _model ={...schemaModel,...initialModel}
    const [model, setModel] = useState(_model);
    const [error, setError] = useState(null);
    
    const validationSchema={}
    for(let key in schema){
        validateSchema[key]=schema[key].validators;
    }


    const handleChange=(event)=>{
        let {name, value} = event.target;
        let updatedModel={...model};
        updatedModel[name]=value;
        setModel(updatedModel);
        setError(validate(updatedModel,validationSchema));
    }

    return [model, handleChange, error]
}

export const Form = ({schema, model={}, onSubmit, submitLabel="Submit",submitWithErrors=false})=>{
    schema = updateSchema(schema);

    let [form, handleChange, error] = useModel(schema,model)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(error) return;
        onSubmit(form,error);
    }

    const enabled = (submitWithError || error===null);

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(form).map(key=>(
                <Input 
                        key={key} 
                        model={form} name={key} errorObject={error} onChange={handleChange} 
                        placeholder={schema.placeholder} label={schema.label}
                        elementRenderer={schema.elementRenderer} 
                        />
            ))}
            <button disabled={!enabled} type="submit" className="btn btn-primary">{submitLabel}</button>
        </form>
    )

}