namespace Patient.Persistence.Repositories;

public class UserPhotoRepository : IUserPhotoRepository
{
    private readonly DhanvantariDbContext _context;

    public UserPhotoRepository(DhanvantariDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> CreateAsync(UserPhoto userPhoto)
    {
        await _context.UserPhotos.AddAsync(userPhoto);
        await _context.SaveChangesAsync();
        return userPhoto.Id;
    }

    public async Task<bool> UpdateAsync(UserPhoto userPhoto)
    {
        _context.UserPhotos.Update(userPhoto);
        return await _context.SaveChangesAsync() > 0 ? true : false;        
    }    

    public async Task<bool> DeleteAsync(UserPhoto userPhoto)
    {
        _context.UserPhotos.Remove(userPhoto);
        return await _context.SaveChangesAsync() > 0 ? true : false;        
    }

    public async Task<IEnumerable<UserPhoto>> GetAllAsync()
    {
        var userPhotos = await _context.UserPhotos.AsNoTracking().ToListAsync();
        return userPhotos;
    }

    public async Task<UserPhoto> GetByIdAsync(Guid id)
    {
        var userPhoto = await _context.UserPhotos.FirstOrDefaultAsync(u => u.Id == id);
        return userPhoto;
    }
    
}
