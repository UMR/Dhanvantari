namespace Patient.Application.Features;

public class UserForUpdateDtoValidator : AbstractValidator<UserForUpdateDto>
{
    private readonly IUserRepository _userRepository;

    public UserForUpdateDtoValidator(IServiceProvider serviceProvider)
    {
        _userRepository = serviceProvider.GetService<IUserRepository>();

        RuleFor(a => a.FirstName)
            .NotEmpty().WithMessage("{PropertyName} is required")
            .MaximumLength(50).WithMessage("{PropertyName} must not exceed 50 characters");

        RuleFor(a => a.LastName)
            .NotEmpty().WithMessage("{PropertyName} is required")
            .MaximumLength(50).WithMessage("{PropertyName} must not exceed 50 characters");

        RuleFor(a => a.Email)            
            .MaximumLength(20).WithMessage("{PropertyName} must not exceed 20 characters");

        RuleFor(a => a.Mobile)            
            .MaximumLength(100).WithMessage("{PropertyName} must not exceed 100 characters");

        RuleFor(a => a.Mobile)
            .MaximumLength(100).WithMessage("{PropertyName} must not exceed 100 characters");

        //RuleFor(x => x)
        //   .Must(x => !IsExistEmailExceptMe(x.Email, x.Id))
        //   .WithMessage("Email already exist");
    }

    //private bool IsExistEmailExceptMe(string email, string id)
    //{
    //    return _userRepository.IsExistEmailExceptMe(email,new Guid(id)).Result;
    //}
}
