namespace Patient.Infrastructure.Otp;

public class OtpService : IOtpService
{
    private readonly IMemoryCache _cache;
    private readonly Random _random;

    public OtpService(IMemoryCache cache)
    {
        _cache = cache;
        _random = new Random();
    }

    public string GenerateOtp(string key)
    {
        string otp = _random.Next(100000, 999999).ToString();
        
        var cacheOptions = new MemoryCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(1)
        };

        _cache.Set(key, otp, cacheOptions);

        return otp;
    }

    public bool VerifyOtp(string key, string otp)
    {
        if (_cache.TryGetValue(key, out string cachedOtp))
        {
            if (cachedOtp == otp)
            {
                _cache.Remove(key); 
                return true;
            }
        }

        return false;
    }
}
