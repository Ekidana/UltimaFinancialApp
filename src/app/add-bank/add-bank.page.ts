import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import  'firebase/firestore';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/users';
@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.page.html',
  styleUrls: ['./add-bank.page.scss'],
})
export class AddBankPage implements OnInit  {

  addbankform: FormGroup;   
  user: User = new User();

  accountname: string = "";
  bankname: string = "";
  accountnumber: string = "";

  constructor(private authService: AuthService,private router: Router,public toastController: ToastController, public loadingController: LoadingController) { 
    

  }

  ngOnInit() {
     this.user = this.authService.getCurrentUser();
    this.addbankform = new FormGroup({
      accountname: new FormControl(this.accountname),
      accountnumber: new FormControl(this.accountnumber),
      bankname: new FormControl(this.bankname)
    });
  }

  list_original = ["DBS Ltd","POSB Bank","United Overseas Bank Ltd","Oversea-Chinese Banking Corporation Ltd",
  "Australia and New Zealand Banking Group","Bank of China Limited","The Bank of Tokyo-Mitsubishi UFJ","BNP Paribas","CIMB Singapore Limited",
  "Deutsche Bank AG", "HL Bank","HSBC Bank","ICICI Bank Limited","Industrial And Commercial Bank of China","Maybank Singapore Limited","Mizuho Bank","RHB Bank Berhad","Standard Chartered Bank","Sumitomo Mitsui Banking Corporatio" 
  ];
  list_to_show = this.list_original;
  selected_index = -1;
  show_list = true;

  async addAccount() {
    this.accountname = this.addbankform.value.accountname
    this.accountnumber = this.addbankform.value.accountnumber
    this.bankname = this.addbankform.get('bankname').value

    if(this.accountname == ""){
      alert("Kindly enter account name!")
    }
    else if(this.accountnumber == ""){
      alert("Kindly enter account number!")
    }
    else if( isNaN(parseInt(this.accountnumber))){
      alert("Kindly enter only number as account number!")
    }
    else if(this.bankname == ""){
      alert("Kindly select bank name!")
    }
    else{
      firebase.firestore().collection('users').where('email','==',this.user.email).get().then(doc => {
        doc.forEach(doc => {
          const document = firebase.firestore().collection('BankAccount').doc();
      const documentid = document.id;
    //  alert(documentid)
      document.set({
        userid: doc.data().userid,
        accountnumber: parseInt(this.accountnumber),
        bankname: this.bankname,
        bankID:documentid,
        accountname: this.accountname
      }).then(() => {
    
        alert("Bank Account Added")
        this.router.navigate(['/bankacc']);

      });
        })
      })
    }


  }

  onCancel(val) {
    this.show_list = false;
  }

  click_bar() {
    this.show_list = true;
  }

  click_item(val)
  {
        for (let i = 0 ; i < this.list_original.length; i++)
        {
            if (this.list_to_show[val].toUpperCase() === this.list_original[i].toUpperCase()) {
                this.selected_index = i;
                break;
            }
        }
        this.show_list = false;
  }

  change_query(query)
  {
                let k = 0;
                this.list_to_show = [];
                for (let i = 0 ; i < this.list_original.length; i++)
                {
                    if (this.list_original[i].toUpperCase().includes(query.toUpperCase()))
                    {
                       this.list_to_show[k] =  this.list_original[i];
                       k += 1;
                    }
                }
  }

}
/*
  validation(){
    this.presentLoading();
    setTimeout(()=>{
      this.presentToast();
      this.navigate();
  }, 2000);

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: 'Securely Withdrawing Money',
      translucent: true,
    });
    return await loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Money Withdrawed Successfully.',
      duration: 2000
    });
    toast.present();
  }

  navigate(){
    this.router.navigate(['/withdraw'])
  }

  bank = [
    {
      id: "58asd5f6a84356a8d7fx5vf78",
      name: "Mjellma Shtypi",
      currency: "$"
  }
  ]
  */
