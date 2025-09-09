using AirBnb_Backend.Models;

namespace AirBnb_Backend.Data;

public interface IWishlistRepository
{
    Task<List<Property>> GetWishlistAsync(string userId, CancellationToken cancellationToken = default);
    Task<List<Property>> ToggleAsync(string userId, string propertyId, CancellationToken cancellationToken = default);
    Task<Property?> GetPropertyByIdAsync(string propertyId, CancellationToken cancellationToken = default);
}


