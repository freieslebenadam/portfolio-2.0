import React, { useEffect, useRef } from "react";
 
const useDimensions = (ref: React.RefObject<any>) => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  }, [])

  return dimensions.current
};

export default useDimensions