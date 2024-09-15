import React, { useEffect } from 'react';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../feature/auth/authSlice';
const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const dispatch = useDispatch()
    const { user: { email, name, photo } ,isLoading} = useSelector((state) => state.auth)
    const navigation=useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        dispatch(login({email:data.email,password:data.password}))
    }

    useEffect(()=>{
        if (email&&!isLoading) {
            navigation('/')
        }
    },[email,isLoading,navigation])
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center ">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <h2 className="text-2xl font-semibold text-center mb-4">Create a new account</h2>
                    <p className="text-gray-600 text-center mb-6">Enter your details to register.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label for="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
                            <input type="email" id="email" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" {...register("email", { required: true })} placeholder="hello@alignui.com" />
                        </div>
                        <div className="mb-6">
                            <label for="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                            <input type="password" id="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" {...register("password", { required: true })} placeholder="••••••••" />

                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
                        <p className="text-gray-600 text-xs text-center mt-4">

                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;