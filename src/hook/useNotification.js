import { useDispatch } from 'react-redux';
import { addNoti, clearNoti } from 'src/Redux/reducer/notificationSlice';
import { CONST_VARI } from 'src/utils';
import { v4 } from 'uuid';

const useNotification = () => {
  const dispatch = useDispatch();
  let idTimeOut;

  const addNotification = ({ type, message }) => {
    dispatch(
      addNoti({
        id: v4(),
        type: type,
        message: message
      })
    );
    idTimeOut && clearTimeout(idTimeOut);
    idTimeOut = setTimeout(() => {
      dispatch(clearNoti());
    }, CONST_VARI.NOTIFICATION.timer);
  };

  return addNotification;
};

export default useNotification;
