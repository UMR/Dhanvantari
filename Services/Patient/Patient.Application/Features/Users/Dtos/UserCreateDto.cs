namespace Patient.Application.Features;

public class UserCreateDto
{
    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Mobile { get; set; }

    public string Email { get; set; }

    public string Pin { get; set; }

    public DateTime? DateOfBirth { get; set; }    

}
