namespace Patient.Application.Contracts.Persistence;

public interface IUserRepository
{
    //Task<Guid> Insert(User user);

    //Task<Guid> Update(User user);

    //Task<Guid> Delete(User user);

    //Task<User> GetUser(string userName, string password);

    //Task<List<User>> GetAllUser();

    //Task<User> GetUser(Guid id);    

    Task<bool> IsExistUsername(string username);

    Task<bool> IsExistEmail(string email);

    Task<bool> IsExistEmailExceptMe(string email, Guid id);

    Task<bool> IsActiveUser(Guid id);    

}
