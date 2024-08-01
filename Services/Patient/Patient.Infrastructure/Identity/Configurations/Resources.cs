namespace Patient.Infrastructure.Identity.Configurations;

public static class Resources
{
    public static List<ApiResource> GetApiResources()
    {
        var resources = new List<ApiResource>
        {
            new ApiResource
            {
                Name ="recruitment",
                Enabled = true,
                DisplayName = "Recruitment Web API Resource",
                Scopes = new List<string>
                {
                     "recruitment.fullaccess"
                }
            }
        };
        return resources;
    }
}
