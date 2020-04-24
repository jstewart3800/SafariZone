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
      // GET api/values
      [HttpPost, Route("login")]
      public IActionResult UserInfo([FromBody]UserInfo user)
      {
         if (user == null)
         {
            return BadRequest("Invalid client request");
         }
         if (user.emailAddress == "bigstinkus@stink.stank" && user.password == "trash")
         {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256); // = secret key + "hash"
            var tokeOptions = new JwtSecurityToken(
                issuer: "http://localhost:5000",
                audience: "http://localhost:5000",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signinCredentials
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new { Token = tokenString });
         }
         else
         {
            return Unauthorized();
         }
      }


//----------------------------------------------------------------------------//




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