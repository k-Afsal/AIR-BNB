namespace AirBnb_Backend.Models;

public class Property
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public double Rating { get; set; }
    public int Guests { get; set; }
    public int Bedrooms { get; set; }
    public int Beds { get; set; }
    public int Baths { get; set; }
    public List<string> Images { get; set; } = new();
    public string Description { get; set; } = string.Empty;
    public List<string> Amenities { get; set; } = new();
    public HostInfo Host { get; set; } = new();
}

public class HostInfo
{
    public string Name { get; set; } = string.Empty;
    public string Avatar { get; set; } = string.Empty;
}


