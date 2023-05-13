import { useState } from 'react';

export const useHandleAdd = ({
  url,
  data,
  type,
  dispatch,
  setLoading,
  setError,
  notify,
}) => {
  const add = async () => {
    setLoading(true);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (json.success) {
      dispatch({ type: type, payload: json.data });
      setLoading(false);
      setError(null);
      notify.info(json.message);
    }
    if (!json.success) {
      setLoading(false);
      setError(json.error);
      notify.error(json.error);
    }
  };

  const [inputValue, setInputValue] = useState('');
  const handleAdd = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    await add();
    setInputValue('');
  };

  return { add, handleAdd, inputValue, setInputValue };
};
