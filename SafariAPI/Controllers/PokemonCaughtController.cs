using Microsoft.AspNetCore.Mvc;
using SafariAPI.Services;
using SafariAPI.Models;
using System.Collections.Generic;

namespace SafariAPI.Controllers
{

   [ApiController]
   [Route("[controller]")]
   public class PokemonCaughtController : ControllerBase
   {
      readonly LoginServiceSQL _PokeLogsFromSQL;

      public PokemonCaughtController(LoginServiceSQL pokeLog)
      {
         _PokeLogsFromSQL = pokeLog;
      }

      [HttpGet]
      public IEnumerable<PokemonCaught> GetLogsFromDB() 
      {
         return _PokeLogsFromSQL.GetPokeLogs();
      }

      [HttpPost]
      public int CreatePokeLog(PokemonCaught logToCreate)
      {
         return _PokeLogsFromSQL.CreatePokeLog(logToCreate);
      }
   }
}