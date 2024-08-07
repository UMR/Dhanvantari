namespace Patient.Persistence.Data
{
    public class SeedData
    {
        public static void PopulateDb(IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.CreateScope();
            AddInitialData(serviceScope.ServiceProvider.GetService<DhanvantariDbContext>());
        }

        private static void AddInitialData(DhanvantariDbContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Users.Any())
            {
                var users = new List<User>()
                {
                    new User
                    {
                        FirstName = "Captain",
                        LastName = "Black",
                        Email = "kaptan.cse@gmail.com",
                        Mobile ="01721525318",
                        Password = "123456",
                        Status = (byte)UserStatus.Active,
                        CreatedDate = DateTime.Now,
                    }
                };

                context.Users.AddRange(users);
                context.SaveChanges();
            }
        }
    }
}
