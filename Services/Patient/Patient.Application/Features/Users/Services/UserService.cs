using Patient.Application.Wrapper;

namespace Patient.Application.Features.Users.Services;

public class UserService : IUserService
{
    public Task<BaseCommandResponse> CreateAsync(UserForCreateDto request)
    {
        throw new NotImplementedException();
    }

    public Task<UserForListDto> GetUser(string userName, string password)
    {
        throw new NotImplementedException();
    }

    public Task<UserForListDto> GetUser(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task<List<UserForListDto>> GetUsers()
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsActiveUser(Guid id)
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
}
