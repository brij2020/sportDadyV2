import { useEffect, useState, useRef } from 'react';

const useIntersect = ({
  root = null,
  rootMargin,
  threshold = 0
}) => {

  const [ entry, updateEntry ] = useState({});
  const [ node, setNode ] = useState(null);
  const observer =  useRef(null);
  useEffect(() => {
    if(observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver(
      ([entry]) => updateEntry(entry),{
        root,
        rootMargin,
        threshold
      }
      )
  },[node, root, rootMargin, threshold])

  return [entry,setNode]
}

export default useIntersect;