namespace Patient.Application.Contracts.Persistence;

public interface IUserRepository
{
    Task<Guid> Insert(User user);

    Task<Guid> Update(User user);

    Task<Guid> Delete(User user);

    Task<IEnumerable<User>> GetAll();

    Task<User> Get(Guid id);

    Task<User> IsValid(string emailOrMobile, string password);

    Task<bool> IsExist(string emailOrMobile);

    Task<byte> IsActive(Guid id);    

}
