using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SafariAPI.Models;
using SafariAPI.Services.Context;

namespace SafariAPI.Controllers
{
   [Route("auth")]
   [ApiController]
   public class AuthGuardController : ControllerBase
   {
      private readonly LoginContext _context;
      public AuthGuardController(LoginContext context)
      {
         _context = context;
      }

      [HttpPost, Route("login")]
      public IActionResult Login([FromBody]UserInfo user)
      {
         var verifiedUser = _context.UserInfoSql.SingleOrDefault(u => u.emailAddress == user.emailAddress && u.password == user.password);
         if (verifiedUser != null)
         {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(
               issuer: "http://localhost:5000",
               audience: "http://localhost:5000",
               claims: new List<Claim>(),
               expires: DateTime.Now.AddDays(30),
               signingCredentials: signinCredentials
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new { Token = tokenString });
         }
         return null;
      }
   }
}