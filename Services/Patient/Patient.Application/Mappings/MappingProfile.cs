namespace Patient.Application.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<User, UserListDto>().ReverseMap();
        CreateMap<UserPhoto, UserPhotoListDto>()
            .ForMember(d => d.Photo, opt => opt.MapFrom(s => Convert.ToBase64String(s.Photo)));
    }
}
