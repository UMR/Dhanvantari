namespace Patient.Application.Contracts.Infrastructure;

public interface IOtpService
{
    BaseQueryResponse<String> GenerateOtp(string key);

    BaseQueryResponse<String> VerifyOtp(string key, string otp);
}
