namespace Patient.Application.Features;

public class UserPhotoCreateDtoValidator : AbstractValidator<UserPhotoCreateDto>
{
    private readonly IUserRepository _userRepository;

    public UserPhotoCreateDtoValidator(IServiceProvider serviceProvider)
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

        RuleFor(a => a.UserId)           
            .NotEmpty()
            .WithMessage("{PropertyName} is required");       

    }    
    
}
