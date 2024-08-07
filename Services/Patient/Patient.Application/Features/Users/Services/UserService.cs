namespace Patient.Application.Features.Users.Services;

public class UserService : BaseService, IUserService
{
    private readonly IUserRepository _userRepo;

    public UserService(IMapper mapper,
        IServiceProvider serviceProvider,
        ICurrentUserService currentUserService,
        IUserRepository userRepo) : base(mapper, serviceProvider, currentUserService)
    {
        _userRepo = userRepo;
    }

    public async Task<BaseCommandResponse> CreateAsync(UserForCreateDto request)
    {
        var response = new BaseCommandResponse();
        var validator = new UserForCreateDtoValidator(_serviceProvider);
        var validationResult = await validator.ValidateAsync(request);

        if (validationResult.IsValid == false)
        {
            response.Success = false;
            response.Message = "Creating Failed";
            response.Errors = validationResult.Errors.Select(e => e.ErrorMessage).ToArray();
            return response;
        }        

        var entity = new User
        {            
            FirstName = request.FirstName,
            LastName = request.LastName,
            Mobile = request.Mobile,
            Email = request.Email,
            Password = request.Password,           
            CreatedDate = DateTime.Now,            
            UpdatedDate = DateTime.Now            
        };

        await _userRepo.CreateAsync(entity);

        response.Success = true;
        response.Message = "Creating Successful";
        return response;
    }

    public Task<BaseCommandResponse> UpdateAsync(Guid guid, UserForUpdateDto request)
    {
        throw new NotImplementedException();
    }

    public Task<BaseCommandResponse> UpdateStatusAsync(Guid guid)
    {
        throw new NotImplementedException();
    }

    public Task<BaseCommandResponse> DeleteAsync(Guid guid)
    {
        throw new NotImplementedException();
    }

    public async Task<List<UserForListDto>> GetAllAsync()
    {
        var usersFromRepo = await _userRepo.GetAllAsync();
        var usersToReturn = _mapper.Map<List<UserForListDto>>(usersFromRepo);
        return usersToReturn;
    }

    public async Task<UserForListDto> GetByIdAsync(Guid id)
    {
        var userFromRepo = await _userRepo.GetByIdAsync(id);
        var userToReturn = _mapper.Map<UserForListDto>(userFromRepo);
        return userToReturn;
    }

    public async Task<bool> IsExistAsync(string loginId) 
    {
        return await _userRepo.IsExistAsync(loginId);
    }

    public async Task<bool> IsActiveAsync(Guid id)
    {
        var status = await _userRepo.IsActiveAsync(id);
        if (status == 1) 
        {
            return true;
        }

        return false;
    }

    public async Task<UserForListDto> GetUserAsync(string loginId, string password)
    {
        var userFromRepo = await _userRepo.GetAsync(loginId, password);
        var userToReturn = _mapper.Map<UserForListDto>(userFromRepo);
        return userToReturn;
    }
}
