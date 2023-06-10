import { useEffect, useState } from "react";
import { useHistory ,useLocation } from 'react-router-dom';

const useCurrentPath = () => {
  const [path, setCurrentPath] = useState('/');
  const location = useLocation();
  useEffect(() => {
    
    setCurrentPath(location.pathname)
    // Remove event listener on cleanup
    return () => {
      
    };
  }, []);

  return path;
};

export default useCurrentPath;
