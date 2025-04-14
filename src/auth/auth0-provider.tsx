import { Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Auth0ProviderWithNavigateProps {
  children: ReactNode;
}

export const Auth0ProviderWithNavigate = ({ children }: Auth0ProviderWithNavigateProps) => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<Auth0ProviderOptions | null>(null);

  useEffect(() => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL || window.location.origin;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    if (domain && clientId) {
      setConfig({
        domain,
        clientId,
        authorizationParams: {
          redirect_uri: redirectUri,
          audience
        },
        onRedirectCallback: (appState: any) => {
          navigate(appState?.returnTo || window.location.pathname);
        }
      });
    } else {
      console.error("Auth0 configuration is missing. Please check your environment variables.");
    }
  }, [navigate]);

  if (!config) {
    return <div className="flex justify-center items-center min-h-screen">Loading Auth0 configuration...</div>;
  }

  return (
    <Auth0Provider {...config}>
      {children}
    </Auth0Provider>
  );
}; 