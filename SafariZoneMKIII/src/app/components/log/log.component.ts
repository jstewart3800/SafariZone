import { Component, OnInit } from '@angular/core';

import { PokedexService } from 'src/app/services/pokedex.service';
import { PokedexEntry } from 'src/app/interfaces/pokedex-entry';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { CaughtLog } from 'src/app/interfaces/caught-log';

@Component({
   selector: 'app-log',
   templateUrl: './log.component.html',
   styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

   pokemonName = 'Pikachu';

   private discovered = false;

   private userCaughtList = [];
   private userCaughtObj = {};

   private logList: PokedexEntry[];

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
            Bulbasaur: pokeList.bulbasaur
         }
         this.userCaughtList.push(Bulbasaur);
         const Ivysaur = {
            Ivysaur: pokeList.ivysaur
         }
         this.userCaughtList.push(Ivysaur);
         const Venusaur = {
            Venusaur: pokeList.venusaur
         }
         this.userCaughtList.push(Venusaur);
         const Charmander = {
            Charmander: pokeList.charmander
         }
         this.userCaughtList.push(Charmander);
         const Charmeleon = {
            Charmeleon: pokeList.charmeleon
         }
         this.userCaughtList.push(Charmeleon);
         const Charizard = {
            Charizard: pokeList.charizard
         }
         this.userCaughtList.push(Charizard);
         const Squirtle = {
            Squirtle: pokeList.squirtle
         }
         this.userCaughtList.push(Squirtle);
         const Wartortle = {
            Wartortle: pokeList.wartortle
         }
         this.userCaughtList.push(Wartortle);
         const Blastoise = {
            Blastoise: pokeList.blastoise
         }
         this.userCaughtList.push(Blastoise);
         const Caterpie = {
            Caterpie: pokeList.caterpie
         }
         this.userCaughtList.push(Caterpie);
         const Metapod = {
            Metapod: pokeList.metapod
         }
         this.userCaughtList.push(Metapod);
         const Butterfree = {
            Butterfree: pokeList.butterfree
         }
         this.userCaughtList.push(Butterfree);
         const Weedle = {
            Weedle: pokeList.weedle
         }
         this.userCaughtList.push(Weedle);
         const Kakuna = {
            Kakuna: pokeList.kakuna
         }
         this.userCaughtList.push(Kakuna);
         const Beedrill = {
            Beedrill: pokeList.beedrill
         }
         this.userCaughtList.push(Beedrill);
         const Pidgey = {
            Pidgey: pokeList.pidgey
         }
         this.userCaughtList.push(Pidgey);
         const Pidgeotto = {
            Pidgeotto: pokeList.pidgeotto
         }
         this.userCaughtList.push(Pidgeotto);
         const Pidgeot = {
            Pidgeot: pokeList.pidgeot
         }
         this.userCaughtList.push(Pidgeot);
         const Rattata = {
            Rattata: pokeList.rattata
         }
         this.userCaughtList.push(Rattata);
         const Raticate = {
            Raticate: pokeList.raticate
         }
         this.userCaughtList.push(Raticate);
         const Spearow = {
            Spearow: pokeList.spearow
         }
         this.userCaughtList.push(Spearow);
         const Fearow = {
            Fearow: pokeList.fearow
         }
         this.userCaughtList.push(Fearow);
         const Ekans = {
            Ekans: pokeList.ekans
         }
         this.userCaughtList.push(Ekans);
         const Arbok = {
            Arbok: pokeList.arbok
         }
         this.userCaughtList.push(Arbok);
         const Pikachu = {
            Pikachu: pokeList.pikachu
         }
         this.userCaughtList.push(Pikachu);
         const Raichu = {
            Raichu: pokeList.raichu
         }
         this.userCaughtList.push(Raichu);
         const Sandshrew = {
            Sandshrew: pokeList.sandshrew
         }
         this.userCaughtList.push(Sandshrew);
         const Sandslash = {
            Sandslash: pokeList.sandslash
         }
         this.userCaughtList.push(Sandslash);

         const NidoranF = { // undefined
            NidoranF: pokeList.nidoranF
         }
         this.userCaughtList.push(NidoranF);

         const Nidorina = {
            Nidorina: pokeList.nidorina
         }
         this.userCaughtList.push(Nidorina);
         const Nidoqueen = {
            Nidoqueen: pokeList.nidoqueen
         }
         this.userCaughtList.push(Nidoqueen);
         const NidoranM = {
            NidoranM: pokeList.nidoranM
         }
         this.userCaughtList.push(NidoranM);
         const Nidorino = {
            Nidorino: pokeList.nidorino
         }
         this.userCaughtList.push(Nidorino);
         const Nidoking = {
            Nidoking: pokeList.nidoking
         }
         this.userCaughtList.push(Nidoking);
         const Clefairy = {
            Clefairy: pokeList.clefairy
         }
         this.userCaughtList.push(Clefairy);
         const Clefable = {
            Clefable: pokeList.clefable
         }
         this.userCaughtList.push(Clefable);
         const Vulpix = {
            Vulpix: pokeList.vulpix
         }
         this.userCaughtList.push(Vulpix);
         const Ninetales = {
            Ninetales: pokeList.ninetales
         }
         this.userCaughtList.push(Ninetales);
         const Jigglypuff = {
            Jigglypuff: pokeList.jigglypuff
         }
         this.userCaughtList.push(Jigglypuff);
         const Wigglytuff = {
            Wigglytuff: pokeList.wigglytuff
         }
         this.userCaughtList.push(Wigglytuff);
         const Zubat = {
            Zubat: pokeList.zubat
         }
         this.userCaughtList.push(Zubat);
         const Golbat = {
            Golbat: pokeList.golbat
         }
         this.userCaughtList.push(Golbat);
         const Oddish = {
            Oddish: pokeList.oddish
         }
         this.userCaughtList.push(Oddish);
         const Gloom = {
            Gloom: pokeList.gloom
         }
         this.userCaughtList.push(Gloom);
         const Vileplume = {
            Vileplume: pokeList.vileplume
         }
         this.userCaughtList.push(Vileplume);
         const Paras = {
            Paras: pokeList.paras
         }
         this.userCaughtList.push(Paras);
         const Parasect = {
            Parasect: pokeList.parasect
         }
         this.userCaughtList.push(Parasect);
         const Venonat = {
            Venonat: pokeList.venonat
         }
         this.userCaughtList.push(Venonat);
         const Venomoth = {
            Venomoth: pokeList.venomoth
         }
         this.userCaughtList.push(Venomoth);
         const Diglett = {
            Diglett: pokeList.diglett
         }
         this.userCaughtList.push(Diglett);
         const Dugtrio = {
            Dugtrio: pokeList.dugtrio
         }
         this.userCaughtList.push(Dugtrio);
         const Meowth = {
            Meowth: pokeList.meowth
         }
         this.userCaughtList.push(Meowth);
         const Persian = {
            Persian: pokeList.persian
         }
         this.userCaughtList.push(Persian);
         const Psyduck = {
            Psyduck: pokeList.psyduck
         }
         this.userCaughtList.push(Psyduck);
         const Golduck = {
            Golduck: pokeList.golduck
         }
         this.userCaughtList.push(Golduck);
         const Mankey = {
            Mankey: pokeList.mankey
         }
         this.userCaughtList.push(Mankey);
         const Primeape = {
            Primeape: pokeList.primeape
         }
         this.userCaughtList.push(Primeape);
         const Growlithe = {
            Growlithe: pokeList.growlithe
         }
         this.userCaughtList.push(Growlithe);
         const Arcanine = {
            Arcanine: pokeList.arcanine
         }
         this.userCaughtList.push(Arcanine);
         const Poliwag = {
            Poliwag: pokeList.poliwag
         }
         this.userCaughtList.push(Poliwag);
         const Poliwhirl = {
            Poliwhirl: pokeList.poliwhirl
         }
         this.userCaughtList.push(Poliwhirl);
         const Poliwrath = {
            Poliwrath: pokeList.poliwrath
         }
         this.userCaughtList.push(Poliwrath);
         const Abra = {
            Abra: pokeList.abra
         }
         this.userCaughtList.push(Abra);
         const Kadabra = {
            Kadabra: pokeList.kadabra
         }
         this.userCaughtList.push(Kadabra);
         const Alakazam = {
            Alakazam: pokeList.alakazam
         }
         this.userCaughtList.push(Alakazam);
         const Machop = {
            Machop: pokeList.machop
         }
         this.userCaughtList.push(Machop);
         const Machoke = {
            Machoke: pokeList.machoke
         }
         this.userCaughtList.push(Machoke);
         const Machamp = {
            Machamp: pokeList.machamp
         }
         this.userCaughtList.push(Machamp);
         const Bellsprout = {
            Bellsprout: pokeList.bellsprout
         }
         this.userCaughtList.push(Bellsprout);
         const Weepinbell = {
            Weepinbell: pokeList.weepinbell
         }
         this.userCaughtList.push(Weepinbell);
         const Victreebel = { // undefined
            Victreebel: pokeList.victreebel
         }
         this.userCaughtList.push(Victreebel);
         const Tentacool = {
            Tentacool: pokeList.tentacool
         }
         this.userCaughtList.push(Tentacool);
         const Tentacruel = {
            Tentacruel: pokeList.tentacruel
         }
         this.userCaughtList.push(Tentacruel);
         const Geodude = {
            Geodude: pokeList.geodude
         }
         this.userCaughtList.push(Geodude);
         const Graveler = {
            Graveler: pokeList.graveler
         }
         this.userCaughtList.push(Graveler);
         const Golem = {
            Golem: pokeList.golem
         }
         this.userCaughtList.push(Golem);
         const Ponyta = {
            Ponyta: pokeList.ponyta
         }
         this.userCaughtList.push(Ponyta);
         const Rapidash = {
            Rapidash: pokeList.rapidash
         }
         this.userCaughtList.push(Rapidash);
         const Slowpoke = {
            Slowpoke: pokeList.slowpoke
         }
         this.userCaughtList.push(Slowpoke);
         const Slowbro = {
            Slowbro: pokeList.slowbro
         }
         this.userCaughtList.push(Slowbro);
         const Magnemite = {
            Magnemite: pokeList.magnemite
         }
         this.userCaughtList.push(Magnemite);
         const Magneton = {
            Magneton: pokeList.magneton
         }
         this.userCaughtList.push(Magneton);
         const Farfetchd = {
            Farfetchd: pokeList.farfetchd
         }
         this.userCaughtList.push(Farfetchd);
         const Doduo = {
            Doduo: pokeList.doduo
         }
         this.userCaughtList.push(Doduo);
         const Dodrio = {
            Dodrio: pokeList.dodrio
         }
         this.userCaughtList.push(Dodrio);
         const Seel = {
            Seel: pokeList.seel
         }
         this.userCaughtList.push(Seel);
         const Dewgong = {
            Dewgong: pokeList.dewgong
         }
         this.userCaughtList.push(Dewgong);
         const Grimer = {
            Grimer: pokeList.grimer
         }
         this.userCaughtList.push(Grimer);
         const Muk = {
            Muk: pokeList.muk
         }
         this.userCaughtList.push(Muk);
         const Shellder = {
            Shellder: pokeList.shellder
         }
         this.userCaughtList.push(Shellder);
         const Cloyster = {
            Cloyster: pokeList.cloyster
         }
         this.userCaughtList.push(Cloyster);
         const Gastly = {
            Gastly: pokeList.gastly
         }
         this.userCaughtList.push(Gastly);
         const Haunter = {
            Haunter: pokeList.haunter
         }
         this.userCaughtList.push(Haunter);
         const Gengar = {
            Gengar: pokeList.gengar
         }
         this.userCaughtList.push(Gengar);
         const Onix = {
            Onix: pokeList.onix
         }
         this.userCaughtList.push(Onix);
         const Drowzee = {
            Drowzee: pokeList.drowzee
         }
         this.userCaughtList.push(Drowzee);
         const Hypno = {
            Hypno: pokeList.hypno
         }
         this.userCaughtList.push(Hypno);
         const Krabby = {
            Krabby: pokeList.krabby
         }
         this.userCaughtList.push(Krabby);
         const Kingler = {
            Kingler: pokeList.kingler
         }
         this.userCaughtList.push(Kingler);
         const Voltorb = {
            Voltorb: pokeList.voltorb
         }
         this.userCaughtList.push(Voltorb);
         const Electrode = {
            Electrode: pokeList.electrode
         }
         this.userCaughtList.push(Electrode);
         const Exeggcute = {
            Exeggcute: pokeList.exeggcute
         }
         this.userCaughtList.push(Exeggcute);
         const Exeggutor = {
            Exeggutor: pokeList.exeggutor
         }
         this.userCaughtList.push(Exeggutor);
         const Cubone = {
            Cubone: pokeList.cubone
         }
         this.userCaughtList.push(Cubone);
         const Marowak = {
            Marowak: pokeList.marowak
         }
         this.userCaughtList.push(Marowak);
         const Hitmonlee = {
            Hitmonlee: pokeList.hitmonlee
         }
         this.userCaughtList.push(Hitmonlee);
         const Hitmonchan = {
            Hitmonchan: pokeList.hitmonchan
         }
         this.userCaughtList.push(Hitmonchan);
         const Lickitung = {
            Lickitung: pokeList.lickitung
         }
         this.userCaughtList.push(Lickitung);
         const Koffing = {
            Koffing: pokeList.koffing
         }
         this.userCaughtList.push(Koffing);
         const Weezing = {
            Weezing: pokeList.weezing
         }
         this.userCaughtList.push(Weezing);
         const Rhyhorn = {
            Rhyhorn: pokeList.rhyhorn
         }
         this.userCaughtList.push(Rhyhorn);
         const Rhydon = {
            Rhydon: pokeList.rhydon
         }
         this.userCaughtList.push(Rhydon);
         const Chansey = {
            Chansey: pokeList.chansey
         }
         this.userCaughtList.push(Chansey);
         const Tangela = {
            Tangela: pokeList.tangela
         }
         this.userCaughtList.push(Tangela);
         const Kangaskhan = {
            Kangaskhan: pokeList.kangaskhan
         }
         this.userCaughtList.push(Kangaskhan);
         const Horsea = {
            Horsea: pokeList.horsea
         }
         this.userCaughtList.push(Horsea);
         const Seadra = {
            Seadra: pokeList.seadra
         }
         this.userCaughtList.push(Seadra);
         const Goldeen = {
            Goldeen: pokeList.goldeen
         }
         this.userCaughtList.push(Goldeen);
         const Seaking = {
            Seaking: pokeList.seaking
         }
         this.userCaughtList.push(Seaking);
         const Staryu = {
            Staryu: pokeList.staryu
         }
         this.userCaughtList.push(Staryu);
         const Starmie = {
            Starmie: pokeList.starmie
         }
         this.userCaughtList.push(Starmie);
         const MrMime = { // undefined
            MrMime: pokeList.mrMime
         }
         this.userCaughtList.push(MrMime);
         const Scyther = {
            Scyther: pokeList.scyther
         }
         this.userCaughtList.push(Scyther);
         const Jynx = {
            Jynx: pokeList.jynx
         }
         this.userCaughtList.push(Jynx);
         const Electabuzz = {
            Electabuzz: pokeList.electabuzz
         }
         this.userCaughtList.push(Electabuzz);
         const Magmar = {
            Magmar: pokeList.magmar
         }
         this.userCaughtList.push(Magmar);
         const Pinsir = {
            Pinsir: pokeList.pinsir
         }
         this.userCaughtList.push(Pinsir);
         const Tauros = {
            Tauros: pokeList.tauros
         }
         this.userCaughtList.push(Tauros);
         const Magikarp = {
            Magikarp: pokeList.magikarp
         }
         this.userCaughtList.push(Magikarp);
         const Gyarados = {
            Gyarados: pokeList.gyarados
         }
         this.userCaughtList.push(Gyarados);
         const Lapras = {
            Lapras: pokeList.lapras
         }
         this.userCaughtList.push(Lapras);
         const Ditto = {
            Ditto: pokeList.ditto
         }
         this.userCaughtList.push(Ditto);
         const Eevee = {
            Eevee: pokeList.eevee
         }
         this.userCaughtList.push(Eevee);
         const Vaporeon = {
            Vaporeon: pokeList.vaporeon
         }
         this.userCaughtList.push(Vaporeon);
         const Jolteon = {
            Jolteon: pokeList.jolteon
         }
         this.userCaughtList.push(Jolteon);
         const Flareon = {
            Flareon: pokeList.flareon
         }
         this.userCaughtList.push(Flareon);
         const Porygon = {
            Porygon: pokeList.porygon
         }
         this.userCaughtList.push(Porygon);
         const Omanyte = {
            Omanyte: pokeList.omanyte
         }
         this.userCaughtList.push(Omanyte);
         const Omastar = {
            Omastar: pokeList.omastar
         }
         this.userCaughtList.push(Omastar);
         const Kabuto = {
            Kabuto: pokeList.kabuto
         }
         this.userCaughtList.push(Kabuto);
         const Kabutops = {
            Kabutops: pokeList.kabutops
         }
         this.userCaughtList.push(Kabutops);
         const Aerodactyl = {
            Aerodactyl: pokeList.aerodactyl
         }
         this.userCaughtList.push(Aerodactyl);
         const Snorlax = {
            Snorlax: pokeList.snorlax
         }
         this.userCaughtList.push(Snorlax);
         const Articuno = {
            Articuno: pokeList.articuno
         }
         this.userCaughtList.push(Articuno);
         const Zapdos = {
            Zapdos: pokeList.zapdos
         }
         this.userCaughtList.push(Zapdos);
         const Moltres = {
            Moltres: pokeList.moltres
         }
         this.userCaughtList.push(Moltres);
         const Dratini = {
            Dratini: pokeList.dratini
         }
         this.userCaughtList.push(Dratini);
         const Dragonair = {
            Dragonair: pokeList.dragonair
         }
         this.userCaughtList.push(Dragonair);
         const Dragonite = {
            Dragonite: pokeList.dragonite
         }
         this.userCaughtList.push(Dragonite);
         const Mewtwo = {
            Mewtwo: pokeList.mewtwo
         }
         this.userCaughtList.push(Mewtwo);
         const Mew = {
            Mew: pokeList.mew
         }
         this.userCaughtList.push(Mew);

         console.log(this.userCaughtList);
      })
   }
}

