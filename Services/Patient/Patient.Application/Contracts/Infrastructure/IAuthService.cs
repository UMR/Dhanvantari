namespace Patient.Application.Contracts.Infrastructure;

public interface IAuthService
{
    Task<TokenResponse> GetToken(string username, string password);

    Task<TokenResponse> GetRefreshTokenByToken(string refreshToken);    
}