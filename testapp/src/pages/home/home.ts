import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuccessPage } from '../success/success';
//import { IonicSelectableComponent } from 'ionic-selectable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo = {}
  constructor(public navCtrl: NavController) {}

  date(myDate) {
    console.log(myDate);
  }
  logForm() {
    console.log(this.todo)
  }

    goToSuccessPage(){
      this.navCtrl.push(SuccessPage)
    }
}


// class Service {
//   public id: number;
//   public name: string;
// }

// class NT {
//   public id: number;
//   public name: string;
// }

//services: Service[];
  // service: Service;

  // nailTechs: NT[];
  // nailTech: NT;


  // userServices = []; //for multiple selections
  // ntPreference = null; //for single selection

// this.services = [
//   { id: 1, name: 'Manicure' },
//   { id: 2, name: 'Pedicure' },
//   { id: 3, name: 'FullSet' },
//   { id: 4, name: 'Dip' },
//   { id: 5, name: 'Gel Polish' },
//   { id: 6, name: 'Cut down' },
//   { id: 7, name: 'Repair' }
// ];
// this.nailTechs = [
//   { id: 1, name: 'No' },
//   { id: 2, name: 'Tania' },
//   { id: 3, name: 'Ricardo' },
//   { id: 4, name: 'Liz' },
//   { id: 5, name: 'Uncle Mike' },
//   { id: 6, name: 'Big Mike' },
//   { id: 7, name: 'Susan' },
//   { id: 8, name: 'Paulena' },
//   { id: 9, name: 'Le' },
//   { id: 10, name: 'Tien' },
//   { id: 11, name: 'Michael' },
//   { id: 12, name: 'Lyly' },
//   { id: 13, name: 'B. Jay' },
//   { id: 14, name: 'Mai Thy' },
//   { id: 15, name: 'Kaka' },
//   { id: 16, name: 'Kacey' },
//   { id: 17, name: 'Na' },
//   { id: 18, name: 'Colin' }
// ];


 // serviceChange(event: {
  //   component: IonicSelectableComponent,
  //   value: any
  // }) {
  //   console.log('service:', event.value);
  // }

  // nailTechChange(event: {
  //   component: IonicSelectableComponent,
  //   value: any
  // }) {
  //   console.log('nailTech:', event.value);
  // }