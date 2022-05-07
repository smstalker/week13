
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



class LoginForm extends React.Component {
    render() {
        return (
            <>
                <div className="block-example border border-dark">
                    <div>
                        <h3 >Log In</h3>


                    </div>
                    <form >
                        <label>username:
                            <input
                                type="text" />
                        </label>
                        <label>password:
                            <input
                                type="text" />
                        </label>
                        <input type="submit" />
                    </form></div>
            </>

        )

    }
}

export default LoginForm

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);