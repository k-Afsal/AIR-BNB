using AirBnb_Backend.Models;
using AirBnb_Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace AirBnb_Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WishlistController : ControllerBase
{
    private readonly IWishlistService _service;

    public WishlistController(IWishlistService service)
    {
        _service = service;
    }

    // In a real app, userId would come from auth context. Here we stub it.
    private string GetCurrentUserId() => "demo-user";

    [HttpGet]
    public async Task<ActionResult<List<Property>>> Get(CancellationToken cancellationToken)
    {
        var items = await _service.GetWishlistAsync(GetCurrentUserId(), cancellationToken);
        return Ok(items);
    }

    public record ToggleRequest(string PropertyId);

    [HttpPost]
    public async Task<IActionResult> Toggle([FromBody] ToggleRequest request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.PropertyId))
        {
            return BadRequest(new { message = "propertyId is required" });
        }

        var result = await _service.ToggleAsync(GetCurrentUserId(), request.PropertyId, cancellationToken);
        if (!result.Success)
        {
            return NotFound(new { message = "Property not found." });
        }

        return Ok(new { success = true, message = result.Message, wishlist = result.Wishlist });
    }
}


