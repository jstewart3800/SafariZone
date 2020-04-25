using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SafariAPI.Models
{
   public class PokemonCaught
   {
      [Key]
      [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

      public int id { get; set; }
      public string userEmail { get; set; }
      public bool Bulbasaur { get; set; }
      public bool Ivysaur { get; set; }
      public bool Venusaur { get; set; }
      public bool Charmander { get; set; }
      public bool Charmeleon { get; set; }
      public bool Charizard { get; set; }
      public bool Squirtle { get; set; }
      public bool Wartortle { get; set; }
      public bool Blastoise { get; set; }
      public bool Caterpie { get; set; }
      public bool Metapod { get; set; }
      public bool Butterfree { get; set; }
      public bool Weedle { get; set; }
      public bool Kakuna { get; set; }
      public bool Beedrill { get; set; }
      public bool Pidgey { get; set; }
      public bool Pidgeotto { get; set; }
      public bool Pidgeot { get; set; }
      public bool Rattata { get; set; }
      public bool Raticate { get; set; }
      public bool Spearow { get; set; }
      public bool Fearow { get; set; }
      public bool Ekans { get; set; }
      public bool Arbok { get; set; }
      public bool Pikachu { get; set; }
      public bool Raichu { get; set; }
      public bool Sandshrew { get; set; }
      public bool Sandslash { get; set; }
      public bool NidoranF { get; set; }
      public bool Nidorina { get; set; }
      public bool Nidoqueen { get; set; }
      public bool NidoranM { get; set; }
      public bool Nidorino { get; set; }
      public bool Nidoking { get; set; }
      public bool Clefairy { get; set; }
      public bool Clefable { get; set; }
      public bool Vulpix { get; set; }
      public bool Ninetales { get; set; }
      public bool Jigglypuff { get; set; }
      public bool Wigglytuff { get; set; }
      public bool Zubat { get; set; }
      public bool Golbat { get; set; }
      public bool Oddish { get; set; }
      public bool Gloom { get; set; }
      public bool Vileplume { get; set; }
      public bool Paras { get; set; }
      public bool Parasect { get; set; }
      public bool Venonat { get; set; }
      public bool Venomoth { get; set; }
      public bool Diglett { get; set; }
      public bool Dugtrio { get; set; }
      public bool Meowth { get; set; }
      public bool Persian { get; set; }
      public bool Psyduck { get; set; }
      public bool Golduck { get; set; }
      public bool Mankey { get; set; }
      public bool Primeape { get; set; }
      public bool Growlithe { get; set; }
      public bool Arcanine { get; set; }
      public bool Poliwag { get; set; }
      public bool Poliwhirl { get; set; }
      public bool Poliwrath { get; set; }
      public bool Abra { get; set; }
      public bool Kadabra { get; set; }
      public bool Alakazam { get; set; }
      public bool Machop { get; set; }
      public bool Machoke { get; set; }
      public bool Machamp { get; set; }
      public bool Bellsprout { get; set; }
      public bool Weepinbell { get; set; }
      public bool Victreebell { get; set; }
      public bool Tentacool { get; set; }
      public bool Tentacruel { get; set; }
      public bool Geodude { get; set; }
      public bool Graveler { get; set; }
      public bool Golem { get; set; }
      public bool Ponyta { get; set; }
      public bool Rapidash { get; set; }
      public bool Slowpoke { get; set; }
      public bool Slowbro { get; set; }
      public bool Magnemite { get; set; }
      public bool Magneton { get; set; }
      public bool Farfetchd { get; set; } // Named Farfetch'd in Google Sheets
      public bool Doduo { get; set; }
      public bool Dodrio { get; set; }
      public bool Seel { get; set; }
      public bool Dewgong { get; set; }
      public bool Grimer { get; set; }
      public bool Muk { get; set; }
      public bool Shellder { get; set; }
      public bool Cloyster { get; set; }
      public bool Gastly { get; set; }
      public bool Haunter { get; set; }
      public bool Gengar { get; set; }
      public bool Onix { get; set; }
      public bool Drowzee { get; set; }
      public bool Hypno { get; set; }
      public bool Krabby { get; set; }
      public bool Kingler { get; set; }
      public bool Voltorb { get; set; }
      public bool Electrode { get; set; }
      public bool Exeggcute { get; set; }
      public bool Exeggutor { get; set; }
      public bool Cubone { get; set; }
      public bool Marowak { get; set; }
      public bool Hitmonlee { get; set; }
      public bool Hitmonchan { get; set; }
      public bool Lickitung { get; set; }
      public bool Koffing { get; set; }
      public bool Weezing { get; set; }
      public bool Rhyhorn { get; set; }
      public bool Rhydon { get; set; }
      public bool Chansey { get; set; }
      public bool Tangela { get; set; }
      public bool Kangaskhan { get; set; }
      public bool Horsea { get; set; }
      public bool Seadra { get; set; }
      public bool Goldeen { get; set; }
      public bool Seaking { get; set; }
      public bool Staryu { get; set; }
      public bool Starmie { get; set; }
      public bool MrMime { get; set; }
      public bool Scyther { get; set; }
      public bool Jynx { get; set; }
      public bool Electabuzz { get; set; }
      public bool Magmar { get; set; }
      public bool Pinsir { get; set; }
      public bool Tauros { get; set; }
      public bool Magikarp { get; set; }
      public bool Gyarados { get; set; }
      public bool Lapras { get; set; }
      public bool Ditto { get; set; }
      public bool Eevee { get; set; }
      public bool Vaporeon { get; set; }
      public bool Jolteon { get; set; }
      public bool Flareon { get; set; }
      public bool Porygon { get; set; }
      public bool Omanyte { get; set; }
      public bool Omastar { get; set; }
      public bool Kabuto { get; set; }
      public bool Kabutops { get; set; }
      public bool Aerodactyl { get; set; }
      public bool Snorlax { get; set; }
      public bool Articuno { get; set; }
      public bool Zapdos { get; set; }
      public bool Moltres { get; set; }
      public bool Dratini { get; set; }
      public bool Dragonair { get; set; }
      public bool Dragonite { get; set; }
      public bool Mewtwo { get; set; }
      public bool Mew { get; set; }
      public PokemonCaught() { }
      public PokemonCaught(int id, string userEmail, bool Bulbasaur, bool Ivysaur, bool Venusaur, bool Charmander, bool Charmeleon, bool Charizard, bool Squirtle, bool Wartortle, bool Blastoise, bool Caterpie, bool Metapod, bool Butterfree, bool Weedle, bool Kakuna, bool Beedrill, bool Pidgey, bool Pidgeotto, bool Pidgeot, bool Rattata, bool Raticate, bool Spearow, bool Fearow, bool Ekans, bool Arbok, bool Pikachu, bool Raichu, bool Sandshrew, bool Sandslash, bool NidoranF, bool Nidorina, bool Nidoqueen, bool NidoranM, bool Nidorino, bool Nidoking, bool Clefairy, bool Clefable, bool Vulpix, bool Ninetales, bool Jigglypuff, bool Wigglytuff, bool Zubat, bool Golbat, bool Oddish, bool Gloom, bool Vileplume, bool Paras, bool Parasect, bool Venonat, bool Venomoth, bool Diglett, bool Dugtrio, bool Meowth, bool Persian, bool Psyduck, bool Golduck, bool Mankey, bool Primeape, bool Growlithe, bool Arcanine, bool Poliwag, bool Poliwhirl, bool Poliwrath, bool Abra, bool Kadabra, bool Alakazam, bool Machop, bool Machoke, bool Machamp, bool Bellsprout, bool Weepinbell, bool Victreebell, bool Tentacool, bool Tentacruel, bool Geodude, bool Graveler, bool Golem, bool Ponyta, bool Rapidash, bool Slowpoke, bool Slowbro, bool Magnemite, bool Magneton, bool Farfetchd, bool Doduo, bool Dodrio, bool Seel, bool Dewgong, bool Grimer, bool Muk, bool Shellder, bool Cloyster, bool Gastly, bool Haunter, bool Gengar, bool Onix, bool Drowzee, bool Hypno, bool Krabby, bool Kingler, bool Voltorb, bool Electrode, bool Exeggcute, bool Exeggutor, bool Cubone, bool Marowak, bool Hitmonlee, bool Hitmonchan, bool Lickitung, bool Koffing, bool Weezing, bool Rhyhorn, bool Rhydon, bool Chansey, bool Tangela, bool Kangaskhan, bool Horsea, bool Seadra, bool Goldeen, bool Seaking, bool Staryu, bool Starmie, bool MrMime, bool Scyther, bool Jynx, bool Electabuzz, bool Magmar, bool Pinsir, bool Tauros, bool Magikarp, bool Gyarados, bool Lapras, bool Ditto, bool Eevee, bool Vaporeon, bool Jolteon, bool Flareon, bool Porygon, bool Omanyte, bool Omastar, bool Kabuto, bool Kabutops, bool Aerodactyl, bool Snorlax, bool Articuno, bool Zapdos, bool Moltres, bool Dratini, bool Dragonair, bool Dragonite, bool Mewtwo, bool Mew)
      {
         this.id = id;
         this.userEmail = userEmail;
         this.Bulbasaur = Bulbasaur;
         this.Ivysaur = Ivysaur;
         this.Venusaur = Venusaur;
         this.Charmander = Charmander;
         this.Charmeleon = Charmeleon;
         this.Charizard = Charizard;
         this.Squirtle = Squirtle;
         this.Wartortle = Wartortle;
         this.Blastoise = Blastoise;
         this.Caterpie = Caterpie;
         this.Metapod = Metapod;
         this.Butterfree = Butterfree;
         this.Weedle = Weedle;
         this.Kakuna = Kakuna;
         this.Beedrill = Beedrill;
         this.Pidgey = Pidgey;
         this.Pidgeotto = Pidgeotto;
         this.Pidgeot = Pidgeot;
         this.Rattata = Rattata;
         this.Raticate = Raticate;
         this.Spearow = Spearow;
         this.Fearow = Fearow;
         this.Ekans = Ekans;
         this.Arbok = Arbok;
         this.Pikachu = Pikachu;
         this.Raichu = Raichu;
         this.Sandshrew = Sandshrew;
         this.Sandslash = Sandslash;
         this.NidoranF = NidoranF;
         this.Nidorina = Nidorina;
         this.Nidoqueen = Nidoqueen;
         this.NidoranM = NidoranM;
         this.Nidorino = Nidorino;
         this.Nidoking = Nidoking;
         this.Clefairy = Clefairy;
         this.Clefable = Clefable;
         this.Vulpix = Vulpix;
         this.Ninetales = Ninetales;
         this.Jigglypuff = Jigglypuff;
         this.Wigglytuff = Wigglytuff;
         this.Zubat = Zubat;
         this.Golbat = Golbat;
         this.Oddish = Oddish;
         this.Gloom = Gloom;
         this.Vileplume = Vileplume;
         this.Paras = Paras;
         this.Parasect = Parasect;
         this.Venonat = Venonat;
         this.Venomoth = Venomoth;
         this.Diglett = Diglett;
         this.Dugtrio = Dugtrio;
         this.Meowth = Meowth;
         this.Persian = Persian;
         this.Psyduck = Psyduck;
         this.Golduck = Golduck;
         this.Mankey = Mankey;
         this.Primeape = Primeape;
         this.Growlithe = Growlithe;
         this.Arcanine = Arcanine;
         this.Poliwag = Poliwag;
         this.Poliwhirl = Poliwhirl;
         this.Poliwrath = Poliwrath;
         this.Abra = Abra;
         this.Kadabra = Kadabra;
         this.Alakazam = Alakazam;
         this.Machop = Machop;
         this.Machoke = Machoke;
         this.Machamp = Machamp;
         this.Bellsprout = Bellsprout;
         this.Weepinbell = Weepinbell;
         this.Victreebell = Victreebell;
         this.Tentacool = Tentacool;
         this.Tentacruel = Tentacruel;
         this.Geodude = Geodude;
         this.Graveler = Graveler;
         this.Golem = Golem;
         this.Ponyta = Ponyta;
         this.Rapidash = Rapidash;
         this.Slowpoke = Slowpoke;
         this.Slowbro = Slowbro;
         this.Magnemite = Magnemite;
         this.Magneton = Magneton;
         this.Farfetchd = Farfetchd;
         this.Doduo = Doduo;
         this.Dodrio = Dodrio;
         this.Seel = Seel;
         this.Dewgong = Dewgong;
         this.Grimer = Grimer;
         this.Muk = Muk;
         this.Shellder = Shellder;
         this.Cloyster = Cloyster;
         this.Gastly = Gastly;
         this.Haunter = Haunter;
         this.Gengar = Gengar;
         this.Onix = Onix;
         this.Drowzee = Drowzee;
         this.Hypno = Hypno;
         this.Krabby = Krabby;
         this.Kingler = Kingler;
         this.Voltorb = Voltorb;
         this.Electrode = Electrode;
         this.Exeggcute = Exeggcute;
         this.Exeggutor = Exeggutor;
         this.Cubone = Cubone;
         this.Marowak = Marowak;
         this.Hitmonlee = Hitmonlee;
         this.Hitmonchan = Hitmonchan;
         this.Lickitung = Lickitung;
         this.Koffing = Koffing;
         this.Weezing = Weezing;
         this.Rhyhorn = Rhyhorn;
         this.Rhydon = Rhydon;
         this.Chansey = Chansey;
         this.Tangela = Tangela;
         this.Kangaskhan = Kangaskhan;
         this.Horsea = Horsea;
         this.Seadra = Seadra;
         this.Goldeen = Goldeen;
         this.Seaking = Seaking;
         this.Staryu = Staryu;
         this.Starmie = Starmie;
         this.MrMime = MrMime;
         this.Scyther = Scyther;
         this.Jynx = Jynx;
         this.Electabuzz = Electabuzz;
         this.Magmar = Magmar;
         this.Pinsir = Pinsir;
         this.Tauros = Tauros;
         this.Magikarp = Magikarp;
         this.Gyarados = Gyarados;
         this.Lapras = Lapras;
         this.Ditto = Ditto;
         this.Eevee = Eevee;
         this.Vaporeon = Vaporeon;
         this.Jolteon = Jolteon;
         this.Flareon = Flareon;
         this.Porygon = Porygon;
         this.Omanyte = Omanyte;
         this.Omastar = Omastar;
         this.Kabuto = Kabuto;
         this.Kabutops = Kabutops;
         this.Aerodactyl = Aerodactyl;
         this.Snorlax = Snorlax;
         this.Articuno = Articuno;
         this.Zapdos = Zapdos;
         this.Moltres = Moltres;
         this.Dratini = Dratini;
         this.Dragonair = Dragonair;
         this.Dragonite = Dragonite;
         this.Mewtwo = Mewtwo;
         this.Mew = Mew;
      }
   }
}