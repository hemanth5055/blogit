import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/Usercontext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Or a loading spinner if needed
  }

  return children;
}
