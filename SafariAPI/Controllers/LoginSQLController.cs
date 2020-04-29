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
      public bool AddUser(UserInfo userToAdd)
      {
         List<UserInfo> Info = new List<UserInfo>(_UsersFromSQL.GetUsers());
         foreach(var item in Info)
         {
            if(userToAdd.emailAddress == item.emailAddress)
            {
               return false;
            }
         }
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