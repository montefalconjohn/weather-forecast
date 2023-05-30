import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import Router from "./router";
import {Auth0Provider} from "@auth0/auth0-react";
import {getConfig} from "./config";

const config = getConfig();

const {origin, pathname} = window.location;

const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    onRedirectCallback: pathname,
    authorizationParams: {
        redirect_uri:  origin,
        ...(config.audience ? { audience: config.audience } : null),
    },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Auth0Provider {...providerConfig}>
        <RouterProvider router={Router}/>
    </Auth0Provider>
)