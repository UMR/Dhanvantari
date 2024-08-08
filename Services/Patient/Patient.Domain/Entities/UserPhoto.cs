using System;
using System.Collections.Generic;

namespace Patient.Domain;

public partial class UserPhoto
{
    public Guid Id { get; set; }

    public byte[] Photo { get; set; }

    public string FileName { get; set; }

    public Guid UserId { get; set; }

    public Guid CreatedBy { get; set; }

    public DateTime CreatedDate { get; set; }

    public Guid? UpdatedBy { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public virtual User User { get; set; }
}
