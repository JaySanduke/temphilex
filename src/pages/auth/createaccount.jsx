import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/authContext';
import { ReactComponent as Hilex } from '../../assets/icons/Hilex.svg';

export default function Createaccount() {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { createUser } = useUserAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'confirm-password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createUser(email, password);
            if (res) {
                navigate('/teacher/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='h-screen w-full'>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="flex flex-col justify-center items-center">
                    <Hilex className="h-16 w-auto" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Create a new Account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-0" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required onChange={handleChange} className="block w-full rounded-md border-0 border-gray-600 p-1.5 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="new-password" className="block mt-2 text-sm font-medium leading-6 text-white">New Password</label>
                            <div className="mt-2">
                                <input id="new-password" name="new-password" type="password" autoComplete="current-password" required onChange={handleChange} className="block w-full rounded-md border-0 border-gray-600 p-1.5 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mt-2 text-sm font-medium leading-6 text-white">Confirm Password</label>
                            <div className="mt-2">
                                <input id="confirm-password" name="confirm-password" type="password" autoComplete="current-password" required onChange={handleChange} className="block w-full rounded-md border-0 border-gray-600 p-1.5 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full mt-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
