using AirBnb_Backend.Data;
using AirBnb_Backend.Models;

namespace AirBnb_Backend.Services;

public class WishlistService : IWishlistService
{
    private readonly IWishlistRepository _repository;

    public WishlistService(IWishlistRepository repository)
    {
        _repository = repository;
    }

    public Task<List<Property>> GetWishlistAsync(string userId, CancellationToken cancellationToken = default)
    {
        return _repository.GetWishlistAsync(userId, cancellationToken);
    }

    public async Task<(bool Success, string Message, List<Property> Wishlist)> ToggleAsync(string userId, string propertyId, CancellationToken cancellationToken = default)
    {
        var property = await _repository.GetPropertyByIdAsync(propertyId, cancellationToken);
        if (property is null)
        {
            return (false, "Property not found.", new List<Property>());
        }

        var updated = await _repository.ToggleAsync(userId, propertyId, cancellationToken);
        var message = updated.Any(p => p.Id == propertyId)
            ? "Property added to wishlist."
            : "Property removed from wishlist.";
        return (true, message, updated);
    }
}


