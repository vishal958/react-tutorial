import axios from 'axios';

const useSessionManager = () => {
  const [session, setSession] = React.useState({
    accessToken: null,
    refreshToken: null,
  });
  const axiosInstance = axios.create({});
  const inactivityTimerRef = React.useRef(null);

  const requestInterceptor = (config) => {
    if (session.accessToken) {
      config.headers['Authorization'] = `Bearer ${session.accessToken}`;
    }
    return config;
  };

  const responseInterceptor = async (error) => {
    const originalRequest = error.config;
    const { response } = error;

    if (response && response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessToken();
      return await axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  };

  const refreshAccessToken = async () => {
    if (!session.refreshToken) {
      logout();
      return;
    }

    try {
      const response = await axios.post('/api/refresh-token', {
        refreshToken: session.refreshToken,
      });

      setSession((prevSession) => ({
        ...prevSession,
        accessToken: response.data.accessToken,
      }));
      resetInactivityTimer();
    } catch (error) {
      logout();
    }
  };

  const initializeInactivityTimer = () => {
    inactivityTimerRef.current = setTimeout(() => {
      logout();
    }, 5 * 60 * 1000); // 5 minutes of inactivity
  };

  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    initializeInactivityTimer();
  };

  const handleActivity = () => {
    resetInactivityTimer();
  };

  const login = (accessToken, refreshToken) => {
    setSession({
      accessToken,
      refreshToken,
    });
    resetInactivityTimer();
  };

  const logout = () => {
    setSession({
      accessToken: null,
      refreshToken: null,
    });
    clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = null;
    // Perform any additional logout actions
  };

  React.useEffect(() => {
    axiosInstance.interceptors.request.use(requestInterceptor, (error) =>
      Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
      (response) => response,
      responseInterceptor
    );

    initializeInactivityTimer();

    // Mouse and keyboard activity event listeners
    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return axiosInstance;
};

export default useSessionManager;
