
import { useContext } from 'react';
import { ColorRing } from 'react-loader-spinner'
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
    }

    if(user){
        return children
    }
    else{
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoutes;