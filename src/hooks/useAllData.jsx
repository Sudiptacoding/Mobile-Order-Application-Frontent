import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAllData = () => {
    const axiosData = useAxios();
    const { isPending, error, data: phone, refetch } = useQuery({
        queryKey: ['course'],
        queryFn: () =>
            axiosData.get(`/api/phone`)
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, phone, refetch }
};

export default useAllData;