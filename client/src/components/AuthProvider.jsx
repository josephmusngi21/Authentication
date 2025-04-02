import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useEffect,
} from "react";

import api from "@/api";

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return authContext;
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Access Token that's stored in state

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await api.get("/api/me"); // tries to fetch data of user from server
        setToken(response.data.accessToken); // if successful, set the token in state
      } catch {
        setToken(null); // if unsuccessful, set the token to null
      }
    };
    fetchMe(); // fetch the user data when the component mounts
  }, []);

  // This will grab the token, specially if the token is changing and inject it to each request automatically to send to the server, then also if the token changes, it will update the token in the request header
  // We use useLayoutEffect instead of useEffect to make sure that it is blocking the rest of the rendering, lower down there will be more that one to be triggered and we want this to trigger before any of those
  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      // 'interceptors' uses axios to intercept the request before it is sent to the server
      config.headers.Authorization =
        !config._retry && token
          ? `Bearer ${token}`
          : config.headers.Authorization; //This checks if we have a token it will add it to the request header, if not it will just use the existing header
      return config;
    });
    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};
