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
    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAllAsync()
    {
        return Ok(await _userService.GetAllAsync());
    }
    
    [HttpGet("GetById")]
    public async Task<IActionResult> GetByIdAsync(Guid id)
    {
        return Ok(await _userService.GetByIdAsync(id));
    }

    [AllowAnonymous]
    [HttpPost("Update/{id}")]
    public async Task<IActionResult> UpdateAsync(Guid id, UserUpdateDto request)
    {
        return Ok(await _userService.UpdateAsync(id, request));
    }

    [AllowAnonymous]
    [HttpPatch("UpdateStatus/{id}")]
    public async Task<IActionResult> UpdateStatusAsync(Guid id)
    {
        return Ok(await _userService.UpdateStatusAsync(id));
    }

    [AllowAnonymous]
    [HttpGet("IsExist/{loginId}")]
    public async Task<IActionResult> IsExistUserAsync(string loginId)
    {
        return Ok(await _userService.IsExistAsync(loginId));
    }
}



