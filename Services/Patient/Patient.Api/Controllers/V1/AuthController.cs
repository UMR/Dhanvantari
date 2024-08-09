namespace Patient.Api.Controllers.V1;

[Route("api/v1/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly IUserService _userService;

    public AuthController(IAuthService authService, IUserService userService)
    {
        _authService = authService;
        _userService = userService;
    }

    [AllowAnonymous]
    [HttpPost("Register")]
    public async Task<IActionResult> RegisterAsync(UserCreateDto request)
    {
        return Ok(await _userService.CreateAsync(request));
    }

    [AllowAnonymous]
    [HttpPost("Token")]
    public async Task<IActionResult> GetTokenAsync(TokenRequest request)
    {
        var tokenResponse = await _authService.GetToken(request.Username, request.Password);

        if (!tokenResponse.IsError)
        {
            return Ok(JsonConvert.DeserializeObject<TokenResponse>(tokenResponse.Raw));
        }
        else
        {
            return Ok(tokenResponse);
        }
    }

    [AllowAnonymous]
    [HttpPost("RefreshToken")]
    public async Task<IActionResult> GetRefreshTokenByTokenAsync(RefreshTokenRequest request)
    {
        var tokenResponse = await _authService.GetRefreshTokenByToken(request.RefreshToken);

        if (!tokenResponse.IsError)
        {
            return Ok(JsonConvert.DeserializeObject<TokenResponse>(tokenResponse.Raw));
        }
        else
        {
            return Ok(tokenResponse);
        }
    }    
}
