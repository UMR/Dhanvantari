namespace Patient.Application.Features;

public interface IUserService
{
    Task<BaseCommandResponse> CreateAsync(UserForCreateDto request);

    Task<BaseCommandResponse> UpdateAsync(Guid id, UserForUpdateDto request);

    Task<BaseCommandResponse> UpdateStatusAsync(Guid id);

    Task<BaseCommandResponse> DeleteAsync(Guid id);

    Task<UserForListDto> GetUserAsync(string loginId, string pin);

    Task<UserForListDto> GetByIdAsync(Guid id);

    Task<bool> IsExistAsync(string loginId);

    Task<bool> IsActiveAsync(Guid id);

    Task<List<UserForListDto>> GetAllAsync();
    
}
