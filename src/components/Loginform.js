
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



class LoginForm extends React.Component {
    render() {
        return (
            <>
                <div className="login-border border border-4 p-4">
                    <div className='text-center'>
                        <h3 >Log In</h3>


                    </div>
                    <form className='text-center'>
                        <label className='p-2'>username:
                            <input
                                type="text" />
                        </label> 
                        <br></br>
                        <label className='p-2'>Password:
                            <input
                                type="text" />
                        </label>
                        <br></br>
                        <input className='p-2' type="submit" />
                    </form></div>
            </>

        )

    }
}

export default LoginForm

