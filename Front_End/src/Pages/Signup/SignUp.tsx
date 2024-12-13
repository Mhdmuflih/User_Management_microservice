import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    })

    const handleInputTake = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            console.log(formData,'formdata')
            const response = await axios.post("http://localhost:8080/signup", formData);
            console.log( response,"response")
            if(response.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User Registration successfully completed.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                navigate('/login');
            }else {
                Swal.fire({
                    title: 'Error!',
                    text: response.data.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error: any) {
            console.log(error.message);
            Swal.fire({
                title: 'Error!',
                text: 'Interner server error',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    const NavigateToLogin = () => {
        navigate('/login');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <input type="text" name='name' placeholder='Enter the Name' value={formData.name} onChange={handleInputTake} />
                    <input type="email" name="email" placeholder="Enter the Email" value={formData.email} onChange={handleInputTake} />
                    <input type="text" name="mobile" placeholder="Enter the Mobile" value={formData.mobile} onChange={handleInputTake} />
                    <input type="password" name="password" placeholder="Enter the Password" value={formData.password} onChange={handleInputTake} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <p>Already have an account? <span onClick={NavigateToLogin}>SignIn Now</span></p>
                </div>
            </form>
        </>
    )
}

export default SignUp;
