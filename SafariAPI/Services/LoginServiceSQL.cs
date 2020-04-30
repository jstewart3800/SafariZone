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
      public bool InsertUser(UserInfo user)
      {

         //Adds item to DB
         var userItem = _context.Add(user);

         //Save Changes
         _context.SaveChanges();

         //Return the id of the new user
         return true;
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
         return _context.SaveChanges() != 0;
      }

      //----------------------------------------------------------//   

      // D - Delete
      public bool DeleteUserById(int id)
      {
         var user = GetUserById(id);
         _context.Remove(user);
         return _context.SaveChanges() != 0;
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
      public PokemonCaught GetLogByEmail(string userEmail)
      {
         return _context.PokeLogsSql.SingleOrDefault(x => x.userEmail == userEmail);
      }
      public PokemonCaught GetLogById(int id)
      {
         return _context.PokeLogsSql.SingleOrDefault(x => x.id == id);
      }

      // U - Update
      public bool UpdateLogByEmail(PokemonCaught logToUpdate)
      {
         // var log = GetLogByEmail(logToUpdate.userEmail);
         _context.Update<PokemonCaught>(logToUpdate);
         //if you don't do a check for it being 0 , then it would update all the fields
         return _context.SaveChanges() != 0;
      }
      
      // D - Delete
      public bool DeleteLog(int id)
      {
         var log = GetLogById(id);
         _context.Remove(log);
         return _context.SaveChanges() != 0;
      }
   }
}