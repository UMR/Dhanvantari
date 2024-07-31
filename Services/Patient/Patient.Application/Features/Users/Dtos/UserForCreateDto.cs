namespace Patient.Application.Features;

public class UserForCreateDto
{
    public string UserName { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Password { get; set; }

    public string Email { get; set; }

    public string Mobile { get; set; }  
    
    public bool IsActive { get; set; }
    
}
