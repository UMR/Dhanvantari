namespace Patient.Application.Extensions;

public static class ConfigureApplicationServices
{
    public static WebApplicationBuilder AddApplicationServices(this WebApplicationBuilder builder)
    {
        builder.AddSerilogFromAppSettings();
        builder.Services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        builder.Services.AddAutoMapper(typeof(MappingProfile));        
        builder.Services.AddScoped<IUserService, UserService>();
        builder.Services.AddScoped<IUserPhotoService, UserPhotoService>();
        return builder;
    }   

    private static WebApplicationBuilder AddSerilogFromAppSettings(this WebApplicationBuilder builder)
    {
        var logger = new LoggerConfiguration()
                .ReadFrom.Configuration(builder.Configuration)
                .Enrich.FromLogContext()
                .CreateLogger();
        builder.Logging.ClearProviders();
        builder.Logging.AddConsole();
        builder.Logging.AddSerilog(logger);

        return builder;
    }
}
