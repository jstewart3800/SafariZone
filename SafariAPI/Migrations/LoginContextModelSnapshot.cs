﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SafariAPI.Services.Context;

namespace SafariAPI.Migrations
{
    [DbContext(typeof(LoginContext))]
    partial class LoginContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SafariAPI.Models.PokemonCaught", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Abra")
                        .HasColumnType("bit");

                    b.Property<bool>("Aerodactyl")
                        .HasColumnType("bit");

                    b.Property<bool>("Alakazam")
                        .HasColumnType("bit");

                    b.Property<bool>("Arbok")
                        .HasColumnType("bit");

                    b.Property<bool>("Arcanine")
                        .HasColumnType("bit");

                    b.Property<bool>("Articuno")
                        .HasColumnType("bit");

                    b.Property<bool>("Beedrill")
                        .HasColumnType("bit");

                    b.Property<bool>("Bellsprout")
                        .HasColumnType("bit");

                    b.Property<bool>("Blastoise")
                        .HasColumnType("bit");

                    b.Property<bool>("Bulbasaur")
                        .HasColumnType("bit");

                    b.Property<bool>("Butterfree")
                        .HasColumnType("bit");

                    b.Property<bool>("Caterpie")
                        .HasColumnType("bit");

                    b.Property<bool>("Chansey")
                        .HasColumnType("bit");

                    b.Property<bool>("Charizard")
                        .HasColumnType("bit");

                    b.Property<bool>("Charmander")
                        .HasColumnType("bit");

                    b.Property<bool>("Charmeleon")
                        .HasColumnType("bit");

                    b.Property<bool>("Clefable")
                        .HasColumnType("bit");

                    b.Property<bool>("Clefairy")
                        .HasColumnType("bit");

                    b.Property<bool>("Cloyster")
                        .HasColumnType("bit");

                    b.Property<bool>("Cubone")
                        .HasColumnType("bit");

                    b.Property<bool>("Dewgong")
                        .HasColumnType("bit");

                    b.Property<bool>("Diglett")
                        .HasColumnType("bit");

                    b.Property<bool>("Ditto")
                        .HasColumnType("bit");

                    b.Property<bool>("Dodrio")
                        .HasColumnType("bit");

                    b.Property<bool>("Doduo")
                        .HasColumnType("bit");

                    b.Property<bool>("Dragonair")
                        .HasColumnType("bit");

                    b.Property<bool>("Dragonite")
                        .HasColumnType("bit");

                    b.Property<bool>("Dratini")
                        .HasColumnType("bit");

                    b.Property<bool>("Drowzee")
                        .HasColumnType("bit");

                    b.Property<bool>("Dugtrio")
                        .HasColumnType("bit");

                    b.Property<bool>("Eevee")
                        .HasColumnType("bit");

                    b.Property<bool>("Ekans")
                        .HasColumnType("bit");

                    b.Property<bool>("Electabuzz")
                        .HasColumnType("bit");

                    b.Property<bool>("Electrode")
                        .HasColumnType("bit");

                    b.Property<bool>("Exeggcute")
                        .HasColumnType("bit");

                    b.Property<bool>("Exeggutor")
                        .HasColumnType("bit");

                    b.Property<bool>("Farfetchd")
                        .HasColumnType("bit");

                    b.Property<bool>("Fearow")
                        .HasColumnType("bit");

                    b.Property<bool>("Flareon")
                        .HasColumnType("bit");

                    b.Property<bool>("Gastly")
                        .HasColumnType("bit");

                    b.Property<bool>("Gengar")
                        .HasColumnType("bit");

                    b.Property<bool>("Geodude")
                        .HasColumnType("bit");

                    b.Property<bool>("Gloom")
                        .HasColumnType("bit");

                    b.Property<bool>("Golbat")
                        .HasColumnType("bit");

                    b.Property<bool>("Goldeen")
                        .HasColumnType("bit");

                    b.Property<bool>("Golduck")
                        .HasColumnType("bit");

                    b.Property<bool>("Golem")
                        .HasColumnType("bit");

                    b.Property<bool>("Graveler")
                        .HasColumnType("bit");

                    b.Property<bool>("Grimer")
                        .HasColumnType("bit");

                    b.Property<bool>("Growlithe")
                        .HasColumnType("bit");

                    b.Property<bool>("Gyarados")
                        .HasColumnType("bit");

                    b.Property<bool>("Haunter")
                        .HasColumnType("bit");

                    b.Property<bool>("Hitmonchan")
                        .HasColumnType("bit");

                    b.Property<bool>("Hitmonlee")
                        .HasColumnType("bit");

                    b.Property<bool>("Horsea")
                        .HasColumnType("bit");

                    b.Property<bool>("Hypno")
                        .HasColumnType("bit");

                    b.Property<bool>("Ivysaur")
                        .HasColumnType("bit");

                    b.Property<bool>("Jigglypuff")
                        .HasColumnType("bit");

                    b.Property<bool>("Jolteon")
                        .HasColumnType("bit");

                    b.Property<bool>("Jynx")
                        .HasColumnType("bit");

                    b.Property<bool>("Kabuto")
                        .HasColumnType("bit");

                    b.Property<bool>("Kabutops")
                        .HasColumnType("bit");

                    b.Property<bool>("Kadabra")
                        .HasColumnType("bit");

                    b.Property<bool>("Kakuna")
                        .HasColumnType("bit");

                    b.Property<bool>("Kangaskhan")
                        .HasColumnType("bit");

                    b.Property<bool>("Kingler")
                        .HasColumnType("bit");

                    b.Property<bool>("Koffing")
                        .HasColumnType("bit");

                    b.Property<bool>("Krabby")
                        .HasColumnType("bit");

                    b.Property<bool>("Lapras")
                        .HasColumnType("bit");

                    b.Property<bool>("Lickitung")
                        .HasColumnType("bit");

                    b.Property<bool>("Machamp")
                        .HasColumnType("bit");

                    b.Property<bool>("Machoke")
                        .HasColumnType("bit");

                    b.Property<bool>("Machop")
                        .HasColumnType("bit");

                    b.Property<bool>("Magikarp")
                        .HasColumnType("bit");

                    b.Property<bool>("Magmar")
                        .HasColumnType("bit");

                    b.Property<bool>("Magnemite")
                        .HasColumnType("bit");

                    b.Property<bool>("Magneton")
                        .HasColumnType("bit");

                    b.Property<bool>("Mankey")
                        .HasColumnType("bit");

                    b.Property<bool>("Marowak")
                        .HasColumnType("bit");

                    b.Property<bool>("Meowth")
                        .HasColumnType("bit");

                    b.Property<bool>("Metapod")
                        .HasColumnType("bit");

                    b.Property<bool>("Mew")
                        .HasColumnType("bit");

                    b.Property<bool>("Mewtwo")
                        .HasColumnType("bit");

                    b.Property<bool>("Moltres")
                        .HasColumnType("bit");

                    b.Property<bool>("MrMime")
                        .HasColumnType("bit");

                    b.Property<bool>("Muk")
                        .HasColumnType("bit");

                    b.Property<bool>("Nidoking")
                        .HasColumnType("bit");

                    b.Property<bool>("Nidoqueen")
                        .HasColumnType("bit");

                    b.Property<bool>("NidoranF")
                        .HasColumnType("bit");

                    b.Property<bool>("NidoranM")
                        .HasColumnType("bit");

                    b.Property<bool>("Nidorina")
                        .HasColumnType("bit");

                    b.Property<bool>("Nidorino")
                        .HasColumnType("bit");

                    b.Property<bool>("Ninetales")
                        .HasColumnType("bit");

                    b.Property<bool>("Oddish")
                        .HasColumnType("bit");

                    b.Property<bool>("Omanyte")
                        .HasColumnType("bit");

                    b.Property<bool>("Omastar")
                        .HasColumnType("bit");

                    b.Property<bool>("Onix")
                        .HasColumnType("bit");

                    b.Property<bool>("Paras")
                        .HasColumnType("bit");

                    b.Property<bool>("Parasect")
                        .HasColumnType("bit");

                    b.Property<bool>("Persian")
                        .HasColumnType("bit");

                    b.Property<bool>("Pidgeot")
                        .HasColumnType("bit");

                    b.Property<bool>("Pidgeotto")
                        .HasColumnType("bit");

                    b.Property<bool>("Pidgey")
                        .HasColumnType("bit");

                    b.Property<bool>("Pikachu")
                        .HasColumnType("bit");

                    b.Property<bool>("Pinsir")
                        .HasColumnType("bit");

                    b.Property<bool>("Poliwag")
                        .HasColumnType("bit");

                    b.Property<bool>("Poliwhirl")
                        .HasColumnType("bit");

                    b.Property<bool>("Poliwrath")
                        .HasColumnType("bit");

                    b.Property<bool>("Ponyta")
                        .HasColumnType("bit");

                    b.Property<bool>("Porygon")
                        .HasColumnType("bit");

                    b.Property<bool>("Primeape")
                        .HasColumnType("bit");

                    b.Property<bool>("Psyduck")
                        .HasColumnType("bit");

                    b.Property<bool>("Raichu")
                        .HasColumnType("bit");

                    b.Property<bool>("Rapidash")
                        .HasColumnType("bit");

                    b.Property<bool>("Raticate")
                        .HasColumnType("bit");

                    b.Property<bool>("Rattata")
                        .HasColumnType("bit");

                    b.Property<bool>("Rhydon")
                        .HasColumnType("bit");

                    b.Property<bool>("Rhyhorn")
                        .HasColumnType("bit");

                    b.Property<bool>("Sandshrew")
                        .HasColumnType("bit");

                    b.Property<bool>("Sandslash")
                        .HasColumnType("bit");

                    b.Property<bool>("Scyther")
                        .HasColumnType("bit");

                    b.Property<bool>("Seadra")
                        .HasColumnType("bit");

                    b.Property<bool>("Seaking")
                        .HasColumnType("bit");

                    b.Property<bool>("Seel")
                        .HasColumnType("bit");

                    b.Property<bool>("Shellder")
                        .HasColumnType("bit");

                    b.Property<bool>("Slowbro")
                        .HasColumnType("bit");

                    b.Property<bool>("Slowpoke")
                        .HasColumnType("bit");

                    b.Property<bool>("Snorlax")
                        .HasColumnType("bit");

                    b.Property<bool>("Spearow")
                        .HasColumnType("bit");

                    b.Property<bool>("Squirtle")
                        .HasColumnType("bit");

                    b.Property<bool>("Starmie")
                        .HasColumnType("bit");

                    b.Property<bool>("Staryu")
                        .HasColumnType("bit");

                    b.Property<bool>("Tangela")
                        .HasColumnType("bit");

                    b.Property<bool>("Tauros")
                        .HasColumnType("bit");

                    b.Property<bool>("Tentacool")
                        .HasColumnType("bit");

                    b.Property<bool>("Tentacruel")
                        .HasColumnType("bit");

                    b.Property<bool>("Vaporeon")
                        .HasColumnType("bit");

                    b.Property<bool>("Venomoth")
                        .HasColumnType("bit");

                    b.Property<bool>("Venonat")
                        .HasColumnType("bit");

                    b.Property<bool>("Venusaur")
                        .HasColumnType("bit");

                    b.Property<bool>("Victreebell")
                        .HasColumnType("bit");

                    b.Property<bool>("Vileplume")
                        .HasColumnType("bit");

                    b.Property<bool>("Voltorb")
                        .HasColumnType("bit");

                    b.Property<bool>("Vulpix")
                        .HasColumnType("bit");

                    b.Property<bool>("Wartortle")
                        .HasColumnType("bit");

                    b.Property<bool>("Weedle")
                        .HasColumnType("bit");

                    b.Property<bool>("Weepinbell")
                        .HasColumnType("bit");

                    b.Property<bool>("Weezing")
                        .HasColumnType("bit");

                    b.Property<bool>("Wigglytuff")
                        .HasColumnType("bit");

                    b.Property<bool>("Zapdos")
                        .HasColumnType("bit");

                    b.Property<bool>("Zubat")
                        .HasColumnType("bit");

                    b.Property<string>("userEmail")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("PokeLogsSql");

                    b.HasData(
                        new
                        {
                            id = 1,
                            Abra = false,
                            Aerodactyl = false,
                            Alakazam = false,
                            Arbok = false,
                            Arcanine = false,
                            Articuno = false,
                            Beedrill = false,
                            Bellsprout = false,
                            Blastoise = false,
                            Bulbasaur = false,
                            Butterfree = false,
                            Caterpie = false,
                            Chansey = false,
                            Charizard = false,
                            Charmander = false,
                            Charmeleon = false,
                            Clefable = false,
                            Clefairy = false,
                            Cloyster = false,
                            Cubone = false,
                            Dewgong = false,
                            Diglett = false,
                            Ditto = false,
                            Dodrio = false,
                            Doduo = false,
                            Dragonair = false,
                            Dragonite = false,
                            Dratini = false,
                            Drowzee = false,
                            Dugtrio = false,
                            Eevee = false,
                            Ekans = false,
                            Electabuzz = false,
                            Electrode = false,
                            Exeggcute = false,
                            Exeggutor = false,
                            Farfetchd = false,
                            Fearow = false,
                            Flareon = false,
                            Gastly = false,
                            Gengar = false,
                            Geodude = false,
                            Gloom = false,
                            Golbat = false,
                            Goldeen = false,
                            Golduck = false,
                            Golem = false,
                            Graveler = false,
                            Grimer = false,
                            Growlithe = false,
                            Gyarados = false,
                            Haunter = false,
                            Hitmonchan = false,
                            Hitmonlee = false,
                            Horsea = false,
                            Hypno = false,
                            Ivysaur = false,
                            Jigglypuff = false,
                            Jolteon = false,
                            Jynx = false,
                            Kabuto = false,
                            Kabutops = false,
                            Kadabra = false,
                            Kakuna = false,
                            Kangaskhan = false,
                            Kingler = false,
                            Koffing = false,
                            Krabby = false,
                            Lapras = false,
                            Lickitung = false,
                            Machamp = false,
                            Machoke = false,
                            Machop = false,
                            Magikarp = false,
                            Magmar = false,
                            Magnemite = false,
                            Magneton = false,
                            Mankey = false,
                            Marowak = false,
                            Meowth = false,
                            Metapod = false,
                            Mew = false,
                            Mewtwo = false,
                            Moltres = false,
                            MrMime = false,
                            Muk = false,
                            Nidoking = false,
                            Nidoqueen = false,
                            NidoranF = false,
                            NidoranM = false,
                            Nidorina = false,
                            Nidorino = false,
                            Ninetales = false,
                            Oddish = false,
                            Omanyte = false,
                            Omastar = false,
                            Onix = false,
                            Paras = false,
                            Parasect = false,
                            Persian = false,
                            Pidgeot = false,
                            Pidgeotto = false,
                            Pidgey = false,
                            Pikachu = false,
                            Pinsir = false,
                            Poliwag = false,
                            Poliwhirl = false,
                            Poliwrath = false,
                            Ponyta = false,
                            Porygon = false,
                            Primeape = false,
                            Psyduck = false,
                            Raichu = false,
                            Rapidash = false,
                            Raticate = false,
                            Rattata = false,
                            Rhydon = false,
                            Rhyhorn = false,
                            Sandshrew = false,
                            Sandslash = false,
                            Scyther = false,
                            Seadra = false,
                            Seaking = false,
                            Seel = false,
                            Shellder = false,
                            Slowbro = false,
                            Slowpoke = false,
                            Snorlax = false,
                            Spearow = false,
                            Squirtle = false,
                            Starmie = false,
                            Staryu = false,
                            Tangela = false,
                            Tauros = false,
                            Tentacool = false,
                            Tentacruel = false,
                            Vaporeon = false,
                            Venomoth = false,
                            Venonat = false,
                            Venusaur = false,
                            Victreebell = false,
                            Vileplume = false,
                            Voltorb = false,
                            Vulpix = false,
                            Wartortle = false,
                            Weedle = false,
                            Weepinbell = false,
                            Weezing = false,
                            Wigglytuff = false,
                            Zapdos = false,
                            Zubat = false,
                            userEmail = "example@example.com"
                        },
                        new
                        {
                            id = 2,
                            Abra = false,
                            Aerodactyl = false,
                            Alakazam = false,
                            Arbok = false,
                            Arcanine = false,
                            Articuno = false,
                            Beedrill = false,
                            Bellsprout = false,
                            Blastoise = false,
                            Bulbasaur = false,
                            Butterfree = false,
                            Caterpie = false,
                            Chansey = false,
                            Charizard = false,
                            Charmander = false,
                            Charmeleon = false,
                            Clefable = false,
                            Clefairy = false,
                            Cloyster = false,
                            Cubone = false,
                            Dewgong = false,
                            Diglett = false,
                            Ditto = false,
                            Dodrio = false,
                            Doduo = false,
                            Dragonair = false,
                            Dragonite = false,
                            Dratini = false,
                            Drowzee = false,
                            Dugtrio = false,
                            Eevee = false,
                            Ekans = false,
                            Electabuzz = false,
                            Electrode = false,
                            Exeggcute = false,
                            Exeggutor = false,
                            Farfetchd = false,
                            Fearow = false,
                            Flareon = false,
                            Gastly = false,
                            Gengar = false,
                            Geodude = false,
                            Gloom = false,
                            Golbat = false,
                            Goldeen = false,
                            Golduck = false,
                            Golem = false,
                            Graveler = false,
                            Grimer = false,
                            Growlithe = false,
                            Gyarados = false,
                            Haunter = false,
                            Hitmonchan = false,
                            Hitmonlee = false,
                            Horsea = false,
                            Hypno = false,
                            Ivysaur = false,
                            Jigglypuff = false,
                            Jolteon = false,
                            Jynx = false,
                            Kabuto = false,
                            Kabutops = false,
                            Kadabra = false,
                            Kakuna = false,
                            Kangaskhan = false,
                            Kingler = false,
                            Koffing = false,
                            Krabby = false,
                            Lapras = false,
                            Lickitung = false,
                            Machamp = false,
                            Machoke = false,
                            Machop = false,
                            Magikarp = false,
                            Magmar = false,
                            Magnemite = false,
                            Magneton = false,
                            Mankey = false,
                            Marowak = false,
                            Meowth = false,
                            Metapod = false,
                            Mew = false,
                            Mewtwo = false,
                            Moltres = false,
                            MrMime = false,
                            Muk = false,
                            Nidoking = false,
                            Nidoqueen = false,
                            NidoranF = false,
                            NidoranM = false,
                            Nidorina = false,
                            Nidorino = false,
                            Ninetales = false,
                            Oddish = false,
                            Omanyte = false,
                            Omastar = false,
                            Onix = false,
                            Paras = false,
                            Parasect = false,
                            Persian = false,
                            Pidgeot = false,
                            Pidgeotto = false,
                            Pidgey = false,
                            Pikachu = false,
                            Pinsir = false,
                            Poliwag = false,
                            Poliwhirl = false,
                            Poliwrath = false,
                            Ponyta = false,
                            Porygon = false,
                            Primeape = false,
                            Psyduck = false,
                            Raichu = false,
                            Rapidash = false,
                            Raticate = false,
                            Rattata = false,
                            Rhydon = false,
                            Rhyhorn = false,
                            Sandshrew = false,
                            Sandslash = false,
                            Scyther = false,
                            Seadra = false,
                            Seaking = false,
                            Seel = false,
                            Shellder = false,
                            Slowbro = false,
                            Slowpoke = false,
                            Snorlax = false,
                            Spearow = false,
                            Squirtle = false,
                            Starmie = false,
                            Staryu = false,
                            Tangela = false,
                            Tauros = false,
                            Tentacool = false,
                            Tentacruel = false,
                            Vaporeon = false,
                            Venomoth = false,
                            Venonat = false,
                            Venusaur = false,
                            Victreebell = false,
                            Vileplume = false,
                            Voltorb = false,
                            Vulpix = false,
                            Wartortle = false,
                            Weedle = false,
                            Weepinbell = false,
                            Weezing = false,
                            Wigglytuff = false,
                            Zapdos = false,
                            Zubat = false,
                            userEmail = "example2@example.com"
                        });
                });

            modelBuilder.Entity("SafariAPI.Models.UserInfo", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("emailAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("UserInfoSql");

                    b.HasData(
                        new
                        {
                            id = 1,
                            emailAddress = "JonStewart@example.example",
                            password = "password"
                        },
                        new
                        {
                            id = 2,
                            emailAddress = "bigstinkus@stink.stank",
                            password = "trash"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
