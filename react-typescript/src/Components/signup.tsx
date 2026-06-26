export function Signup() {
    return (
        <>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className = "mb-3">
                <label htmlFor = "fullname" className = "form-label" >Full Name</label>
                <input type = "text" id = "fullname" className = "form-control" placeholder = "Please enter your  Full Name" {...register("fullname", { required: true })}>
                {errors.fullname && <span className="text-danger">This field is required</span>}

            </div>
        </form>
        </>
    )