import { ReactNode } from "react";
// import Navbar from "../../containers/navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen bg-[#E1F5E4]">
      {/* <Navbar /> */}
      {children}
    </div>
  );
}

export default MainLayout;
