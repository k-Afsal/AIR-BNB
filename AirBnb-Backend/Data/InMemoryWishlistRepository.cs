using AirBnb_Backend.Models;

namespace AirBnb_Backend.Data;

public class InMemoryWishlistRepository : IWishlistRepository
{
    private readonly Dictionary<string, List<string>> _userIdToPropertyIds = new();
    private readonly Dictionary<string, Property> _propertiesById = new();

    public InMemoryWishlistRepository()
    {
        // Seed with a few example properties. In a real app, load from DB.
        var seed = new List<Property>
        {
            new Property { Id = "p1", Title = "Sunny Loft", Location = "Lisbon, Portugal", Price = 120, Rating = 4.7, Guests = 2, Bedrooms = 1, Beds = 1, Baths = 1 },
            new Property { Id = "p2", Title = "Cozy Cabin", Location = "Banff, Canada", Price = 200, Rating = 4.9, Guests = 4, Bedrooms = 2, Beds = 3, Baths = 1 },
            new Property { Id = "p3", Title = "City Apartment", Location = "Tokyo, Japan", Price = 150, Rating = 4.6, Guests = 3, Bedrooms = 1, Beds = 2, Baths = 1 },
        };

        foreach (var p in seed)
        {
            _propertiesById[p.Id] = p;
        }
    }

    public Task<List<Property>> GetWishlistAsync(string userId, CancellationToken cancellationToken = default)
    {
        if (!_userIdToPropertyIds.TryGetValue(userId, out var ids))
        {
            return Task.FromResult(new List<Property>());
        }

        var properties = ids
            .Where(id => _propertiesById.ContainsKey(id))
            .Select(id => _propertiesById[id])
            .ToList();

        return Task.FromResult(properties);
    }

    public Task<List<Property>> ToggleAsync(string userId, string propertyId, CancellationToken cancellationToken = default)
    {
        if (!_propertiesById.ContainsKey(propertyId))
        {
            throw new KeyNotFoundException("Property not found");
        }

        if (!_userIdToPropertyIds.TryGetValue(userId, out var ids))
        {
            ids = new List<string>();
            _userIdToPropertyIds[userId] = ids;
        }

        if (ids.Contains(propertyId))
        {
            ids.Remove(propertyId);
        }
        else
        {
            ids.Add(propertyId);
        }

        var updated = ids.Select(id => _propertiesById[id]).ToList();
        return Task.FromResult(updated);
    }

    public Task<Property?> GetPropertyByIdAsync(string propertyId, CancellationToken cancellationToken = default)
    {
        _propertiesById.TryGetValue(propertyId, out var property);
        return Task.FromResult(property);
    }
}


