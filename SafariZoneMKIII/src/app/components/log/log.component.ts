import { Component, OnInit } from '@angular/core';

import { PokedexService } from 'src/app/services/pokedex.service';
import { PokedexEntry } from 'src/app/interfaces/pokedex-entry';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
   selector: 'app-log',
   templateUrl: './log.component.html',
   styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

   pokemonName = 'Pikachu';

   private discovered = false;

   private userCaughtList = [];

   private logList: PokedexEntry[];
   // private logList2: PokedexEntry[];
   // loglist = [];
   // logList = logList2;

   public loggedInUserUrl = this.pokedex.apiUrl + `pokemoncaught/${this.pokedex.loggedInUser.userEmail}`;

   constructor(private pokedex: PokedexService, public modalCtrl: ModalController, private http: HttpClient) {
      this.logList = pokedex.returnPokemon();
      console.log(this.logList);
   }

   ngOnInit() {
      this.GetUserLog();
   }

   async presentModal(pokeSelected: PokedexEntry) {
      console.log(pokeSelected);
      const modal = await this.modalCtrl.create({
         component: ModalComponent,
         componentProps: { // an object where each key in the object maps to an input of an associated component
            entryNum: pokeSelected.dexNum,
            entryName: pokeSelected.pokemon,
            entryHp: pokeSelected.hp,
            entryAtk: pokeSelected.atk,
            entryDef: pokeSelected.def,
            entrySpecAtk: pokeSelected.satk,
            entrySpecDef: pokeSelected.sdef,
            entrySpd: pokeSelected.spd,
            entryType: pokeSelected.type,
            entryAbility1: pokeSelected.ability1,
            entryAbility2: pokeSelected.ability2,
            entryEVWorth: pokeSelected.EVWorth,
            entryGender: pokeSelected.gender,
            entryEvolvesFrom: pokeSelected.evolvesFrom,
            entryEvolvesBy: pokeSelected.evolvesBy,
            entryEvolvesTo: pokeSelected.evolvesTo,
            entryDesc: pokeSelected.description,
         }
      });
      await modal.present();
   }
   // Service to do get request would need to do a for loop to grab all pokemon objects and add to array to return that array
   // nameOfPokemon
   // dexnumber
   // type
   // other stuff
   

   pokemonCaught(pokeCaught: string) { // Real function will use passed in name
      // call api to update user's log
   }

   GetUserLog() {
      this.http.get(this.loggedInUserUrl).subscribe(l => {
         console.log(this.loggedInUserUrl);
         console.log(l);
         const pokeList: any = l;
         //this.userCaughtList.push(l);
         console.log(pokeList.bulbasaur);
         let Bulbasaur = {
            name: pokeList.bulbasaur
         }
         this.userCaughtList.push(Bulbasaur);
         const Ivysaur = {
            name: pokeList.ivysaur
         }
         this.userCaughtList.push(Ivysaur);
         const Venusaur = {
            name: pokeList.venusaur
         }
         this.userCaughtList.push(Venusaur);
         const Charmander = {
            name: pokeList.charmander
         }
         this.userCaughtList.push(Charmander);
         const Charmeleon = {
            name: pokeList.charmeleon
         }
         this.userCaughtList.push(Charmeleon);
         const Charizard = {
            name: pokeList.charizard
         }
         this.userCaughtList.push(Charizard);
         const Squirtle = {
            name: pokeList.squirtle
         }
         this.userCaughtList.push(Squirtle);
         const Wartortle = {
            name: pokeList.wartortle
         }
         this.userCaughtList.push(Wartortle);
         const Blastoise = {
            name: pokeList.blastoise
         }
         this.userCaughtList.push(Blastoise);
         const Caterpie = {
            name: pokeList.caterpie
         }
         this.userCaughtList.push(Caterpie);
         const Metapod = {
            name: pokeList.metapod
         }
         this.userCaughtList.push(Metapod);
         const Butterfree = {
            name: pokeList.butterfree
         }
         this.userCaughtList.push(Butterfree);
         const Weedle = {
            name: pokeList.weedle
         }
         this.userCaughtList.push(Weedle);
         const Kakuna = {
            name: pokeList.kakuna
         }
         this.userCaughtList.push(Kakuna);
         const Beedrill = {
            name: pokeList.beedrill
         }
         this.userCaughtList.push(Beedrill);
         const Pidgey = {
            name: pokeList.pidgey
         }
         this.userCaughtList.push(Pidgey);
         const Pidgeotto = {
            name: pokeList.pidgeotto
         }
         this.userCaughtList.push(Pidgeotto);
         const Pidgeot = {
            name: pokeList.pidgeot
         }
         this.userCaughtList.push(Pidgeot);
         const Rattata = {
            name: pokeList.rattata
         }
         this.userCaughtList.push(Rattata);
         const Raticate = {
            name: pokeList.raticate
         }
         this.userCaughtList.push(Raticate);
         const Spearow = {
            name: pokeList.spearow
         }
         this.userCaughtList.push(Spearow);
         const Fearow = {
            name: pokeList.fearow
         }
         this.userCaughtList.push(Fearow);
         const Ekans = {
            name: pokeList.ekans
         }
         this.userCaughtList.push(Ekans);
         const Arbok = {
            name: pokeList.arbok
         }
         this.userCaughtList.push(Arbok);
         const Pikachu = {
            name: pokeList.pikachu
         }
         this.userCaughtList.push(Pikachu);
         const Raichu = {
            name: pokeList.raichu
         }
         this.userCaughtList.push(Raichu);
         const Sandshrew = {
            name: pokeList.sandshrew
         }
         this.userCaughtList.push(Sandshrew);
         const Sandslash = {
            name: pokeList.sandslash
         }
         this.userCaughtList.push(Sandslash);

         const NidoranF = { 
            name: pokeList.nidoranF
         }
         this.userCaughtList.push(NidoranF);

         const Nidorina = {
            name: pokeList.nidorina
         }
         this.userCaughtList.push(Nidorina);
         const Nidoqueen = {
            name: pokeList.nidoqueen
         }
         this.userCaughtList.push(Nidoqueen);
         const NidoranM = {
            name: pokeList.nidoranM
         }
         this.userCaughtList.push(NidoranM);
         const Nidorino = {
            name: pokeList.nidorino
         }
         this.userCaughtList.push(Nidorino);
         const Nidoking = {
            name: pokeList.nidoking
         }
         this.userCaughtList.push(Nidoking);
         const Clefairy = {
            name: pokeList.clefairy
         }
         this.userCaughtList.push(Clefairy);
         const Clefable = {
            name: pokeList.clefable
         }
         this.userCaughtList.push(Clefable);
         const Vulpix = {
            name: pokeList.vulpix
         }
         this.userCaughtList.push(Vulpix);
         const Ninetales = {
            name: pokeList.ninetales
         }
         this.userCaughtList.push(Ninetales);
         const Jigglypuff = {
            name: pokeList.jigglypuff
         }
         this.userCaughtList.push(Jigglypuff);
         const Wigglytuff = {
            name: pokeList.wigglytuff
         }
         this.userCaughtList.push(Wigglytuff);
         const Zubat = {
            name: pokeList.zubat
         }
         this.userCaughtList.push(Zubat);
         const Golbat = {
            name: pokeList.golbat
         }
         this.userCaughtList.push(Golbat);
         const Oddish = {
            name: pokeList.oddish
         }
         this.userCaughtList.push(Oddish);
         const Gloom = {
            name: pokeList.gloom
         }
         this.userCaughtList.push(Gloom);
         const Vileplume = {
            name: pokeList.vileplume
         }
         this.userCaughtList.push(Vileplume);
         const Paras = {
            name: pokeList.paras
         }
         this.userCaughtList.push(Paras);
         const Parasect = {
            name: pokeList.parasect
         }
         this.userCaughtList.push(Parasect);
         const Venonat = {
            name: pokeList.venonat
         }
         this.userCaughtList.push(Venonat);
         const Venomoth = {
            name: pokeList.venomoth
         }
         this.userCaughtList.push(Venomoth);
         const Diglett = {
            name: pokeList.diglett
         }
         this.userCaughtList.push(Diglett);
         const Dugtrio = {
            name: pokeList.dugtrio
         }
         this.userCaughtList.push(Dugtrio);
         const Meowth = {
            name: pokeList.meowth
         }
         this.userCaughtList.push(Meowth);
         const Persian = {
            name: pokeList.persian
         }
         this.userCaughtList.push(Persian);
         const Psyduck = {
            name: pokeList.psyduck
         }
         this.userCaughtList.push(Psyduck);
         const Golduck = {
            name: pokeList.golduck
         }
         this.userCaughtList.push(Golduck);
         const Mankey = {
            name: pokeList.mankey
         }
         this.userCaughtList.push(Mankey);
         const Primeape = {
            name: pokeList.primeape
         }
         this.userCaughtList.push(Primeape);
         const Growlithe = {
            name: pokeList.growlithe
         }
         this.userCaughtList.push(Growlithe);
         const Arcanine = {
            name: pokeList.arcanine
         }
         this.userCaughtList.push(Arcanine);
         const Poliwag = {
            name: pokeList.poliwag
         }
         this.userCaughtList.push(Poliwag);
         const Poliwhirl = {
            name: pokeList.poliwhirl
         }
         this.userCaughtList.push(Poliwhirl);
         const Poliwrath = {
            name: pokeList.poliwrath
         }
         this.userCaughtList.push(Poliwrath);
         const Abra = {
            name: pokeList.abra
         }
         this.userCaughtList.push(Abra);
         const Kadabra = {
            name: pokeList.kadabra
         }
         this.userCaughtList.push(Kadabra);
         const Alakazam = {
            name: pokeList.alakazam
         }
         this.userCaughtList.push(Alakazam);
         const Machop = {
            name: pokeList.machop
         }
         this.userCaughtList.push(Machop);
         const Machoke = {
            name: pokeList.machoke
         }
         this.userCaughtList.push(Machoke);
         const Machamp = {
            name: pokeList.machamp
         }
         this.userCaughtList.push(Machamp);
         const Bellsprout = {
            name: pokeList.bellsprout
         }
         this.userCaughtList.push(Bellsprout);
         const Weepinbell = {
            name: pokeList.weepinbell
         }
         this.userCaughtList.push(Weepinbell);
         const Victreebel = {
            name: pokeList.victreebel
         }
         this.userCaughtList.push(Victreebel);
         const Tentacool = {
            name: pokeList.tentacool
         }
         this.userCaughtList.push(Tentacool);
         const Tentacruel = {
            name: pokeList.tentacruel
         }
         this.userCaughtList.push(Tentacruel);
         const Geodude = {
            name: pokeList.geodude
         }
         this.userCaughtList.push(Geodude);
         const Graveler = {
            name: pokeList.graveler
         }
         this.userCaughtList.push(Graveler);
         const Golem = {
            name: pokeList.golem
         }
         this.userCaughtList.push(Golem);
         const Ponyta = {
            name: pokeList.ponyta
         }
         this.userCaughtList.push(Ponyta);
         const Rapidash = {
            name: pokeList.rapidash
         }
         this.userCaughtList.push(Rapidash);
         const Slowpoke = {
            name: pokeList.slowpoke
         }
         this.userCaughtList.push(Slowpoke);
         const Slowbro = {
            name: pokeList.slowbro
         }
         this.userCaughtList.push(Slowbro);
         const Magnemite = {
            name: pokeList.magnemite
         }
         this.userCaughtList.push(Magnemite);
         const Magneton = {
            name: pokeList.magneton
         }
         this.userCaughtList.push(Magneton);
         const Farfetchd = {
            name: pokeList.farfetchd
         }
         this.userCaughtList.push(Farfetchd);
         const Doduo = {
            name: pokeList.doduo
         }
         this.userCaughtList.push(Doduo);
         const Dodrio = {
            name: pokeList.dodrio
         }
         this.userCaughtList.push(Dodrio);
         const Seel = {
            name: pokeList.seel
         }
         this.userCaughtList.push(Seel);
         const Dewgong = {
            name: pokeList.dewgong
         }
         this.userCaughtList.push(Dewgong);
         const Grimer = {
            name: pokeList.grimer
         }
         this.userCaughtList.push(Grimer);
         const Muk = {
            name: pokeList.muk
         }
         this.userCaughtList.push(Muk);
         const Shellder = {
            name: pokeList.shellder
         }
         this.userCaughtList.push(Shellder);
         const Cloyster = {
            name: pokeList.cloyster
         }
         this.userCaughtList.push(Cloyster);
         const Gastly = {
            name: pokeList.gastly
         }
         this.userCaughtList.push(Gastly);
         const Haunter = {
            name: pokeList.haunter
         }
         this.userCaughtList.push(Haunter);
         const Gengar = {
            name: pokeList.gengar
         }
         this.userCaughtList.push(Gengar);
         const Onix = {
            name: pokeList.onix
         }
         this.userCaughtList.push(Onix);
         const Drowzee = {
            name: pokeList.drowzee
         }
         this.userCaughtList.push(Drowzee);
         const Hypno = {
            name: pokeList.hypno
         }
         this.userCaughtList.push(Hypno);
         const Krabby = {
            name: pokeList.krabby
         }
         this.userCaughtList.push(Krabby);
         const Kingler = {
            name: pokeList.kingler
         }
         this.userCaughtList.push(Kingler);
         const Voltorb = {
            name: pokeList.voltorb
         }
         this.userCaughtList.push(Voltorb);
         const Electrode = {
            name: pokeList.electrode
         }
         this.userCaughtList.push(Electrode);
         const Exeggcute = {
            name: pokeList.exeggcute
         }
         this.userCaughtList.push(Exeggcute);
         const Exeggutor = {
            name: pokeList.exeggutor
         }
         this.userCaughtList.push(Exeggutor);
         const Cubone = {
            name: pokeList.cubone
         }
         this.userCaughtList.push(Cubone);
         const Marowak = {
            name: pokeList.marowak
         }
         this.userCaughtList.push(Marowak);
         const Hitmonlee = {
            name: pokeList.hitmonlee
         }
         this.userCaughtList.push(Hitmonlee);
         const Hitmonchan = {
            name: pokeList.hitmonchan
         }
         this.userCaughtList.push(Hitmonchan);
         const Lickitung = {
            name: pokeList.lickitung
         }
         this.userCaughtList.push(Lickitung);
         const Koffing = {
            name: pokeList.koffing
         }
         this.userCaughtList.push(Koffing);
         const Weezing = {
            name: pokeList.weezing
         }
         this.userCaughtList.push(Weezing);
         const Rhyhorn = {
            name: pokeList.rhyhorn
         }
         this.userCaughtList.push(Rhyhorn);
         const Rhydon = {
            name: pokeList.rhydon
         }
         this.userCaughtList.push(Rhydon);
         const Chansey = {
            name: pokeList.chansey
         }
         this.userCaughtList.push(Chansey);
         const Tangela = {
            name: pokeList.tangela
         }
         this.userCaughtList.push(Tangela);
         const Kangaskhan = {
            name: pokeList.kangaskhan
         }
         this.userCaughtList.push(Kangaskhan);
         const Horsea = {
            name: pokeList.horsea
         }
         this.userCaughtList.push(Horsea);
         const Seadra = {
            name: pokeList.seadra
         }
         this.userCaughtList.push(Seadra);
         const Goldeen = {
            name: pokeList.goldeen
         }
         this.userCaughtList.push(Goldeen);
         const Seaking = {
            name: pokeList.seaking
         }
         this.userCaughtList.push(Seaking);
         const Staryu = {
            name: pokeList.staryu
         }
         this.userCaughtList.push(Staryu);
         const Starmie = {
            name: pokeList.starmie
         }
         this.userCaughtList.push(Starmie);
         const MrMime = { 
            name: pokeList.mrMime
         }
         this.userCaughtList.push(MrMime);
         const Scyther = {
            name: pokeList.scyther
         }
         this.userCaughtList.push(Scyther);
         const Jynx = {
            name: pokeList.jynx
         }
         this.userCaughtList.push(Jynx);
         const Electabuzz = {
            name: pokeList.electabuzz
         }
         this.userCaughtList.push(Electabuzz);
         const Magmar = {
            name: pokeList.magmar
         }
         this.userCaughtList.push(Magmar);
         const Pinsir = {
            name: pokeList.pinsir
         }
         this.userCaughtList.push(Pinsir);
         const Tauros = {
            name: pokeList.tauros
         }
         this.userCaughtList.push(Tauros);
         const Magikarp = {
            name: pokeList.magikarp
         }
         this.userCaughtList.push(Magikarp);
         const Gyarados = {
            name: pokeList.gyarados
         }
         this.userCaughtList.push(Gyarados);
         const Lapras = {
            name: pokeList.lapras
         }
         this.userCaughtList.push(Lapras);
         const Ditto = {
            name: pokeList.ditto
         }
         this.userCaughtList.push(Ditto);
         const Eevee = {
            name: pokeList.eevee
         }
         this.userCaughtList.push(Eevee);
         const Vaporeon = {
            name: pokeList.vaporeon
         }
         this.userCaughtList.push(Vaporeon);
         const Jolteon = {
            name: pokeList.jolteon
         }
         this.userCaughtList.push(Jolteon);
         const Flareon = {
            name: pokeList.flareon
         }
         this.userCaughtList.push(Flareon);
         const Porygon = {
            name: pokeList.porygon
         }
         this.userCaughtList.push(Porygon);
         const Omanyte = {
            name: pokeList.omanyte
         }
         this.userCaughtList.push(Omanyte);
         const Omastar = {
            name: pokeList.omastar
         }
         this.userCaughtList.push(Omastar);
         const Kabuto = {
            name: pokeList.kabuto
         }
         this.userCaughtList.push(Kabuto);
         const Kabutops = {
            name: pokeList.kabutops
         }
         this.userCaughtList.push(Kabutops);
         const Aerodactyl = {
            name: pokeList.aerodactyl
         }
         this.userCaughtList.push(Aerodactyl);
         const Snorlax = {
            name: pokeList.snorlax
         }
         this.userCaughtList.push(Snorlax);
         const Articuno = {
            name: pokeList.articuno
         }
         this.userCaughtList.push(Articuno);
         const Zapdos = {
            name: pokeList.zapdos
         }
         this.userCaughtList.push(Zapdos);
         const Moltres = {
            name: pokeList.moltres
         }
         this.userCaughtList.push(Moltres);
         const Dratini = {
            name: pokeList.dratini
         }
         this.userCaughtList.push(Dratini);
         const Dragonair = {
            name: pokeList.dragonair
         }
         this.userCaughtList.push(Dragonair);
         const Dragonite = {
            name: pokeList.dragonite
         }
         this.userCaughtList.push(Dragonite);
         const Mewtwo = {
            name: pokeList.mewtwo
         }
         this.userCaughtList.push(Mewtwo);
         const Mew = {
            name: pokeList.mew
         }
         this.userCaughtList.push(Mew);

         console.log(this.userCaughtList[129].name);
      })
   }
}

