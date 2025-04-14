import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

// Custom hook for user data
export const useUser = () => {
  const { 
    user, 
    isAuthenticated, 
    isLoading, 
    getAccessTokenSilently,
    loginWithRedirect,
    logout
  } = useAuth0();
  
  const getToken = useCallback(async () => {
    try {
      return await getAccessTokenSilently();
    } catch (error) {
      console.error("Error getting access token", error);
      return null;
    }
  }, [getAccessTokenSilently]);
  
  const login = useCallback(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);
  
  const signOut = useCallback(() => {
    logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  }, [logout]);
  
  return {
    user,
    isAuthenticated,
    isLoading,
    getToken,
    login,
    logout: signOut
  };
};

// Check if user has a specific role
export const useHasRole = (role: string) => {
  const { user, isAuthenticated } = useAuth0();
  
  if (!isAuthenticated || !user) {
    return false;
  }
  
  const roles = user['https://bestfootforward.com/roles'] as string[] || [];
  return roles.includes(role);
};

// Check if user is an admin
export const useIsAdmin = () => {
  return useHasRole('admin');
};

// Custom hook for managing the authentication state
export const useAuthGuard = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  
  const requireAuth = useCallback(async () => {
    if (!isLoading && !isAuthenticated) {
      await loginWithRedirect({
        appState: { returnTo: window.location.pathname }
      });
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);
  
  return {
    requireAuth,
    isAuthenticated,
    isLoading
  };
}; 