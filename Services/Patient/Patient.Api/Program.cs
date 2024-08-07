
var builder = WebApplication.CreateBuilder(args);

builder.AddInfrastructureServices();
builder.AddPersistenceServices();
builder.AddApplicationServices();
builder.AddApiServices();

var app = builder.Build();

SeedData.PopulateDb(app);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();
app.UseIdentityServer();

app.UseCors(ApplicationConstant.CorsPolicy);

app.MapControllers();

app.Run();
