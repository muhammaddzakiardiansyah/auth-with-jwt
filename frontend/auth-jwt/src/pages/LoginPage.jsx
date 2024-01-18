const LoginPage = () => {
    return (
        <>
        <div className="h-screen flex justify-center items-center">
            <div className="bg-blue-300 p-14 rounded-xl">
                <h2 className="mb-10 text-3xl font-semibold">Login</h2>
                <form action="" method="post">
                    <div className="p-5">
                        <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                        <input type="text" className="py-2 px-5 border-0 rounded-lg ring-1 ring-blue-700 focus:ring-blue-900" name="email" placeholder="Input your email" id="email" />
                    </div>
                    <div className="">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginPage;