namespace Patient.Application.Wrapper;

public class BaseQueryResponse<T>
{
    public bool IsSuccessful { get; set; }

    public string ErrorMessage { get; set; }

    public T Data { get; set; }    

    public BaseQueryResponse(T data, bool isSuccessful)
    {
        IsSuccessful = isSuccessful;
        Data = data;        
    }

    public BaseQueryResponse(string errorMessage)
    {
        IsSuccessful = false;
        ErrorMessage = errorMessage;
    }
}
