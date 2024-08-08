namespace Patient.Application.Contracts.Persistence;

public interface IUserRepository
{
    Task<Guid> CreateAsync(User user);

    Task<bool> UpdateAsync(User user);

    Task<bool> DeleteAsync(User user);

    Task<IEnumerable<User>> GetAllAsync();

    Task<User> GetByIdAsync(Guid id);

    Task<User> GetAsync(string loginId, string pin);

    Task<bool> IsExistAsync(string loginId);

    Task<UserStatus> IsActiveAsync(Guid id);    

}
