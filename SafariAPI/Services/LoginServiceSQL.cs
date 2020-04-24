using System.Collections.Generic;
using System.Linq;
using SafariAPI.Models;
using SafariAPI.Services.Context; 

namespace SafariAPI.Services
{
   public class LoginServiceSQL
   {
      private readonly LoginContext _context;

      public LoginServiceSQL(LoginContext context)
      {
         _context = context;
      }

      // --------------------------Login----------------- //

      // C - Create
      public int InsertUser(UserInfo user)
      {
         //Adds item to DB
         var userItem = _context.Add(user);

         //Save Changes
         _context.SaveChanges();

         //Return the id of the new user
         return userItem.Entity.id;
      }

   //-----------------------------------------------------------//

      // R - Read
      public IEnumerable<UserInfo> GetUsers()
      {
         return _context.UserInfoSql;
      }

      public UserInfo GetUserById(int id)
      {
         return _context.UserInfoSql.SingleOrDefault(x => x.id == id);
      }

   //-----------------------------------------------------------//

      // U - Update
      public bool UpdateUser(UserInfo user)
      {
         _context.Update<UserInfo>(user);
         // WARNING: If id is 0 this will update all fields
         return _context.SaveChanges() !=0;
      }

   //----------------------------------------------------------//   

      // D - Delete
      public bool DeleteUserById(int id)
      {
         var user = GetUserById(id);
         _context.Remove(user);
         return _context.SaveChanges() !=0;
      }

      // ----------------------------- PokeLogs ------------------//

      // C - Create
      public int CreatePokeLog(PokemonCaught newLog)
      {
         var logItem = _context.Add(newLog);
         _context.SaveChanges();
         return logItem.Entity.id;
      }
      // R - Read
      public IEnumerable<PokemonCaught> GetPokeLogs()
      {
         return _context.PokeLogsSql;
      }
      // U - Update

      // D - Delete
   }
}