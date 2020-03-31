import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

   @Input() pokeData: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async close() {
     await this.modalCtrl.dismiss();
  }

}
