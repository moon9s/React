import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }


    const submitHandler = (event) => {

        event.preventDefault()

        if (username === '' && password === '') {

             toast.error('نام کاربری و پسورد را وارد کنید')

            return 
            
      
            
        }










        if (username === 'sogand' && password === '1234') {
            toast.success('خوش آمدید')
            setTimeout(() => {
             navigate('/')
            }, 2000);
           
        } else {
            toast.error('نام کاربری یا پسورد شما اشتباه است')
        }

    }

    return (
        <main className="w-full h-screen flex flex-col gap-2 items-center justify-center bg-blue-300 text-white">
            <form onSubmit={() => submitHandler(event)} className="rounded-md border border-slate-600 flex flex-col w-[400px] p-4">
                <h2 className="text-center text-2xl mb-4">Login</h2>

                <label className="text-xl mb-2" htmlFor="username">username</label>
                <input value={username} onChange={() => usernameHandler(event)} className="mb-8 p-2 w-full border border-slate-600 outline-0" type="text" id="username" placeholder="نام کاربری" />

                <label className="text-xl mb-2" htmlFor="password">password</label>
                <input value={password} onChange={() => passwordHandler(event)} className="mb-8 p-2 w-full border border-slate-600 outline-0" type="password" id="password" placeholder="رمز عبور" />

                <button className="p-3 font-bold text-lg bg-black rounded-xl cursor-pointer">Login</button>
            </form>
            <p>
                username: sogand
                <br />
                password: 1234
            </p>


            <Toaster />
        </main>
    )
}