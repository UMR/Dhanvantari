namespace Patient.Persistence.Repositories;

public class UserRepository : IUserRepository
{
    public Task<bool> IsActiveUser(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsExistEmail(string email)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsExistEmailExceptMe(string email, Guid id)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsExistUsername(string username)
    {
        throw new NotImplementedException();
    }
}
