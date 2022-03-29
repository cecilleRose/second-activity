import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public actionSheetCtrl:ActionSheetController) {}
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'contact',
      cssClass: 'custom-css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'ios',
      buttons: [
        {
          text:'Call',
          icon: 'call-outline',
          handler: ()=> {
            console.log('the call button has been clicked');
          }
          
        },
        {
          text:'Send Message',
          role:'cancel',
          icon: 'mail-outline',
          handler: ()=> {
            console.log('the message button has been clicked');
          }
        },
        {
          text:'Cancel',
          role:'destructive',
          icon: 'close',
          handler: ()=> {
            console.log('the cancel button has been clicked');
          }
        }
      ]
     

    });
    actionSheet.present();
  }
}
