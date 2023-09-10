import Error from "@/components/errors/Error";
import CommonSpinner from "@/components/shared/CommonSpinner";
import { ReactNode, useEffect, useState } from "react";

// import Navbar from "../../containers/navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  // useEffect(() => {
  //   const checkServerStatus = async () => {
  //     try {
  //       await axios.get("/server-status");
  //     } catch (err) {
  //       setError("Server is down. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkServerStatus();
  // }, []);

  // Asynchronously initialize the Redux store, including data fetching and authentication,
  // while displaying a loading indicator. Making sure that the store is initialized with credentials and data before rendering the app.

  useEffect(() => {
    const initializeStore = async () => {
      try {
        const appStore = await Promise.resolve("Hello");
      } catch (err) {
        setError("Error initializing the app.");
      } finally {
        setLoading(false);
      }
    };

    initializeStore();
  }, []);

  if (loading || error) {
    return (
      <div className="flex items-center justify-center h-screen">
        {loading ? <CommonSpinner /> : <Error />}
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-[#E1F5E4]">
      {/* <Navbar /> */}
      {children}
    </div>
  );
}

export default MainLayout;
