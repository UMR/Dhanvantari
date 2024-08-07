namespace Patient.Persistence.Repositories;

public class UserRepository : IUserRepository
{
    private readonly DhanvantariDbContext _context;

    public UserRepository(DhanvantariDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> CreateAsync(User user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
        return user.Id;
    }

    public async Task<bool> UpdateAsync(User user)
    {
        _context.Users.Update(user);
        return await _context.SaveChangesAsync() > 0 ? true : false;        
    }

    public async Task<bool> DeleteAsync(User user)
    {
        _context.Users.Remove(user);
        return await _context.SaveChangesAsync() > 0 ? true : false;        
    }

    public async Task<IEnumerable<User>> GetAllAsync()
    {
        var user = await _context.Users.AsNoTracking().ToListAsync();
        return user;
    }

    public async Task<User> GetByIdAsync(Guid id)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        return user;
    }    

    public async Task<User> GetAsync(string loginId, string password)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => (u.Email.ToUpper() == loginId.Trim().ToUpper() || u.Mobile == loginId.Trim())
            && u.Password == password.Trim());
        return user;
    }

    public async Task<bool> IsExistAsync(string loginId)
    {
        var result = await _context.Users.AnyAsync(u => u.Email.ToUpper() == loginId.Trim().ToUpper() || u.Mobile == loginId.Trim());
        return result;
    }

    public async Task<byte> IsActiveAsync(Guid id)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        return user != null ? user.Status : (Byte)0;
    }
}
