namespace Patient.Application.Features.Users.Services;

public class UserService : BaseService, IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IMapper mapper,
        IServiceProvider serviceProvider,
        ICurrentUserService currentUserService,
        IUserRepository userRepository) : base(mapper, serviceProvider, currentUserService)
    {
        _userRepository = userRepository;
    }

    public async Task<BaseCommandResponse> CreateAsync(UserCreateDto request)
    {
        var response = new BaseCommandResponse();
        var validator = new UserCreateDtoValidator(_serviceProvider);
        var validationResult = await validator.ValidateAsync(request);

        if (validationResult.IsValid == false)
        {
            response.Success = false;
            response.Message = "Creating Failed";
            response.Errors = validationResult.Errors.Select(e => e.ErrorMessage).ToArray();
            return response;
        }

        Guid id = Guid.NewGuid();
        var user = new User
        {
            Id = id,
            FirstName = request.FirstName,
            LastName = request.LastName,
            Mobile = request.Mobile,
            Email = request.Email,
            Pin = request.Pin,
            Status = (byte)UserStatus.Pending,
            CreatedBy = id
        };
        await _userRepository.CreateAsync(user);

        response.Success = true;
        response.Message = "Creating Successful";
        return response;
    }

    public async Task<BaseCommandResponse> UpdateAsync(Guid id, UserUpdateDto request)
    {
        var response = new BaseCommandResponse();
        var validator = new UserUpdateDtoValidator(_serviceProvider);
        var validationResult = await validator.ValidateAsync(request);

        if (validationResult.IsValid == false)
        {
            response.Success = false;
            response.Message = "Creating Failed";
            response.Errors = validationResult.Errors.Select(e => e.ErrorMessage).ToArray();
            return response;
        }

        var user = await _userRepository.GetByIdAsync(id);
        if (user is null)
        {
            throw new NotFoundException(nameof(User), id.ToString());
        }

        user.Id = id;
        user.FirstName = request.FirstName;
        user.LastName = request.LastName;
        user.Email = request.Email;
        user.Mobile = request.Mobile;
        user.DateOfBirth = request.DateOfBirth;
        user.Status = (byte)UserStatus.Active;
        user.UpdatedBy = id;
        user.UpdatedDate = DateTime.Now;
        await _userRepository.UpdateAsync(user);

        response.Success = true;
        response.Message = "Updating Successful";
        return response;
    }

    public async Task<BaseCommandResponse> UpdateStatusAsync(Guid id)
    {
        var response = new BaseCommandResponse();

        var user = await _userRepository.GetByIdAsync(id);
        if (user is null)
        {
            throw new NotFoundException(nameof(User), id.ToString());
        }
        await _userRepository.UpdateStatusAsync(user);

        response.Success = true;
        response.Message = "Updating Successful";
        return response;
    }

    public async Task<BaseCommandResponse> DeleteAsync(Guid id)
    {
        var response = new BaseCommandResponse();
        var entity = await _userRepository.GetByIdAsync(id);

        if (entity == null)
        {
            throw new NotFoundException(nameof(User), id);
        }

        await _userRepository.DeleteAsync(entity);

        response.Success = true;
        response.Message = "Deleting Successful";
        return response;
    }

    public async Task<List<UserListDto>> GetAllAsync()
    {
        var usersFromRepo = await _userRepository.GetAllAsync();
        var usersToReturn = _mapper.Map<List<UserListDto>>(usersFromRepo);
        return usersToReturn;
    }

    public async Task<UserListDto> GetByIdAsync(Guid id)
    {
        var userFromRepo = await _userRepository.GetByIdAsync(id);
        var userToReturn = _mapper.Map<UserListDto>(userFromRepo);
        return userToReturn;
    }

    public async Task<bool> IsExistAsync(string loginId)
    {
        return await _userRepository.IsExistAsync(loginId);
    }

    public async Task<bool> IsActiveAsync(Guid id)
    {
        UserStatus status = await _userRepository.IsActiveAsync(id);
        if (status == UserStatus.Active || status == UserStatus.Pending)
        {
            return true;
        }
        return false;
    }

    public async Task<UserListDto> GetUserAsync(string loginId, string password)
    {
        var userFromRepo = await _userRepository.GetAsync(loginId, password);
        var userToReturn = _mapper.Map<UserListDto>(userFromRepo);
        return userToReturn;
    }
}
