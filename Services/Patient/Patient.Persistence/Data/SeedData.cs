namespace Patient.Persistence.Data
{
    public class SeedData
    {
        public static void PopulateDb(IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.CreateScope();
            //AddInitialData(serviceScope.ServiceProvider.GetService<HRDbContext>(), serviceScope.ServiceProvider.GetService<IPasswordHasher>());
        }

        //private static void AddInitialData(DhanvantariDbContext context, IPasswordHasher passwordHasher)
        //{
        //    context.Database.EnsureCreated();

        //    if (!context.Roles.Any())
        //    {
        //        var roles = new List<Role>()
        //        {
        //            new Role { Name = "Admin"},
        //            new Role { Name = "HR"},
        //            new Role { Name = "Employee"}
        //        };

        //        context.Roles.AddRange(roles);
        //        context.SaveChanges();
        //    }

        //    if (!context.Users.Any())
        //    {
        //        byte[] passwordHash, passwordSalt;

        //        passwordHasher.CreatePasswordHash("123456", out passwordHash, out passwordSalt);

        //        var orders = new List<User>()
        //        {
        //            new User
        //            {
        //                FirstName = "Captain",
        //                LastName = "Black",
        //                Email = "test@test.com",
        //                PasswordHash=passwordHash,
        //                PasswordSalt=passwordSalt,
        //                Roles = new List<UserRole>()
        //                {
        //                    new UserRole { UserId = 1, RoleId = 1 }                             
        //                }
        //            }
        //        };

        //        context.Users.AddRange(orders);
        //        context.SaveChanges();
        //    }

        //    if (!context.Permissions.Any())
        //    {
        //        var permissions = new List<Permission>()
        //        {
        //            new Permission { Name = "Permission.Role.Read"},
        //            new Permission { Name = "Permission.Role.Create"},
        //            new Permission { Name = "Permission.Role.Update"},
        //            new Permission { Name = "Permission.Role.Delete"}
        //        };

        //        context.Permissions.AddRange(permissions);
        //        context.SaveChanges();
        //    }

        //    if (!context.RolePermissions.Any())
        //    {
        //        var rolePermissions = new List<RolePermission>()
        //        {
        //            new RolePermission { RoleId = 1, PermissionId = 1 },
        //            new RolePermission { RoleId = 2, PermissionId = 2 },
        //            new RolePermission { RoleId = 3, PermissionId = 3 },                    
        //        };

        //        context.RolePermissions.AddRange(rolePermissions);
        //        context.SaveChanges();
        //    }
        //}
    }
}
