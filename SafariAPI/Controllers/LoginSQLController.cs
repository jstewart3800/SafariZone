using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SafariAPI.Models;
using SafariAPI.Services;

namespace SafariAPI.Controllers
{

   [ApiController]
   [Route("[controller]")]

   public class LoginSQLController : ControllerBase
   {

      readonly LoginServiceSQL _UsersFromSQL;

      public LoginSQLController(LoginServiceSQL users)
      {
         _UsersFromSQL = users;
      }

      [HttpGet]
      public IEnumerable<UserInfo> GetUsersFromDB()
      {
         return _UsersFromSQL.GetUsers();
      }

      [HttpPost]
      public int AddUser(UserInfo userToAdd)
      {
         // Pass userToAdd to LoginServiceSQL
         return _UsersFromSQL.InsertUser(userToAdd);
      }

      [HttpPost("update")]
      public bool UpdateUser(UserInfo userToUpdate)
      {
         return _UsersFromSQL.UpdateUser(userToUpdate);
      }

      [HttpDelete("{id}")]
      public bool DeleteUser(int id)
      {
         return _UsersFromSQL.DeleteUserById(id);
      }
   }
}