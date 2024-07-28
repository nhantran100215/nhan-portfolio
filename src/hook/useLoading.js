import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, showLoading } from 'src/Redux/reducer/loadinngSlice';

const useLoading = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    loading.timer &&
      setTimeout(() => {
        dispatch(showLoading({ ...loading, show: false }));
      }, loading.timer);
  }, [loading.show]);

  const show = (payload) => {
    dispatch(showLoading(payload));
  };

  return {
    showLoading: show,
    loading
  };
};

export default useLoading;
