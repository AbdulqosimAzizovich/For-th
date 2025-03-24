"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PageLoader from "./Loader";

const NavigationContext = createContext({
  isNavigating: false,
});

export const useNavigation = () => useContext(NavigationContext);

export function NavigationEventsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // For initial page load
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // For subsequent navigations
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 800);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      <PageLoader />
      {children}
    </NavigationContext.Provider>
  );
}
