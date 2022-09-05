import { useCallback, useState } from 'react';

export default function useToggler(
  defaultValue = false,
): [boolean, () => void] {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = useCallback(() => {
    setValue((prevShow) => !prevShow);
  }, []);

  return [value, toggleValue];
}  