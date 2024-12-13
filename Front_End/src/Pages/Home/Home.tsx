import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Store/Slice/UserSlice";

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, user } = useSelector((state: any) => state.userAuth);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  const navigateToEditUser = () => {
    navigate('/edit-user');
  }

  const navigateToChat = () => {
    navigate('/chat');
  }

  const handleToLogout = () => {
    dispatch(logout());
    navigate('/login');
  }

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center">User Profile</h1>
        <div>
          {user ? (
            <div>
              <h3> {user.name} </h3>
              <h3> {user.email} </h3>
              <h3> {user.mobile} </h3>
            </div>
          ) : (
            <h2>user is not found!</h2>
          )}

          <div>
            <button type="submit" onClick={navigateToEditUser}>Edit</button>
            <button type="submit" onClick={navigateToChat}>Chat</button>
            <button type="submit" onClick={handleToLogout}>Logout</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;
