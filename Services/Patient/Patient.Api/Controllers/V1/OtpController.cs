namespace Patient.Api.Controllers.V1;

[Route("api/v1/[controller]")]
[ApiController]
public class OtpController : ControllerBase
{
    private readonly IOtpService _otpService;

    public OtpController(IOtpService otpService)
    {
        _otpService = otpService;
    }

    [AllowAnonymous]
    [HttpPost("generate")]
    public IActionResult GenerateOtp([FromBody] string key)
    {              
        return Ok(_otpService.GenerateOtp(key));
    }

    [AllowAnonymous]
    [HttpPost("verify")]
    public IActionResult VerifyOtp([FromBody] OtpVerificationRequest request)
    {
        return Ok(_otpService.VerifyOtp(request.Key, request.Otp));        
    }
}



