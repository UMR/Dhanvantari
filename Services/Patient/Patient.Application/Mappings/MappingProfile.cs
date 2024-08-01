namespace Patient.Application.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<User, UserForListDto>().ReverseMap();       
    }
}
