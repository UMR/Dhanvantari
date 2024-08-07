namespace Patient.Api.Extensions;

public static class ConfigureApiServices
{
    public static WebApplicationBuilder AddApiServices(this WebApplicationBuilder builder)
    {
        builder.Services.AddScoped<ICurrentUserService, CurrentUserService>();

        builder.Services.AddControllers(config =>
        {
            config.Filters.Add<ApiExceptionFilterAttribute>();
            config.Filters.Add(new AuthorizeFilter(new AuthorizationPolicyBuilder().
                RequireAuthenticatedUser().
                RequireClaim(builder.Configuration["IdentityServer:ClaimType"], builder.Configuration["IdentityServer:ClaimValue"]).Build()));
        });

        builder.Services.AddCors(o =>
        {
            o.AddPolicy(ApplicationConstant.CorsPolicy,
                builder => builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());
        });

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        return builder;
    }
}
