namespace Patient.Application.Features;

public interface IUserPhotoService
{
    Task<BaseCommandResponse> CreateAsync(UserPhotoCreateDto request);

    Task<BaseCommandResponse> UpdateAsync(Guid id, UserPhotoUpdateDto request);    

    Task<BaseCommandResponse> DeleteAsync(Guid id);    

    Task<UserPhotoListDto> GetByIdAsync(Guid id);
    
    Task<List<UserPhotoListDto>> GetAllAsync();
    
}
