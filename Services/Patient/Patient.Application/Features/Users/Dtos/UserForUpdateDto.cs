namespace Patient.Application.Features;

public class UserForUpdateDto
{
    public string Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Mobile { get; set; }

    public string Email { get; set; }    

    public DateTime? DateOfBirth { get; set; }

}
