namespace Patient.Application.Features;

public interface IUserService
{
    Task<BaseCommandResponse> CreateAsync(UserForCreateDto request);

    Task<BaseCommandResponse> UpdateAsync(Guid guid, UserForUpdateDto request);

    Task<BaseCommandResponse> UpdateStatusAsync(Guid guid);

    Task<BaseCommandResponse> DeleteAsync(Guid guid);

    Task<UserForListDto> GetUserAsync(string loginId, string pin);

    Task<UserForListDto> GetByIdAsync(Guid id);

    Task<bool> IsExistAsync(string loginId);

    Task<bool> IsActiveAsync(Guid id);

    Task<List<UserForListDto>> GetAllAsync();
    
}
