namespace Patient.Infrastructure.Identity.Configurations;

public static class Clients
{
    public static List<Client> GetClients()
    {
        return new List<Client>
        {
            new Client
            {
                Enabled = true,
                ClientId = "recruitmentweb",
                ClientName = "Recruitment Web Client",
                AllowedGrantTypes= new List<string> { GrantType.ResourceOwnerPassword, GrantType.ClientCredentials },
                AccessTokenType = AccessTokenType.Jwt,
                AccessTokenLifetime = 3600,
                UpdateAccessTokenClaimsOnRefresh= true,
                SlidingRefreshTokenLifetime= 1296000,
                AllowOfflineAccess= true,
                RefreshTokenExpiration= TokenExpiration.Absolute,
                RefreshTokenUsage= TokenUsage.OneTimeOnly,
                AlwaysSendClientClaims = true,
                ClientSecrets = new List<Secret>
                {
                    new Secret("s*|9%2~*=95*+|t8*~3**%;U73*+-c".Sha512())
                },
                AllowedCorsOrigins = new List<string> { "http://localhost:4002" },
                AllowedScopes=  new List<string> {  "recruitment.fullaccess", "offline_access" }
            }
        };
    }
}
