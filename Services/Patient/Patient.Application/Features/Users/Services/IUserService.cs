using Patient.Application.Wrapper;

namespace Patient.Application.Features;

public interface IUserService
{
    Task<BaseCommandResponse> CreateAsync(UserForCreateDto request);

    Task<BaseCommandResponse> UpdateAsync(Guid guid, UserForUpdateDto request);

    Task<BaseCommandResponse> UpdateStatusAsync(Guid guid);

    Task<UserForListDto> GetUser(string userName, string password);

    Task<UserForListDto> GetUser(Guid id);    

    Task<bool> IsActiveUser(Guid id);

    Task<List<UserForListDto>> GetUsers();
    
}
