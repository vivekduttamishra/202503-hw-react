
import { validate } from '../utils/validation'
import { useState } from 'react'


export const Input = ({ model, name, label, placeholder, onChange, errorObject, type = "text", elementRenderer = null }) => {


    //if label is missing it should be generated for name by uppercaseing first letter and spacing word joins in camelCase
    label = label || name.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    placeholder = placeholder || label;
    let error = errorObject ? errorObject[name] : null;


    if (error) {
        error = Array.isArray(error) ? error.join(',') : error.toString();
    }

    let errorClass = error ? 'form-control-error' : '';
   


    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>

            {
                elementRenderer ? elementRenderer({ model, name, type, placeholder, onChange, error }) :
                    <input
                        value={model[name]} onChange={onChange} name={name}
                        type={type} className={"form-control " + errorClass} id={name} placeholder={placeholder} />
            }

            <div className="form-text text-danger">
                {error}
            </div>
        </div>
    )
}


//form + validation schema

// const userSchema={
//     name: [required()],  //{ validators:[required()], defaultValue:'', elementType:null, label:null}
//     photo: "", // {validators:[], defaultValue:'', elementType:null, label:null}
//     role: { defaultValue:'reader', validators:[required(),oneOf('reader','moderator','author')], elmentType=(props)=>{
//         const {model, name, type,placeholder, onChange, error}=props;
//         return <select value={model[name]} onChange={onChange} className={"form-select "+(error?'form-control-error':'')}>
//             <option value="">Select Role</option>
//             <option value="reader">Reader</option>
//             <option value="moderator">Moderator</option>
//             <option value="author">Author</option>
//         </select>
//     }}
// }


export const updateSchema = (schema) => {

    let updated = {};

    for (let key in schema) {
        let value = schema[key];
        if (Array.isArray(value)) {
            //validators are passed
            value = {
                validators: value,
                defaultValue: '',
                elementType: null,
                label: null
            }
            //console.log(key, 'array converted to',value)
        } else if (typeof value === 'function') {
            value = {
                validators: [value],
                defaultValue: '',
                elementType: null,
                label: null
            }
           // console.log(key, 'function converted to', value)
        }
        else if (typeof (value) === 'string' || value instanceof Number || value instanceof Boolean) {
            //default value is passed
            value = {
                validators: [],
                defaultValue: value,
                elementType: null,
                label: null
            }
           // console.log(key, 'string/number/boolean converted to', value)
        }

        //required value validated.
        value.validators = value.validators || []
        value.defaultValue = value.defaultValue || ''

        updated[key] = value;

    }

    return updated;
}

export const buildModel = schema => {

    let updatedSchema = updateSchema(schema);

    let model = {};
    for (let key in updatedSchema) {
        let value = updatedSchema[key];
        model[key] = value.defaultValue;
    }

    return model;
}


export const useModel = (schema, initialModel = {}) => {

   // console.log('schema', schema);

    schema = updateSchema(schema);
    let schemaModel = buildModel(schema);
    let _model = { ...schemaModel, ...initialModel }
    const [model, setModel] = useState(_model);
    const [error, setError] = useState(null);

    const validationSchema = {}
    for (let key in schema) {
        validationSchema[key] = schema[key].validators;
    }

    //console.log('validationSchema', validationSchema)

    const handleChange = (event) => {
        let { name, value } = event.target;
        console.log('name', name);
        console.log('value', value);
        let updatedModel =
        {
            ...model,
            [name]: value
        };
        //console.log('updatedModel', updatedModel);
        setModel(updatedModel);
        setError(validate(updatedModel, validationSchema));
    }

    const validateModel=()=>{
        let error=validate(model,validationSchema);
        setError(error)
        return error;
    }

    return [model, handleChange, error,validateModel]
}

export const Form = ({ schema, model = {}, onSubmit, submitLabel = "Submit", submitWithErrors = false }) => {

   // console.log('schema in form', schema);

    schema = updateSchema(schema);
    //console.log('updated schema in form', schema);

    let [form, handleChange, error,validateModel] = useModel(schema, model)


   // console.log('form', form);
    const handleSubmit = (e) => {
        e.preventDefault();
        error=validateModel();        
        onSubmit(form, error);
    }

    const enabled = (submitWithErrors || error === null);

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(form).map(key => (
                <Input
                    key={key}
                    model={form} name={key} errorObject={error} onChange={handleChange}
                    placeholder={schema[key].placeholder} label={schema[key].label} type={schema[key].type}
                    elementRenderer={schema[key].elementRenderer}
                />
            ))}
            <button disabled={!enabled} type="submit" className="btn btn-primary">{submitLabel}</button>
        </form>
    )

}