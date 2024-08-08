using System;
using System.Collections.Generic;

namespace Patient.Domain;

public partial class User
{
    public Guid Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Mobile { get; set; }

    public string Email { get; set; }

    public string Pin { get; set; }

    public DateTime? DateOfBirth { get; set; }

    public byte Status { get; set; }

    public Guid CreatedBy { get; set; }

    public DateTime CreatedDate { get; set; }

    public Guid? UpdatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public virtual ICollection<UserPhoto> UserPhotos { get; set; } = new List<UserPhoto>();
}
