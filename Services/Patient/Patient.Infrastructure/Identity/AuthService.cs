namespace Patient.Infrastructure.Identity;

public class AuthService : IAuthService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _configuration;
    private readonly ILogger _logger;
    private readonly string _address;

    public AuthService(HttpClient httpClient, IConfiguration configuration, ILogger<AuthService> logger)
    {
        _httpClient = httpClient;
        _configuration = configuration;
        _logger = logger;
        _address = _configuration.GetSection("IdentityServer")["IssuerUri"];
    }

    public async Task<TokenResponse> GetToken(string username, string password)
    {
        TokenResponse response = null;

        try
        {
            response = await _httpClient.RequestPasswordTokenAsync(new PasswordTokenRequest
            {
                Address = $"{_address}/connect/token",
                GrantType = "password",
                ClientId = "recruitmentweb",
                ClientSecret = "s*|9%2~*=95*+|t8*~3**%;U73*+-c",
                Scope = "inventory.fullaccess offline_access",
                UserName = username,
                Password = password
            });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message);
        }

        return response;
    }

    public async Task<TokenResponse> GetRefreshTokenByToken(string refreshToken)
    {
        TokenResponse response = null;

        try
        {
            response = await _httpClient.RequestRefreshTokenAsync(new RefreshTokenRequest
            {
                Address = $"{_address}/connect/token",
                GrantType = "refresh_token",
                RefreshToken = refreshToken,
                ClientId = "recruitmentweb",
                ClientSecret = "s*|9%2~*=95*+|t8*~3**%;U73*+-c"
            });                
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message);
        }

        return response;
    }
}
