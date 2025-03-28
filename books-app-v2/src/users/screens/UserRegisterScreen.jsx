import { Form } from '../../commons/components/Input';
import { required, email, oneOf, password, minLength, match } from '../../commons/utils/validation'


const validRoles = ["reader", "moderator", "author"]
const userSchema = {
    name: required(),
    email: [required(), email()],
    password: { validators: [required(), minLength(5)], type: "password" },
    confirmPassword: { validators: [required(), minLength(5), match("password")], type: 'password' },
    photo: "",
    roles: {
        defaultValue: "reader", validators: [oneOf(validRoles)],
        elementRenderer: ({ model, name, onChange }) => {
           
            return (
                <select className="form-control" name={name} value={model[name]} onChange={onChange}>
                    {
                        validRoles.map(role => (
                            <option key={role} value={role}>{role}</option>
                        ))
                    }
                </select>
            )

        }

    }
}

const UserRegisterScreen = ({ }) => {

    const handleRegister = (user, error) => {
        console.log('user', user);
        console.log('error', error);
    }

    return (
        <div className="UserREgisterScreen">
            <h2>User Registeration</h2>

            <Form
                schema={userSchema}
                onSubmit={handleRegister}
                submitWithErrors
                submitLabel='Register'
            />


        </div>
    )
}

export default UserRegisterScreen;