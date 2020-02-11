import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import  'firebase/firestore';

import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { Unittrust } from '../shared/models/unittrust';
import { FirebaseUnittrustService } from '../shared/services/firebase-unittrust.service';

@Component({
  selector: 'app-unitchart',
  templateUrl: './unitchart.page.html',
  styleUrls: ['./unitchart.page.scss'],
})
export class UnitchartPage implements OnInit {

  unittrustId: string;
  chartLabels: Label[];
  priceArray: any[] = [];

  chartData: ChartDataSets[] = [{ data: [], label: 'Price' }];


  chartOptions={
    responsive: true,
    title: {
      display: true,
      text: 'Price History'
    }
  };
  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#007a88'

    }
  ];

    chartType = 'bar';
    showLegend = false;

    
 
      // For search



  constructor(private unittrustService: FirebaseUnittrustService, private router: Router, private route: ActivatedRoute, private toastController: ToastController, private http: HttpClient, private loadingController: LoadingController) 
  {   


  }


//   async try() {
//      let unitDoc = firebase.firestore().collection('unittrust').doc(this.unittrustId).collection('price');
//      await unitDoc.get().then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(doc.id, "=>", doc.data()); 
      
//     })
  
  

//       this.getUnitTrust()
//   })
     
  
// }




async getUnitTrust() {
  let unitDoc = firebase.firestore().collection('unittrust/' + this.route.snapshot.params.id + "/offerprice");
  await unitDoc.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data()); 
      this.priceArray.push(doc.data())
    })
  })
  this.getData()

}

getData() {
  const history = this.priceArray;
  this.chartLabels = [];
  this.chartData[0].data = [];

  for (let entry of history) {
    var d = new Date(entry.date)
    var dte = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
    this.chartLabels.push(dte);
    this.chartData[0].data.push(entry['offerprice']);
  }

}

typeChanged(e) {
  const on = e.detail.checked;
  this.chartType = on ? 'line' : 'bar';
}




  ngOnInit() {
  this.getUnitTrust();
  }
  

}
