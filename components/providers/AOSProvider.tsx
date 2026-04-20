"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-in-out",
      offset: 50,
    });
  }, []);

  return <>{children}</>;
};
