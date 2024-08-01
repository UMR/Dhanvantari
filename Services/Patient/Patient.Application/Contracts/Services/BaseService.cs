namespace Patient.Application.Contracts.Services;

public abstract class BaseService
{
    protected readonly IMapper _mapper;
    protected readonly IServiceProvider _serviceProvider;
    protected readonly ICurrentUserService _currentUserService;

    public BaseService(IMapper mapper, IServiceProvider serviceProvider, ICurrentUserService currentUserService)
    {
        _mapper = mapper;
        _serviceProvider = serviceProvider;
        _currentUserService = currentUserService;
    }
}
