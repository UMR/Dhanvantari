namespace Patient.Application.Features;

public class UserCreateDtoValidator : AbstractValidator<UserCreateDto>
{
    private readonly IUserRepository _userRepository;

    public UserCreateDtoValidator(IServiceProvider serviceProvider)
    {
        _userRepository = serviceProvider.GetService<IUserRepository>();

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

        RuleFor(a => a.Pin)
            .NotEmpty()
            .WithMessage("{PropertyName} is required")
            .MaximumLength(6)
            .WithMessage("{PropertyName} must not exceed 6 characters");

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

    //private bool IsExistUsername(string username)
    //{
    //    return _userRepository.IsExistUsername(username).Result;
    //}

    //private bool IsExistEmail(string email)
    //{
    //    return _userRepository.IsExistEmail(email).Result;
    //}
}
