
const string CorsPolicy = "CorsPolicy";

var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddScoped<ICurrentUserService, CurrentUserService>();
builder.AddApplicationServices();
builder.AddInfrastructureServices();
builder.AddPersistenceServices();

builder.Services.AddControllers(config =>
{
    config.Filters.Add(new AuthorizeFilter(new AuthorizationPolicyBuilder().
        RequireAuthenticatedUser().
        RequireClaim(builder.Configuration["IdentityServer:ClaimType"], builder.Configuration["IdentityServer:ClaimValue"]).Build()));
});

builder.Services.AddCors(o =>
{
    o.AddPolicy(CorsPolicy,
        builder => builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();
app.UseIdentityServer();

app.UseCors(CorsPolicy);

app.MapControllers();

app.Run();
