namespace Patient.Api.Controllers.V1;

[Route("api/v1/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [AllowAnonymous]
    [HttpGet("IsDuplicateUser/{loginId}")]
    public async Task<IActionResult> IsDuplicateUserAsync(string loginId)
    {
        return Ok(await _userService.IsExistAsync(loginId));
    }
}



