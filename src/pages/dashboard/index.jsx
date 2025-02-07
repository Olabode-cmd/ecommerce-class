import useUser from '../../services/userServices'
import { useNavigate } from 'react-router'

const DashboardHome = () => {
    const { user, loading, error } = useUser();
    console.log(user)

    const router = useNavigate();

    const logout = () => {
        router('/auth/logout')
    }

    let role = user?.user.role

    
    return (
        <>
            <h1>Dashboard Home</h1>

            {/* <h1>Name: {user?.user.username}</h1>
            <h1>Role: {user?.user.role}</h1> */}

            {role === 'user' && (
                <div>
                    This is the User's Dashboard
                </div>
            )}

            {role === 'admin' && (
                <div>
                    This is the Admin's dashboard
                </div>
            )}

            <button onClick={logout} className='bg-black text-white px-3 py-2.5'>Logout</button>
        </>
    )
}

export default DashboardHome;