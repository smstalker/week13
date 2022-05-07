
import React from 'react';
import ReactDOM from 'react-dom/client';

class LoginForm extends React.Component{
    render() {
        return (
            <><div>
                <h3>Log In</h3>
            </div><form>
                    <label>username:
                        <input
                            type="text" />
                    </label>
                    <label>password:
                        <input
                            type="text" />
                    </label>
                    <input type="submit" />
                </form></>
         
         )

}
}

export default LoginForm

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);