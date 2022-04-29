import { useDispatch } from 'react-redux';
import { addUser as createAddUser } from './store';

export const useAddUser = (
    id,
    name,
    userName
) => {
    const dispatch = useDispatch();

    return () => {
        dispatch(
            createAddUser({
                //getting the last id in the list and adding 1
                id: id,
                name: name,
                username: userName
            })
        )
    }
}
