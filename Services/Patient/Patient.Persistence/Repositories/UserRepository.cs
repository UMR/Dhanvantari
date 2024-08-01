namespace Patient.Persistence.Repositories;

public class UserRepository : IUserRepository
{
    private readonly DhanvantariDbContext _context;

    public UserRepository(DhanvantariDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> Insert(User user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
        return user.Id;
    }

    public async Task<Guid> Update(User user)
    {
        _context.Users.Update(user);
        await _context.SaveChangesAsync();
        return user.Id;
    }

    public async Task<Guid> Delete(User user)
    {
        _context.Users.Remove(user);
        await _context.SaveChangesAsync();
        return user.Id;
    }

    public async Task<IEnumerable<User>> GetAll()
    {
        var user = await _context.Users.AsNoTracking().ToListAsync();
        return user;
    }

    public async Task<User> Get(Guid id)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        return user;
    }

    public async Task<User> IsValid(string emailOrMobile, string password)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => (u.Email.ToUpper() == emailOrMobile.Trim().ToUpper() || u.Mobile == emailOrMobile.Trim())
            && u.Password == password.Trim());
        return user;
    }

    public async Task<bool> IsExist(string emailOrMobile)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email.ToUpper() == emailOrMobile.Trim().ToUpper() || u.Mobile == emailOrMobile.Trim());
        return user != null ? true : false;
    }

    public async Task<byte> IsActive(Guid id)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        return user != null ? user.Status : (Byte)0;
    }
}
