namespace Patient.Application.Features;

public interface IUserService
{
    Task<BaseCommandResponse> CreateAsync(UserForCreateDto request);

    Task<BaseCommandResponse> UpdateAsync(Guid guid, UserForUpdateDto request);

    Task<BaseCommandResponse> UpdateStatusAsync(Guid guid);

    Task<BaseCommandResponse> DeleteAsync(Guid guid);

    Task<UserForListDto> GetUserAsync(string loginId, string password);

    Task<UserForListDto> GetByIdAsync(Guid id);    

    Task<bool> IsActiveAsync(Guid id);

    Task<List<UserForListDto>> GetAllAsync();
    
}
