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

    public Task<BaseCommandResponse> CreateAsync(UserForCreateDto request)
    {
        throw new NotImplementedException();
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
