using System.Collections.Generic;
using Microsoft.EntityFrameworkCore; //Hey dingus! Start on the APItoSQL Morning Part 1 lecture 
using SafariAPI.Models;

namespace SafariAPI.Services.Context
{
   public class LoginContext : DbContext
   {
      public DbSet<UserInfo> UserInfoSql { get; set; } // Needed for each model created 
      public DbSet<PokemonCaught> PokeLogsSql { get; set; }

      public LoginContext(DbContextOptions<LoginContext> options) : base(options)
      { }

      protected override void OnModelCreating(ModelBuilder builder)
      {
         base.OnModelCreating(builder);
         SeedData(builder);
      }

      private void SeedData(ModelBuilder builder)
      {
         //Grab fixedData from service
         var fixedData = new List<UserInfo> {
            new UserInfo(1,"JonStewart@example.example", "password"),
            new UserInfo(2,"bigstinkus@stink.stank", "trash")
         };
         var fixedPokeLogs = new List<PokemonCaught> {
            new PokemonCaught(1,"example@example.com",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false),
            new PokemonCaught(2,"example2@example.com",false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false)
         };
         // This line gives the DB some seed data. Otherwise, DB starts empty
         builder.Entity<UserInfo>().HasData(fixedData);
         builder.Entity<PokemonCaught>().HasData(fixedPokeLogs);
      }
   }
}