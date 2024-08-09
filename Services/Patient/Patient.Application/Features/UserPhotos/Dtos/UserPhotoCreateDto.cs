namespace Patient.Application.Features;

public class UserPhotoCreateDto
{
    public Guid Id { get; set; }

    public string Photo { get; set; }

    public string FileName { get; set; }

    public Guid UserId { get; set; }
    
}
