using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SafariAPI.Models
{
   public class PokemonCaught
   {
      [Key]
      [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

      public int id {get; set;}
      public int userId {get; set;}
      public bool Bulbasaur {get; set;}
      public bool Ivysaur {get; set;}
      public bool Venusaur {get; set;}
      public bool Charmander {get; set;}
      public bool Charmeleon {get; set;}
      public bool Squirtle {get; set;}
      public bool Wartortle {get; set;}
      public bool Blastoise {get; set;}
      public bool Caterpie {get; set;}
      public bool Metapod {get; set;}
      public bool Butterfree {get; set;}
      public bool Weedle {get; set;}
      public bool Kakuna {get; set;}
      public bool Beedrill {get; set;}
      public bool Pidgey {get; set;}
      public bool Pidgeotto {get; set;}
      public bool Pidgeot {get; set;}
      public bool Rattata {get; set;}
      public bool Raticate {get; set;}
      public bool Spearow {get; set;}
      public bool Fearow {get; set;}
      public bool Ekans {get; set;}
      public bool Arbok {get; set;}
      public bool Pikachu {get; set;}
      public bool Raichu {get; set;}
      public bool Sandshrew {get; set;}
      public bool Sandslash {get; set;}
      public bool NidoranF {get; set;}
      public bool Nidorina {get; set;}
      public bool Nidoqueen {get; set;}
      public bool NidoranM {get; set;}
      public bool Nidorino {get; set;}
      public bool Nidoking {get; set;}
      public bool Clefairy {get; set;}
      public bool Clefable {get; set;}
      public bool Vulpix {get; set;}
      public bool Ninetales {get; set;}
      public bool Jigglypuff {get; set;}
      public bool Wigglytuff {get; set;}
      public bool Zubat {get; set;}
      public bool Golbat {get; set;}
      public bool Oddish {get; set;}
      public bool Gloom {get; set;}
      public bool Vileplume {get; set;}
      public bool Paras {get; set;}
      public bool Parasect {get; set;}
      public bool Venonat {get; set;}
      public bool Venomoth {get; set;}
      public bool Diglett {get; set;}
      public bool Dugtrio {get; set;}
      public bool Meowth {get; set;}
      public bool Persian {get; set;}
      public bool Psyduck {get; set;}
      public bool Golduck {get; set;}
      public bool Mankey {get; set;}
      public bool Primeape {get; set;}
      public bool Growlithe {get; set;}
      public bool Arcanine {get; set;}
      public bool Poliwag {get; set;}
      public bool Poliwhirl {get; set;}
      public bool Poliwrath {get; set;}
      public bool Abra {get; set;}
      public bool Kadabra {get; set;}
      public bool Alakazam {get; set;}
      public bool Machop {get; set;}
      public bool Machoke {get; set;}
      public bool Machamp {get; set;}
      public bool Bellsprout {get; set;}
      public bool Weepinbell {get; set;}
      public bool Victreebell {get; set;}
      public bool Tentacool {get; set;}
      public bool Tentacruel {get; set;}
      public bool Geodude {get; set;}
      public bool Graveler {get; set;}
      public bool Golem {get; set;}
      public bool Ponyta {get; set;}
      public bool Rapidash {get; set;}
      public bool Slowpoke {get; set;}
      public bool Slowbro {get; set;}
      public bool Magnemite {get; set;}
      public bool Magneton {get; set;}
      public bool Farfetchd {get; set;} // Named Farfetch'd in Google Sheets
      public bool Doduo {get; set;}
      public bool Dodrio {get; set;}
      public bool Seel {get; set;}
      public bool Dewgong {get; set;}
      public bool Grimer {get; set;}
      public bool Muk {get; set;}
      public bool Shellder {get; set;}
      public bool Cloyster {get; set;}
      public bool Gastly {get; set;}
      public bool Haunter {get; set;}
      public bool Gengar {get; set;}
      public bool Onix {get; set;}
      public bool Drowzee {get; set;}
      public bool Hypno {get; set;}
      public bool Krabby {get; set;}
      public bool Kingler {get; set;}
      public bool Voltorb {get; set;}
      public bool Electrode {get; set;}
      public bool Exeggcute {get; set;}
      public bool Exeggutor {get; set;}
      public bool Cubone {get; set;}
      public bool Marowak {get; set;}
      public bool Hitmonlee {get; set;}
      public bool Hitmonchan {get; set;}
      public bool Lickitung {get; set;}
      public bool Koffing {get; set;}
      public bool Weezing {get; set;}
      public bool Rhyhorn {get; set;}
      public bool Rhydon {get; set;}
      public bool Chansey {get; set;}
      public bool Tangela {get; set;}
      public bool Kangaskhan {get; set;}
      public bool Horsea {get; set;}
      public bool Seadra {get; set;}
      public bool Goldeen {get; set;}
      public bool Seaking {get; set;}
      public bool Staryu {get; set;}
      public bool Starmie {get; set;}
      public bool MrMime {get; set;}
      public bool Scyther {get; set;}
      public bool Jynx {get; set;}
      public bool Electabuzz {get; set;}
      public bool Magmar {get; set;}
      public bool Pinsir {get; set;}
      public bool Tauros {get; set;}
      public bool Magikarp {get; set;}
      public bool Gyarados {get; set;}
      public bool Lapras {get; set;}
      public bool Ditto {get; set;}
      public bool Eevee {get; set;}
      public bool Vaporeon {get; set;}
      public bool Jolteon {get; set;}
      public bool Flareon {get; set;}
      public bool Porygon {get; set;}
      public bool Omanyte {get; set;}
      public bool Omastar {get; set;}
      public bool Kabuto {get; set;}
      public bool Kabutops {get; set;}
      public bool Aerodactyl {get; set;}
      public bool Snorlax {get; set;}
      public bool Articuno {get; set;}
      public bool Zapdos {get; set;}
      public bool Moltres {get; set;}
      public bool Dratini {get; set;}
      public bool Dragonair {get; set;}
      public bool Dragonite {get; set;}
      public bool Mewtwo {get; set;}
      public bool Mew {get; set;}
      public PokemonCaught() {}
   }
}