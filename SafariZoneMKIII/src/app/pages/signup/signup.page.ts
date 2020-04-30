import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PokedexService } from 'src/app/services/pokedex.service';
import { ToastController } from '@ionic/angular';


@Component({
   selector: 'app-signup',
   templateUrl: './signup.page.html',
   styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
   newlog = {};
   public signupForm: FormGroup;

   public submitAttempt = false;

   constructor(public formBuilder: FormBuilder, private pService: PokedexService, private toastCtrl: ToastController) {
      this.signupForm = formBuilder.group({
         emailAddress: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
         password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
         confirm: ['', Validators.required]
      })
   }

   ngOnInit() {
   }

   async presentToast(message: string) {
      const toast = await this.toastCtrl.create({
         message: message,
         duration: 2000
      });
      toast.present();
   }


   signupAttempt(password, confirm) {
      if (password !== confirm) {
         this.presentToast('Passwords do not match');
      } else if (!this.signupForm.valid) {
         this.presentToast('Invalid inputs. Please try again');
      } else {
         this.pService.signUp(this.signupForm.value);
         setTimeout(() => {
            console.log(this.pService.duplicateUser);
            if (this.pService.duplicateUser === false) {
               this.presentToast('Success! User account created!')
               this.newlog = {
                  id: 0,
                  userEmail: this.signupForm.value.emailAddress,
                  Bulbasaur: false,
                  Ivysaur: false,
                  Venusaur: false,
                  Charmander: false,
                  Charmeleon: false,
                  Charizard: false,
                  Squirtle: false,
                  Wartortle: false,
                  Blastoise: false,
                  Caterpie: false,
                  Metapod: false,
                  Butterfree: false,
                  Weedle: false,
                  Kakuna: false,
                  Beedrill: false,
                  Pidgey: false,
                  Pidgeotto: false,
                  Pidgeot: false,
                  Rattata: false,
                  Raticate: false,
                  Spearow: false,
                  Fearow: false,
                  Ekans: false,
                  Arbok: false,
                  Pikachu: false,
                  Raichu: false,
                  Sandshrew: false,
                  Sandslash: false,
                  NidoranF: false,
                  Nidorina: false,
                  Nidoqueen: false,
                  NidoranM: false,
                  Nidorino: false,
                  Nidoking: false,
                  Clefairy: false,
                  Clefable: false,
                  Vulpix: false,
                  Ninetales: false,
                  Jigglypuff: false,
                  Wigglytuff: false,
                  Zubat: false,
                  Golbat: false,
                  Oddish: false,
                  Gloom: false,
                  Vileplume: false,
                  Paras: false,
                  Parasect: false,
                  Venonat: false,
                  Venomoth: false,
                  Diglett: false,
                  Dugtrio: false,
                  Meowth: false,
                  Persian: false,
                  Psyduck: false,
                  Golduck: false,
                  Mankey: false,
                  Primeape: false,
                  Growlithe: false,
                  Arcanine: false,
                  Poliwag: false,
                  Poliwhirl: false,
                  Poliwrath: false,
                  Abra: false,
                  Kadabra: false,
                  Alakazam: false,
                  Machop: false,
                  Machoke: false,
                  Machamp: false,
                  Bellsprout: false,
                  Weepinbell: false,
                  Victreebel: false,
                  Tentacool: false,
                  Tentacruel: false,
                  Geodude: false,
                  Graveler: false,
                  Golem: false,
                  Ponyta: false,
                  Rapidash: false,
                  Slowpoke: false,
                  Slowbro: false,
                  Magnemite: false,
                  Magneton: false,
                  Farfetchd: false,
                  Doduo: false,
                  Dodrio: false,
                  Seel: false,
                  Dewgong: false,
                  Grimer: false,
                  Muk: false,
                  Shellder: false,
                  Cloyster: false,
                  Gastly: false,
                  Haunter: false,
                  Gengar: false,
                  Onix: false,
                  Drowzee: false,
                  Hypno: false,
                  Krabby: false,
                  Kingler: false,
                  Voltorb: false,
                  Electrode: false,
                  Exeggcute: false,
                  Exeggutor: false,
                  Cubone: false,
                  Marowak: false,
                  Hitmonlee: false,
                  Hitmonchan: false,
                  Lickitung: false,
                  Koffing: false,
                  Weezing: false,
                  Rhyhorn: false,
                  Rhydon: false,
                  Chansey: false,
                  Tangela: false,
                  Kangaskhan: false,
                  Horsea: false,
                  Seadra: false,
                  Goldeen: false,
                  Seaking: false,
                  Staryu: false,
                  Starmie: false,
                  MrMime: false,
                  Scyther: false,
                  Jynx: false,
                  Electabuzz: false,
                  Magmar: false,
                  Pinsir: false,
                  Tauros: false,
                  Magikarp: false,
                  Gyarados: false,
                  Lapras: false,
                  Ditto: false,
                  Eevee: false,
                  Vaporeon: false,
                  Jolteon: false,
                  Flareon: false,
                  Porygon: false,
                  Omanyte: false,
                  Omastar: false,
                  Kabuto: false,
                  Kabutops: false,
                  Aerodactyl: false,
                  Snorlax: false,
                  Articuno: false,
                  Zapdos: false,
                  Moltres: false,
                  Dratini: false,
                  Dragonair: false,
                  Dragonite: false,
                  Mewtwo: false,
                  Mew: false,
               }
               this.pService.signUp2(this.newlog);
            } else {
               this.presentToast('That email already has an account.')
            }
         }, 3000);
      }
   }
}
