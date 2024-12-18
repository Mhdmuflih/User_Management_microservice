import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/Store';

const UserLoginProtectors = () => {

    const isLoggedIn = useSelector((state: RootState) => state.userAuth.isLoggedIn);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = async () => {
            console.log('isLoggedIn route Protector', isLoggedIn);
            if (isLoggedIn) {
                navigate('/');
            }
            setLoading(false);
        }

        checkAuthStatus();

    }, [isLoggedIn, navigate]);

    if (loading) {
        return <div> Loading... </div>
    }

    return (
        !isLoggedIn ? <Outlet /> : null
    )
}

export default UserLoginProtectors;