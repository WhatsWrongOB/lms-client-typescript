import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";


interface AuthContextType {
  token: string | null;
  setAuthToken: (token: string | null) => void;
  removeAuthToken: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const setAuthToken = (newToken: string | null) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  const removeAuthToken = () => {
    setAuthToken(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setAuthToken,
        removeAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const authConsumer = useContext(AuthContext);

  if (!authConsumer) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return authConsumer;
};
