namespace Patient.Infrastructure.Identity;

public class ProfileService : IProfileService
{
    private readonly ILogger<ProfileService> _logger;
    private readonly IUserService _userService;

    public ProfileService(ILogger<ProfileService> logger, IUserService userService)
    {
        _logger = logger;
        _userService = userService;
    }

    public async Task GetProfileDataAsync(ProfileDataRequestContext context)
    {
        var claims = new ClaimsIdentity();

        try
        {
            var user = await _userService.GetUser(new Guid(context.Subject.GetSubjectId()));

            if (user != null)
            {
                var currentUserJson = Newtonsoft.Json.JsonConvert.SerializeObject(user);
                claims.AddClaims(new[]
                {
                    new Claim("user", currentUserJson)
                });
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
        }

        context.IssuedClaims = claims.Claims.ToList();
    }

    public async Task IsActiveAsync(IsActiveContext context)
    {
        try
        {
            context.IsActive = await _userService.IsActiveUser(new Guid(context.Subject.GetSubjectId()));            
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
        }
    }
}
