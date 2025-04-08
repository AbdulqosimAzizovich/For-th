"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Suspense,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PageLoader from "./Loader";

const NavigationContext = createContext({
  isNavigating: false,
});

export const useNavigation = () => useContext(NavigationContext);

function NavigationEvents() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // For initial page load - faqat klient tomonda ishlaydi
  useEffect(() => {
    if (isFirstLoad) {
      setIsNavigating(true);
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setIsFirstLoad(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  // For subsequent navigations
  useEffect(() => {
    if (!isFirstLoad) {
      setIsNavigating(true);
      const timer = setTimeout(() => setIsNavigating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams, isFirstLoad]);

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      {isNavigating && <PageLoader />}
    </NavigationContext.Provider>
  );
}

export function NavigationEventsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  // Faqat klient tomonda render qilish
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Suspense fallback={<PageLoader />}>
          <NavigationEvents />
        </Suspense>
      )}
      {children}
    </>
  );
}
