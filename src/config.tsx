import configJson from "./auth_config.json";

export const getConfig = () => {
    return {
        domain: configJson.domain,
        clientId: configJson.clientId,
        audience: "https://dev-2diyxvi411ezfkqh.us.auth0.com/api/v2/"
    };
};
