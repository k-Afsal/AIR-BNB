var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();

// DI
builder.Services.AddSingleton<AirBnb_Backend.Data.IWishlistRepository, AirBnb_Backend.Data.InMemoryWishlistRepository>();
builder.Services.AddScoped<AirBnb_Backend.Services.IWishlistService, AirBnb_Backend.Services.WishlistService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
