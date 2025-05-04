
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Index = () => {
  // This component exists just to maintain compatibility
  // It simply renders the Home component directly
  return <Home />;
};

export default Index;
