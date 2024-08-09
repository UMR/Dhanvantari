namespace Patient.Application.Contracts.Persistence;

public interface IUserPhotoRepository
{
    Task<Guid> CreateAsync(UserPhoto userPhoto);

    Task<bool> UpdateAsync(UserPhoto userPhoto);    

    Task<bool> DeleteAsync(UserPhoto userPhoto);

    Task<IEnumerable<UserPhoto>> GetAllAsync();

    Task<UserPhoto> GetByIdAsync(Guid id);       

}
