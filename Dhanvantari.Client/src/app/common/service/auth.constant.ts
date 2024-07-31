import { authorizationServerUrl, clientSecret } from "../auth-key";

export const accessTokenUrl = `${authorizationServerUrl}/connect/token`;
export const accessTokenBody = `grant_type=password&username={0}&password={1}&scope=recruitment.fullaccess&client_id=recruitmentweb&client_secret=${encodeURIComponent(clientSecret)}`;
export const accessTokenRevokeUrl = `${authorizationServerUrl}/connect/revocation`;
export const refreshTokenRevokeBody = 'token={0}&token_type_hint=refresh_token';

export const accessTokenFromRefreshTokenBody = 'grant_type=refresh_token&refresh_token={0}';