import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'signupprofile',
    loadChildren: () => import('./signupprofile/signupprofile.module').then( m => m.SignupprofilePageModule)
  },
  {
    path: 'updateprofile',
    loadChildren: () => import('./updateprofile/updateprofile.module').then( m => m.UpdateprofilePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'cusverify',
    loadChildren: () => import('./cusverify/cusverify.module').then( m => m.CusverifyPageModule)
  },
  {
    path: 'cusupdate',
    loadChildren: () => import('./cusupdate/cusupdate.module').then( m => m.CusupdatePageModule)
  },
  {
    path: 'cusdelete',
    loadChildren: () => import('./cusdelete/cusdelete.module').then( m => m.CusdeletePageModule)
  },
  {
    path: 'edit-cus/:id',
    loadChildren: () => import('./edit-cus/edit-cus.module').then( m => m.EditCusPageModule)
  },
  {
    path: 'admin-investment',
    loadChildren: () => import('./admin-investment/admin-investment.module').then( m => m.AdminInvestmentPageModule)
  },
  {
    path: 'adminunittrust',
    loadChildren: () => import('./adminunittrust/adminunittrust.module').then( m => m.AdminunittrustPageModule)
  },
  {
    path: 'add-unittrust',
    loadChildren: () => import('./add-unittrust/add-unittrust.module').then( m => m.AddUnittrustPageModule)
  },
  {
    path: 'edit-unittrust/:id',
    loadChildren: () => import('./edit-unittrust/edit-unittrust.module').then( m => m.EditUnittrustPageModule)
  },
  {
    path: 'investment',
    loadChildren: () => import('./investment/investment.module').then( m => m.InvestmentPageModule)
  },
  {
    path: 'unittrust',
    loadChildren: () => import('./unittrust/unittrust.module').then( m => m.UnittrustPageModule)
  },
  {
    path: 'go-unittrust',
    loadChildren: () => import('./go-unittrust/go-unittrust.module').then( m => m.GoUnittrustPageModule)
  },
  {
    path: 'saving',
    loadChildren: () => import('./saving/saving.module').then( m => m.SavingPageModule)
  },
  {
    path: 'unitchart/:id',
    loadChildren: () => import('./unitchart/unitchart.module').then( m => m.UnitchartPageModule)
  },
  {
    path: 'adminverifyidentity',
    loadChildren: () => import('./adminverifyidentity/adminverifyidentity.module').then( m => m.AdminverifyidentityPageModule)
  },
  {
    path: 'adminverifyidentitydetails/:id',
    loadChildren: () => import('./adminverifyidentitydetails/adminverifyidentitydetails.module').then( m => m.AdminverifyidentitydetailsPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'expensetracker-create',
    loadChildren: () => import('./expensetracker-create/expensetracker-create.module').then( m => m.ExpensetrackerCreatePageModule)
  },
  {
    path: 'expensetracker-edit/:id',
    loadChildren: () => import('./expensetracker-edit/expensetracker-edit.module').then( m => m.ExpensetrackerEditPageModule)
  },
  {
    path: 'expensetracker-list',
    loadChildren: () => import('./expensetracker-list/expensetracker-list.module').then( m => m.ExpensetrackerListPageModule)
  },
  {
    path: 'verifyidentity',
    loadChildren: () => import('./verifyidentity/verifyidentity.module').then( m => m.VerifyidentityPageModule)
  },
  {
    path: 'add-bank',
    loadChildren: () => import('./add-bank/add-bank.module').then( m => m.AddBankPageModule)
  },
  {
    path: 'app-feedback',
    loadChildren: () => import('./app-feedback/app-feedback.module').then( m => m.AppFeedbackPageModule)
  },
  {
    path: 'bankacc',
    loadChildren: () => import('./bankacc/bankacc.module').then( m => m.BankaccPageModule)
  },
  {
    path: 'confirm-depo/:deposit',
    loadChildren: () => import('./confirm-depo/confirm-depo.module').then( m => m.ConfirmDepoPageModule)
  },
  {
    path: 'deposit',
    loadChildren: () => import('./deposit/deposit.module').then( m => m.DepositPageModule)
  },
  {
    path: 'depositchart',
    loadChildren: () => import('./depositchart/depositchart.module').then( m => m.DepositchartPageModule)
  },
  {
    path: 'yesfeedback',
    loadChildren: () => import('./yesfeedback/yesfeedback.module').then( m => m.YesfeedbackPageModule)
  },
  {
    path: 'withdrawalchart',
    loadChildren: () => import('./withdrawalchart/withdrawalchart.module').then( m => m.WithdrawalchartPageModule)
  },
  {
    path: 'withdrawal',
    loadChildren: () => import('./withdrawal/withdrawal.module').then( m => m.WithdrawalPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'reach-target',
    loadChildren: () => import('./reach-target/reach-target.module').then( m => m.ReachTargetPageModule)
  },
  {
    path: 'processacc',
    loadChildren: () => import('./processacc/processacc.module').then( m => m.ProcessaccPageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then( m => m.OthersPageModule)
  },
  {
    path: 'nqfeedback',
    loadChildren: () => import('./nqfeedback/nqfeedback.module').then( m => m.NqfeedbackPageModule)
  },
  {
    path: 'nonexist-acc',
    loadChildren: () => import('./nonexist-acc/nonexist-acc.module').then( m => m.NonexistAccPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./messagewithdraw/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'messagedepo',
    loadChildren: () => import('./messagedepo/messagedepo.module').then( m => m.MessagedepoPageModule)
  },
  {
    path: 'listacc',
    loadChildren: () => import('./listacc/listacc.module').then( m => m.ListaccPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'takeout',
    loadChildren: () => import('./takeout/takeout.module').then( m => m.TakeoutPageModule)
  },
  {
    path: 'unittrustpricehistory/:id',
    loadChildren: () => import('./unittrustpricehistory/unittrustpricehistory.module').then( m => m.UnittrustpricehistoryPageModule)
  },
  {
    path: 'update-bidprice/:id',
    loadChildren: () => import('./update-bidprice/update-bidprice.module').then( m => m.UpdateBidpricePageModule)
  },
  {
    path: 'update-offerprice/:id',
    loadChildren: () => import('./update-offerprice/update-offerprice.module').then( m => m.UpdateOfferpricePageModule)
  },
  {
    path: 'buyunit/:name',
    loadChildren: () => import('./buyunit/buyunit.module').then( m => m.BuyunitPageModule)
  },
  {
    path: 'fmbuypage/:id',
    loadChildren: () => import('./fmbuypage/fmbuypage.module').then( m => m.FmbuypagePageModule)
  },
  {
    path: 'fmbuyrequest',
    loadChildren: () => import('./fmbuyrequest/fmbuyrequest.module').then( m => m.FmbuyrequestPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'transactionhistory',
    loadChildren: () => import('./transactionhistory/transactionhistory.module').then( m => m.TransactionhistoryPageModule)
  },
  {
    path: 'sellunit/:id',
    loadChildren: () => import('./sellunit/sellunit.module').then( m => m.SellunitPageModule)
  },
  {
    path: 'fmsellpage/:id',
    loadChildren: () => import('./fmsellpage/fmsellpage.module').then( m => m.FmsellpagePageModule)
  },
  {
    path: 'fmsellrequest',
    loadChildren: () => import('./fmsellrequest/fmsellrequest.module').then( m => m.FmsellrequestPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
