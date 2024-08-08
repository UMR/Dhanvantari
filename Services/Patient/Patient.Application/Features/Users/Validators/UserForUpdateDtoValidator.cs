namespace Patient.Application.Features;

public class UserForUpdateDtoValidator : AbstractValidator<UserForUpdateDto>
{
    private readonly IUserRepository _userRepository;

    public UserForUpdateDtoValidator(IServiceProvider serviceProvider)
    {
        _userRepository = serviceProvider.GetService<IUserRepository>();

        RuleFor(a => a.Id)
            .NotEmpty()
            .WithMessage("{PropertyName} is required");

        RuleFor(a => a.FirstName)
            .MaximumLength(50)
            .WithMessage("{PropertyName} must not exceed 50 characters");

        RuleFor(a => a.LastName)
            .MaximumLength(50)
            .WithMessage("{PropertyName} must not exceed 50 characters");

        RuleFor(a => a.Mobile)
            .MaximumLength(20)
            .WithMessage("{PropertyName} must not exceed 20 characters");

        RuleFor(a => a.Email)
            .EmailAddress()
            .When(a => !string.IsNullOrEmpty(a.Email))
            .WithMessage("{PropertyName} is not a valid email address")
            .MaximumLength(100)
            .WithMessage("{PropertyName} must not exceed 100 characters");        

        RuleFor(a => a.DateOfBirth)
            .Must(BeAPastDate)
            .WithMessage("The date must be in the past.");
    }

    private bool BeAPastDate(DateTime? date)
    {
        if (!date.HasValue)
            return true;

        return date.Value.Date < DateTime.Now.Date;
    }

    //private bool IsExistEmailExceptMe(string email, string id)
    //{
    //    return _userRepository.IsExistEmailExceptMe(email,new Guid(id)).Result;
    //}
}
