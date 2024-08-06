namespace Patient.Application.Contracts.Infrastructure;

public interface IOtpService
{
    string GenerateOtp(string key);

    bool VerifyOtp(string key, string otp);
}
