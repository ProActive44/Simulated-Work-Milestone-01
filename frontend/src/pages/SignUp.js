import React from "react";


export default function SignUp() {


    const handleSubmit = (e)=>{
        e.preventDefault();
        signUp();
    }

    const signUp = ()=>{
        console.log("Signup successfull");
        fetch("http://localhost:4000/signup");
    }


    return (
        <div className="p-10">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 m-auto px-1 md:px-10">
                <img className="w-40 my-5" src=" https://kq-storage.s3.ap-south-1.amazonaws.com/logo.png" alt="Logo"/>

                <p className="font-sans	font-medium text-sm my-1">Signup up to see photos and videos from your friends</p>

                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full space-y-4 my-5">
                    <input className="border border-gray rounded-md p-1 w-full" type="text" placeholder="Full Name"/> 
                    <input className="border border-gray rounded-md p-1 w-full" type="email" placeholder="Email"/> 
                    <input className="border border-gray rounded-md p-1 w-full" type="text" placeholder="Username"/> 
                    <input className="border border-gray rounded-md p-1 w-full" type="password" placeholder="Password"/> 
                    <p className="font-sans	font-medium text-sm my-1">By signing up, you are agree to our Terms and conditions </p>
                    <button className="text-white border bg-blue-400 w-full py-1 rounded-md font-medium hover:bg-blue-600" type="submit">Sign UP</button>
                </form>
                {/* border-red-500 border-8 */}
                <p>OR</p>

                <button className="text-white border bg-blue-700 w-full py-1 rounded-md font-medium hover:bg-blue-950 hover:">Continue with Google</button>
                <p className="font-sans	font-medium text-sm my-2">Have an account? Log In</p>

            </div>
        </div>

    )
}