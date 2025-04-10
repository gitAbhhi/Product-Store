import React from 'react'

const Login = () => {
    return (
        <div className='min-h-display flex justify-center items-center'>
            <form>
                <h2>Login Page</h2>
                <div>
                    <input type="email" />
                    <input type="password" />
                </div>
                <button>Login</button>
            </form>
        </div>

    )
}

export default Login
