namespace Patient.Application.Features.Users.Services;

public class UserPhotoService : BaseService, IUserPhotoService
{
    private readonly IUserPhotoRepository _userPhotoRepository;

    public UserPhotoService(IMapper mapper,
        IServiceProvider serviceProvider,
        ICurrentUserService currentUserService,
        IUserPhotoRepository userPhotoRepository) : base(mapper, serviceProvider, currentUserService)
    {
        _userPhotoRepository = userPhotoRepository;
    }

    public async Task<BaseCommandResponse> CreateAsync(UserPhotoCreateDto request)
    {
        var response = new BaseCommandResponse();
        var validator = new UserPhotoCreateDtoValidator(_serviceProvider);
        var validationResult = await validator.ValidateAsync(request);

        if (validationResult.IsValid == false)
        {
            response.Success = false;
            response.Message = "Creating Failed";
            response.Errors = validationResult.Errors.Select(e => e.ErrorMessage).ToArray();
            return response;
        }
        
        var userPhotoToCreate = new UserPhoto
        {            
            Photo = Convert.FromBase64String(request.Photo),
            FileName = request.FileName,
            UserId = request.UserId,            
            CreatedBy = request.UserId
        };
        await _userPhotoRepository.CreateAsync(userPhotoToCreate);

        response.Success = true;
        response.Message = "Creating Successful";
        return response;
    }

    public async Task<BaseCommandResponse> UpdateAsync(Guid id, UserPhotoUpdateDto request)
    {
        var response = new BaseCommandResponse();
        var validator = new UserPhotoUpdateDtoValidator(_serviceProvider);
        var validationResult = await validator.ValidateAsync(request);

        if (validationResult.IsValid == false)
        {
            response.Success = false;
            response.Message = "Creating Failed";
            response.Errors = validationResult.Errors.Select(e => e.ErrorMessage).ToArray();
            return response;
        }

        var userPhotoToUpdate = await _userPhotoRepository.GetByIdAsync(id);
        if (userPhotoToUpdate is null)
        {
            throw new NotFoundException(nameof(User), id.ToString());
        }

        userPhotoToUpdate.Id = id;
        userPhotoToUpdate.Photo = Convert.FromBase64String(request.Photo);
        userPhotoToUpdate.FileName = request.FileName;        
        userPhotoToUpdate.UpdatedBy = id;
        userPhotoToUpdate.UpdatedDate = DateTime.Now;
        await _userPhotoRepository.UpdateAsync(userPhotoToUpdate);

        response.Success = true;
        response.Message = "Updating Successful";
        return response;
    }    

    public async Task<BaseCommandResponse> DeleteAsync(Guid id)
    {
        var response = new BaseCommandResponse();
        var userPhotoToDelete = await _userPhotoRepository.GetByIdAsync(id);

        if (userPhotoToDelete == null)
        {
            throw new NotFoundException(nameof(User), id);
        }

        await _userPhotoRepository.DeleteAsync(userPhotoToDelete);

        response.Success = true;
        response.Message = "Deleting Successful";
        return response;
    }

    public async Task<List<UserPhotoListDto>> GetAllAsync()
    {
        var userPhotosFromRepo = await _userPhotoRepository.GetAllAsync();
        var userPhotosToReturn = _mapper.Map<List<UserPhotoListDto>>(userPhotosFromRepo);
        return userPhotosToReturn;
    }

    public async Task<UserPhotoListDto> GetByIdAsync(Guid id)
    {
        var userPhotoFromRepo = await _userPhotoRepository.GetByIdAsync(id);
        var userPhotoToReturn = _mapper.Map<UserPhotoListDto>(userPhotoFromRepo);
        return userPhotoToReturn;
    }   
}
