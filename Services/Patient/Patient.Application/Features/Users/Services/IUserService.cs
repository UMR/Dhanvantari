namespace Patient.Application.Features;

public interface IUserService
{
    Task<BaseCommandResponse> CreateAsync(UserCreateDto request);

    Task<BaseCommandResponse> UpdateAsync(Guid id, UserUpdateDto request);

    Task<BaseCommandResponse> UpdateStatusAsync(Guid id);

    Task<BaseCommandResponse> DeleteAsync(Guid id);

    Task<UserListDto> GetUserAsync(string loginId, string pin);

    Task<UserListDto> GetByIdAsync(Guid id);

    Task<bool> IsExistAsync(string loginId);

    Task<bool> IsActiveAsync(Guid id);

    Task<List<UserListDto>> GetAllAsync();
    
}
