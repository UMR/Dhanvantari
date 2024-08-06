namespace Patient.Api.Controllers.V1;

[Route("api/[controller]")]
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
        string otp = _otpService.GenerateOtp(key);        
        return Ok(new { Otp = otp });
    }

    [AllowAnonymous]
    [HttpPost("verify")]
    public IActionResult VerifyOtp([FromBody] OtpVerificationRequest request)
    {
        bool isValid = _otpService.VerifyOtp(request.Key, request.Otp);
        if (isValid)
        {
            return Ok(new { Message = "OTP is valid" });
        }
        return BadRequest(new { Message = "Invalid OTP" });
    }
}



