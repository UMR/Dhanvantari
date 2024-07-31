namespace Patient.Application.Wrapper;

public class BaseCommandResponse
{
    public BaseCommandResponse()
    {
        Errors = Array.Empty<string>();
    }
    public bool Success { get; set; }
    public string Message { get; set; }
    public string[] Errors { get; set; }
}
