import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        //setSelectedPage
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} 
      
      />
    </div>
  );
}

export default App;
