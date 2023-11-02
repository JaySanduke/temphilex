import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/authContext';
import { ReactComponent as Hilex } from '../../assets/icons/Hilex.svg';

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { emailSignIn, googleSignIn } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await emailSignIn(email, password);
            if (res) {
                navigate('/teacher/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            const res = await googleSignIn();
            if (res) {
                navigate('/teacher/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    return (
        <div className='h-screen w-full'>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="flex flex-col justify-center items-center">
                    <Hilex className="h-16 w-auto" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required onChange={handleChange} className="block w-full rounded-md border-0 border-gray-600 p-1.5 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required onChange={handleChange} className="block w-full rounded-md border-0 border-gray-600 p-1.5 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                    <hr className='my-8 mb-6 scale-x-105 opacity-60' />
                    <button type="button" onClick={handleGoogleSignIn} className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">Google Sign In</button>
                </div>
                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <Link relative="path" to={"/auth/createaccount"} class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">  Create Account</Link>
                </p>
            </div>
        </div>
    )
}
