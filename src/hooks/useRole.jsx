import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useRole = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: userRoll, isLoading } = useQuery({
        queryKey: ['email', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(
                `https://creative-eye.onrender.com/user/role/${user?.email}`
            );

            return res.data.role;
        },
    });
    return [userRoll, isLoading];
};

export default useRole;
