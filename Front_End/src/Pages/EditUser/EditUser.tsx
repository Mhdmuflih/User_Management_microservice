import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { editUser } from "../../Store/Slice/UserSlice";

const EditUser = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentData = useSelector((state: any) => state.userAuth.user);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: ""
  })

  useEffect(() => {
    if (currentData) {
      setUserData({
        name: currentData.name || "",
        email: currentData.email || "",
        mobile: currentData.mobile || ""
      })
    }
  }, [currentData])


  const handleToInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  const handleToNavigateHomePage = () => {
    navigate('/');
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.patch(`http://localhost:8080/edit-user/${currentData._id}`, userData);
      console.log(response.data);
      if (response.data.success) {
        
        dispatch(editUser({
          user: response.data.user
        }));

        Swal.fire({
          title: 'Success!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'OK'
        });

        navigate('/');
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
    }
  }

  return (
    <div>
      <h1>Edit user</h1>
      <div>
        <form onSubmit={handleSubmit}>
          
          <input type="text" name="name" value={userData.name} onChange={handleToInputChange} placeholder="Enter the name" />
          <input type="email" name="email" value={userData.email} onChange={handleToInputChange} placeholder="Enter the email" />
          <input type="text" name="mobile" value={userData.mobile} onChange={handleToInputChange} placeholder="Enter the mobile" />

          <div>
            <button onClick={handleToNavigateHomePage}>Cancel</button>
            <button type="submit">Conform</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser;
