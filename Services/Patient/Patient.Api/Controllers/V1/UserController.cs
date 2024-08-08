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
    [HttpPost("generate")]
    public IActionResult GenerateOtp([FromBody] string key)
    {
        return Ok();
    }

    [AllowAnonymous]
    [HttpPost("verify")]
    public IActionResult VerifyOtp([FromBody] OtpVerificationRequest request)
    {
        return Ok();
    }
}



