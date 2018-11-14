import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CPage } from './c';
//import { ModalController, NavParams } from 'ionic-angular';
// import { AddPage } from '../add/add';

@NgModule({
  declarations: [
    CPage,
  ],
  imports: [
    IonicPageModule.forChild(CPage),
  ],
})
export class CPageModule {
//   constructor(public modalCtrl: ModalController) {

//   }
 
//   isViewDidLoad(){
//   let profileModal = this.modalCtrl.create(AddPage, { userId: 8675309 });
//   profileModal.present();
// }
}



