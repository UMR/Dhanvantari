namespace Patient.Infrastructure.Extensions;

public static class IdentityServerBuilderExtensions
{
    public static IIdentityServerBuilder AddCustomUserStore(this IIdentityServerBuilder builder)
    {            
        builder.AddProfileService<ProfileService>();
        builder.AddResourceOwnerValidator<ResourceOwnerPasswordValidator>();

        return builder;
    }
}
