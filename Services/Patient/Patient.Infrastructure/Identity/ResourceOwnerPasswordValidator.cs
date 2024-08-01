namespace Patient.Infrastructure.Identity;

public class ResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
{
    private readonly ILogger<ResourceOwnerPasswordValidator> _logger;
    private readonly IUserService _userService;

    public ResourceOwnerPasswordValidator(ILogger<ResourceOwnerPasswordValidator> logger, IUserService userService)
    {
        _logger = logger;
        _userService = userService;
    }
    public async Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
    {
        try
        {
            var user = await _userService.GetUserAsync(context.UserName, context.Password);
            if (user != null)
            {
                context.Result = new GrantValidationResult(user.Id.ToString(), OidcConstants.AuthenticationMethods.Password);
            }            
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
        }
    }

}
