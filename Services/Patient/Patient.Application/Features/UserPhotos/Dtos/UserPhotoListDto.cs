namespace Patient.Application.Features;

public class UserPhotoListDto
{
    public Guid Id { get; set; }

    public string Photo { get; set; }

    public string FileName { get; set; }

    public Guid UserId { get; set; }

    public Guid CreatedBy { get; set; }

    public DateTime CreatedDate { get; set; }

    public Guid? UpdatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }
    
}
