using System.Collections.Generic;
using SafariAPI.Models;

namespace SafariAPI.Services
{
   public class LoginService
   {
      public List<UserInfo> fixedData = new List<UserInfo>
      {
         new UserInfo(-3,"JonStewart@example.example", "password"), 
         new UserInfo(-4,"bigstinkus@stink.stank", "trash")
      };

      public IEnumerable<UserInfo> GetUsers()
      {
         return fixedData;
      }

      public UserInfo GetFirstUser()
      {
         return fixedData[0];
      }
   }
}