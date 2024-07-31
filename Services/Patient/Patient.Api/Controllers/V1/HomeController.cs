namespace Patient.Api.Controllers.V1;

[ApiController]
[Route("[controller]")]
public class HomeController : ControllerBase
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet()]
    public IActionResult Home()
    {
        return Ok("Welcome to Home Page");
    }
}
