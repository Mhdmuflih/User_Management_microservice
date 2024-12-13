import axios from "axios";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginSuccess } from "../../Store/Slice/UserSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });

  const handleInputTake = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", formdata);
      if (response.data.success) {

        if (response.data.user.is_Block) {
          Swal.fire({
            title: 'Error!',
            text: "Your account is blocked. Please contact support.",
            icon: 'error',
            confirmButtonText: 'OK'
          });
          return;
        } else {

          dispatch(loginSuccess({
            token: response.data.token,
            isLoggedIn: true,
            user: response.data.user
          }));

          Swal.fire({
            title: 'Success!',
            text: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK'
          });

          navigate('/')

        }
      } else {
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
        text: "Server error",
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  const navigateToSign = () => {

  }

  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter the Email" value={formdata.email} onChange={handleInputTake} />
            <input type="password" name="password" placeholder="Enter the Password" value={formdata.password} onChange={handleInputTake} />
            <button type="submit">Submit</button>
            <div className="mt-4 text-center">
              <span > Do you have an account? <span onClick={navigateToSign} className="text-blue-500 cursor-pointer hover:underline">SignUp</span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
