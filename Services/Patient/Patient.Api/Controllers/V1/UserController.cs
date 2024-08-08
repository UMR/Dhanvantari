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
    [HttpPost("UpdateBasic/{id}")]
    public async Task<IActionResult> UpdateBasicAsync(Guid id, UserForUpdateDto request)
    {
        return Ok(await _userService.UpdateAsync(id, request));
    }

    [AllowAnonymous]
    [HttpGet("IsDuplicate/{loginId}")]
    public async Task<IActionResult> IsDuplicateUserAsync(string loginId)
    {
        return Ok(await _userService.IsExistAsync(loginId));
    }
}



