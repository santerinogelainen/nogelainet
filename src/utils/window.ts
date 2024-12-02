import { useEffect, useState } from "react";

export const isMobile = () => {
  return window.innerWidth < 768;
};

export const useIsMobile = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(isMobile());
    check();
    window.addEventListener("resize", check);
    () => window.removeEventListener("resize", check);
  }, []);

  return mobile;
};
