const LoginPage = () => {
    return (
        <>
        <div className="flex justify-center items-center">
            <div className="main">
                <form action="" method="post">
                    <div className="">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Input your email" id="email" />
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