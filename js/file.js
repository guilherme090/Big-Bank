/*
----------------------------------------------------------------------------------
Main variables
----------------------------------------------------------------------------------
Store values that refer to the user's account at Big Bank
*/
const INITIAL_NAME = 'Enzo Valentino da Silva';
let name = INITIAL_NAME;
const INITIAL_BRANCH = '012'
const INITIAL_ACCOUNT = '4563-80'
let branch = INITIAL_BRANCH;
let account = INITIAL_ACCOUNT;
const INITIAL_BALANCE = 2000.00; // initial balance to simulate an account
let balance = INITIAL_BALANCE; 
const HISTORY_MAX_LENGTH = 5;
let phoneHistory = []; // will contain last transactions 

/*
----------------------------------------------------------------------------------
HTML ELEMENTS
----------------------------------------------------------------------------------
HTML tags to be controlled
*/

// Title screen ------------------------------------------------------------------
let titlePage = document.querySelector('#title-page');
let moneyBox = document.querySelector('#money-box');
let btnDeposit = document.querySelector('#btn-deposit');
let btnCellphone = document.querySelector('#btn-cellphone');
btnCellphone.onclick = cellphoneScreen;
let btnTransfer = document.querySelector('#btn-transfer');
let btnPay = document.querySelector('#btn-pay');
btnPay.onclick = payScreen;

// Cellphone deposit screen ------------------------------------------------------
let cellphonePage = document.querySelector('#cellphone-page');
let cellphoneBox = document.querySelector('#cellphone-box');
let anotherNumberText = document.querySelector('#another-number-text');
let btnAnotherNumber = document.querySelector('#btn-another-number');
let btnReturn1 = document.querySelector('#btn-return-1');
btnReturn1.onclick = mainScreen;

// Pay debts screen --------------------------------------------------------------
let payPage = document.querySelector('#pay-page');
let btnReturn2 = document.querySelector('#btn-return-2');
btnReturn2.onclick = mainScreen;

// Transfer money page -----------------------------------------------------------
let transferMoneyPage = document.querySelector('#transfer-money-page');

/*
----------------------------------------------------------------------------------
START PAGE
----------------------------------------------------------------------------------
initialization elements for titlePage
*/

function mainScreen(){
    let theName = name + '<br><br>';
    let theAccount = 'Agência: ' + branch + ' - ' + 'Conta: ' + account + '<br><br>'; 
    let theBalance = 'Seu saldo: R$' + balance.toFixed(2);
    moneyBox.innerHTML = theName + theAccount + theBalance;
    
    // Show title page, hide others.
    titlePage.style.display = 'block';
    cellphonePage.style.display = 'none';
    payPage.style.display = 'none';
    transferMoneyPage.style.display = 'none';
}

/*
----------------------------------------------------------------------------------
CELLPHONE PAGE
----------------------------------------------------------------------------------
initialization elements for cellphone credit deposits.
*/

function cellphoneScreen(){
    // Show cellphone page, hide others.
    titlePage.style.display = 'none';
    cellphonePage.style.display = 'block';
    payPage.style.display = 'none';
    transferMoneyPage.style.display = 'none';
}

function payScreen(){
    // Show pay page, hide others.
    titlePage.style.display = 'none';
    cellphonePage.style.display = 'none';
    payPage.style.display = 'block';
    transferMoneyPage.style.display = 'none';
}

mainScreen();

// // Test (make parts of the page invisible)
// titlePage.style.display = 'none';
// cellphonePage.style.display = 'none';
// payPage.style.display = 'none';
// transferMoneyPage.style.display = 'none';