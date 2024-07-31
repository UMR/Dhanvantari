namespace atient.Application.Contracts.Infrastructure;

public interface IDateTimeService
{
    DateTime Now { get; }

    int CurrentYear { get; }

    int CurrentMonth { get; }

    int CurrentDay { get; }
}
