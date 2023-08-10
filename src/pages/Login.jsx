const Login = () => {
    return (
        <>
            <form className="mt-5" id="login">
                <h1 className="text-center mb-3 text-danger">Login</h1>
       
                <label className="form-lable">Email</label>
                <input className="form-control" type="text" />

                <label className="form-lable">Password</label>
                <input className="form-control" type="text" />

                <button className="btn btn-outline-danger my-3">click me</button>
            </form>
        </>
    )
}
export default Login;