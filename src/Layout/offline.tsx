
import { ReactNode } from "react";
import { AuthProvider } from "../Context/AuthContext";
import { useOffline } from "../hooks";

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  useOffline();
  return (
    <>
        <AuthProvider>
          {children}
        </AuthProvider>
    </>
  );
};

export default AppProvider;
