using System;
using SafariAPI.Models;
using SafariAPI.Services; // HEY DOOFUS
using Microsoft.AspNetCore.Mvc; // YOUR TIMESTAMP IS 51 MINUTES
using System.Collections.Generic;

namespace SafariAPI.Controllers
{
   [ApiController]
   [Route("[controller]")]
   public class LoginController : ControllerBase
   {
      readonly LoginService _fixedData;

      public LoginController(LoginService fixedData) // Constructor. No need for 'private' or typing, just name of service and variable desired
      {
         _fixedData = fixedData;
      }

      [HttpGet]
      public IEnumerable<UserInfo> Get() 
      {
         return _fixedData.GetUsers();
      }

      [HttpGet("email")]
      public string GetUserEmail() 
      {
         return "Jon";
      }

      [HttpGet("first")]
      public UserInfo GetFirstUser()
      {
         return _fixedData.GetFirstUser();
      }
   }
}