using AirBnb_Backend.Models;

namespace AirBnb_Backend.Services;

public interface IWishlistService
{
    Task<List<Property>> GetWishlistAsync(string userId, CancellationToken cancellationToken = default);
    Task<(bool Success, string Message, List<Property> Wishlist)> ToggleAsync(string userId, string propertyId, CancellationToken cancellationToken = default);
}


