import { useState, useEffect, useLayoutEffect, useRef } from 'react';

const useElementSize = () => {
  const [elementSize, setElementSize] = useState({
    width: 0,
    height: 0,
  });
  const elementRef = useRef();
  useLayoutEffect(() => {
    if (elementRef.current) {
      const size = elementRef.current.getBoundingClientRect();
      setElementSize(size);
    }
  }, [elementRef.current]);
  return [elementRef, elementSize];
};

export { useElementSize };
