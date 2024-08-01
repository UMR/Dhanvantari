namespace Patient.Persistence.Extensions;

public static class ConfigurePersistenceServices
{
    public static WebApplicationBuilder AddPersistenceServices(this WebApplicationBuilder builder)
    {
        //builder.Services.AddDbContext<InventoryDbContext>(options =>
        //{
        //    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
        //});

        //builder.Services.AddDbContext<InventoryDbContext>();
        builder.Services.AddScoped<IUserRepository, UserRepository>();

        return builder;
    }
}
