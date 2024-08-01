namespace Patient.Api.Services;

public class CurrentUserService : ICurrentUserService
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public CurrentUserService(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public Guid UserId
    {
        get
        {
            UserForListDto currentUser = null;
            var currentUserClaim = _httpContextAccessor.HttpContext?.User?.FindFirst("user");

            if (currentUserClaim != null && !string.IsNullOrEmpty(currentUserClaim.Value))
            {
                currentUser = JsonConvert.DeserializeObject<UserForListDto>(currentUserClaim.Value);
            }

            if (currentUser != null)
            {
                return currentUser.Id;
            }

            return Guid.Empty;
        }
    }
}
