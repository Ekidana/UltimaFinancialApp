import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-Opener/ngx';
import { File } from '@ionic-native/file/ngx'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import pdfMake from 'pdfmake/build/pdfmake'
import pdffonts from 'pdfmake/build/vfs_fonts'
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/users';
pdfMake.vfs = pdffonts.pdfMake.vfs;


@Component({
  selector: 'app-saving',
  templateUrl: './saving.page.html',
  styleUrls: ['./saving.page.scss'],
})
export class SavingPage implements OnInit {
  user: User = new User();
  fname: any;
  lname: any;
  nric: any;
  
  letterObj = {

  }

  pdfObj = null;

  constructor(private authService: AuthService, public navCtrl: NavController, private plt: Platform, private file: File, private fileOpener: FileOpener) {
    this.user = this.authService.getCurrentUser();
    this.getUser();
   }
 
  getUser() {
    let userDoc = firebase.firestore().collection('users');
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data()); 
        if(doc.data().email == this.user.email){
          this.fname = doc.data().fname
          this.lname = doc.data().lname
          this.nric = doc.data().nric
        } 
      })

    })
  }

  createPdf(){

    var docDefinition = {
      content: [
        { text: new Date().toTimeString(), alignment: 'right' , style: 'smaller'},

        { text: ' Ultima Financial', style: 'header', alignment:'center' },
        { text: ' Application Form For Giro', style: 'header', alignment:'center' },
        

        {table: {
          headerRow: 1,
          width:['*'],
          body: [
            [ {text: 'Part 1: To be Completed By Bank Account Holder', style:'subheader'}],
            [ {text:'Important Notes: Please Read before completing this form', style:'red'}],
            [ {text: '1. Please print out the form and complete it' }],
            [ {text: '2. You may mail the form to our company at 351 alexandra road, #03-09, Singapore 159963     '}]
          ]
        }
      },

      [{ text: 'Part 1: For Applicant Completion', style: 'subheader', alignment:'center'}],

      [{ text: '   ', style: 'space', alignment:'center'}],



      
      // {table: {
      //     headerRow: 1,
      //     widths: ['50%', '50%'],
      //     body: [
      //       [ 'Name Of Bank:', 'Name Of Billing Organisation'],
      //       [ '___________________', {text: 'Ultima Financial Singapore Pte Ltd', style: 'bold'}],
            
      //     ]
    
      //   }
      // },


        // {table: {
        //   headerRow: 1,
        //   widths: ['*', '*'],
        //   body: [
        //     [ 'First', 'Second'],
        //     [ 'Value 1', 'Value 2'],
        //     [ { text: 'Bold value', bold: true }, 'Val 2']
        //   ]
        //   }
        // },

    //     { layout: 'lightHorizontalLines', // optional
    //     table : {
    //     headerRow:1,
    //     widths:['*','*','*','*'],
    //     body: [
    //       [ 'Date:', {text: new Date().toTimeString()} , {text: 'Billing To : Ultima Financial Private Limited', style:'bold'},{text: 'a'}],
    //       ['Name:',{text: this.fname + this.lname}, 'Nric:',{text: this.nric}],
    //       [ 'Name Of Bank: _________________', 'Branch: _____________________','a','a'],
    // ]
    //   }},

        { layout:  {
          hLineWidth: function (i, node) {
            return 1;
          },
          vLineWidth: function (i, node) {
            return -.01;
          },
          hLineColor: function (i, node) {
            return '#ffffff';
          },
          vLineColor: function (i, node) {
            return '#ffffff';
          }}, // optional
          table : {
          headerRow:1,
          widths:['*','*'],
          body: [
            [ 'Date:', {text: 'Billing To', style:'bold'}],
            [{text: new Date().toISOString().toString().slice(0,10)}, {text:'Ultima Financial Private Limited', style:'bold'}],
            ['Name:' , 'Nric:'],
            [{text: this.fname + this.lname}, {text: this.nric}],
            [ 'Name Of Bank: _________________', 'Branch: _____________________'],
            
      
        ]
        }},

        [{ text: '   ', style: 'space', alignment:'center'}],

        {text: 'a. I hereby instrust you to process Ultima Financial Private Limited to debit my account' , style:'smaller'},
        {text: 'b. You are entitled to reject Ultima Financial Private limited debit instruction if my  ' , style:'smaller'},
        {text: '   account does not have sufficient fund and charge me a fee for this.', style:'smaller'},
        {text: 'c. This authorisation will remain in force until terminated by your written ntice sent  ' , style:'smaller'},
        {text: '   to my address last known to you through ultima financial private limited.' , style:'smaller'},
        
        [{ text: '   ', style: 'space', alignment:'center'}],


        { layout: 'lightHorizontalLines', // optional
        table : {
        headerRow:1,
        widths:['*','*'],
        body: [
          [ 'My Account Number: ___________________ ', 'My contact number: __________________'],
    ]
      }},

      
        // { text:'Date:' ,style:'subheader'},
        // { text: '______________________', style:'subheader' },

        // { text:'Name:' ,style:'subheader'},
        // { table : {
        //   headerRow:1,
        //   widths:[200],
        //   body: [
        //     ['                                       ']
        //   ]
        // }},

        // { text:'Mailing Address:' ,style:'subheader'},


        // { text: 'Amount', style:'subheader' },
        // { text: this.letterObj.amount },

        { text: 'Signature:', style:'subheader' },
        
        { text: '___________________', style:'subbheader' },

        [{ text: 'Part 2: To be Completed By Ultima Financial Private Limited', style: 'subheader', alignment:'center'}],

        [{ text: '   ', style: 'space', alignment:'center'}],

        
        { 
        table : {
        headerRow:1,
        widths:['*','*','*'],
        body: [
          [ {text:'Bank', style: 'bold'}, {text:'Branch',style:'bold'}, {text:'Ultima Financial Bank Account Number',style:'bold'}],
          [ '7171 ', '0060  ','0010237644'],

    ]
      }},

      [{ text: '   ', style: 'space', alignment:'center'}],
      [{ text: 'Part 3: To be Completed By Bank', style: 'subheader', alignment:'center'}],
      [{ text: '   ', style: 'space', alignment:'center'}],

      { text: 'To: : Ultima Financial Private Limited', style:'bold' },
      { text: 'This Application has been rejected due to (please tick following reasons)', style:'bold' },

      { layout: 'lightHorizontalLines', // optional
      table : {
      headerRow:1,
      widths:['*','*'],
      body: [
        [{text: [
          { text: '', style: 'icon' }, //icon gift
          " Signature differs from bank's record"
      ]
    },       {text: [
      { text: '', style: 'icon' }, //icon gift
      " wrong account number"
  ]
}],
        [      {text: [
          { text: '', style: 'icon' }, //icon gift
          " Signature is incomplete/unclear"
      ]
    },
    {text: [
      { text: '', style: 'icon' }, //icon gift
      " admendment not countersigned by customer"
  ]
} ],
        [      {text: [
          { text: '', style: 'icon' }, //icon gift
          " Account operated by signature"
      ]
    }, 
    {text: [
      { text: '', style: 'icon' }, //icon gift
      " Others: _______________________________"
  ]
} ],
  ]
    }},
      

      ],

      styles: {
        header: {
          fontSize:25,
          bold: true,
          
        },
        red: {
          color: 'red'

        },
        smaller:{
          fontSize:10,
        },

        bold:{
          bold: true
        },

        space:{
          margin: [0, 10, 0, 0]

        },

        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        subbheader:{
          fontSize: 14,
          bold: true,
          margin: [0, 30, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'cener',
          width: '50%'

        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var utf8 = new Uint8Array(buffer);
        var binaryArray = utf8.buffer;
        var blob = new Blob([binaryArray], { type: 'application/pdf'});
  
        this.file.writeFile(this.file.dataDirectory, 'Giro.pdf', blob, {replace: true}).then(fileEntry =>{
          this.fileOpener.open(this.file.dataDirectory +'Giro.pdf','application/pdf');
        })
      });
  
    } else {
      this.pdfObj.download();
    }

  }

// downloadPdf() {
//   if (this.plt.is('cordova')) {
//     this.pdfObj.getBuffer((buffer) => {
//       var utf8 = new Uint8Array(buffer);
//       var binaryArray = utf8.buffer;
//       var blob = new Blob([binaryArray], { type: 'application/pdf'});

//       this.file.writeFile(this.file.dataDirectory, 'Giro.pdf', blob, {replace: true}).then(fileEntry =>{
//         this.fileOpener.open(this.file.dataDirectory +'Giro.pdf','application/pdf');
//       })
//     });

//   } else {
//     this.pdfObj.download();
//   }

// }

  ngOnInit() {
  }

}
