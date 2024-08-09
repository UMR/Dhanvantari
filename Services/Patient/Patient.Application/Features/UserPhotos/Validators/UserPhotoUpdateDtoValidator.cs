namespace Patient.Application.Features;

public class UserPhotoUpdateDtoValidator : AbstractValidator<UserPhotoUpdateDto>
{
    private readonly IUserRepository _userRepository;

    public UserPhotoUpdateDtoValidator(IServiceProvider serviceProvider)
    {
        _userRepository = serviceProvider.GetService<IUserRepository>();

        RuleFor(a => a.Photo)
            .NotEmpty()
            .WithMessage("{PropertyName} is required");

        RuleFor(a => a.FileName)
            .NotEmpty()
            .WithMessage("{PropertyName} is required")
            .MaximumLength(100)
            .WithMessage("{PropertyName} must not exceed 100 characters");       

    }
    
}
