namespace Patient.Application.Features;

public class UserPhotoForCreateDto
{
    public Guid Id { get; set; }

    public string Photo { get; set; }

    public string FileName { get; set; }

    public Guid UserId { get; set; }
    
}
