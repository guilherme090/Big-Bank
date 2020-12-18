/*
----------------------------------------------------------------------------------
ACCOUNT DATA
----------------------------------------------------------------------------------
Client and account information to be directly manipulated by the program.
*/

class Cliente {
    constructor(nome, rg, milhas, conta, numerosHistorico){
        this._nome = nome;
        this._rg = rg;
        this._milhas = milhas;
        this._conta = conta; // Client's main account from which the app is simulated.
        this._numerosHistorico = numerosHistorico; // Contains last numbers that received credits via this app.
    }

    get nome(){
        return this._nome;
    }

    set nome(newNome){
        this._nome = newNome;
    }

    get rg(){
        return this._rg;
    }

    set rg(newRg){
        this._rg = newRg; 
    }

    get milhas(){
        return this._milhas;
    }

    set milhas(newMilhas){
        this._milhas = newMilhas;
    }

    get conta(){
        return this._conta;
    }

    set conta(newConta){
        this._conta = newConta;
    }

    get numerosHistorico(){
        return this._numerosHistorico;
    }

    set numerosHistorico(newNumerosHistorico){
        this._numerosHistorico = newNumerosHistorico;
    }
}

class NumeroDeRecarga {
    constructor(operadora, ddd, cidade, numero){
        this._operadora = operadora;
        this._ddd = ddd;
        this._cidade = cidade;
        this._numero = numero;
    }

    get operadora(){
        return this._operadora;
    }

    set operadora(newOperadora){
        this._operadora = newOperadora;
    }

    get ddd(){
        return this._ddd;
    }

    set ddd(newDdd){
        this._ddd = newDdd;
    }

    get cidade(){
        return this._cidade;
    }

    set cidade(newCidade){
        this._cidade = newCidade;
    }

    get numero(){
        return this._numero;
    }

    set numero(newNumero){
        this._numero = newNumero;
    }

    get cliente(){
        return this._cliente;
    }

    set cliente(newCliente){
        this._cliente = newCliente;
    }
}

class ContaCorrente {
    constructor(numero, agencia, saldo, poupancas){
        this._numero = numero;
        this._agencia = agencia;
        this._saldo = saldo;
        this._poupancas = poupancas;
    }

    get numero(){
        return this._numero;
    }

    set numero(newNumero){
        this._numero = newNumero;
    }

    get agencia(){
        return this._agencia;
    }

    set agencia(newAgencia){
        this._agencia = newAgencia;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(newSaldo){
        this._saldo = newSaldo;
    }
}

/*
----------------------------------------------------------------------------------
Main variables
----------------------------------------------------------------------------------
Store values that refer to the user's account at Big Bank
*/
const userHistory = []; //simulate initial history of transactions
userHistory.push(new NumeroDeRecarga('ESCURO', '31', 'Belo Horizonte', '912300000'));
userHistory.push(new NumeroDeRecarga('MAIA', '31', 'Belo Horizonte', '912398765'));
userHistory.push(new NumeroDeRecarga('MORTO', '31', 'Betim', '912312345'));
const userAccount = new ContaCorrente('4563-80', '012', 2000.00, ''); // simulate user's account
const user = new Cliente('Enzo Valentino da Silva', 88888888, 1000, userAccount, userHistory);

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
let btnNumber1 = document.querySelector('#btn-number-1'); // button in history
let spanNumber1 = document.querySelector('#span-number-1'); // span in history
let btnNumber2 = document.querySelector('#btn-number-2'); // button in history
let spanNumber2 = document.querySelector('#span-number-2'); // span in history
let btnNumber3 = document.querySelector('#btn-number-3'); // button in history
let spanNumber3 = document.querySelector('#span-number-3'); // span in history
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
    let theName = user.nome + '<br><br>';
    console.log(theName);
    console.log(user.conta);
    let theAccount = 'Agência: ' + user.conta.agencia + ' - ' + 'Conta: ' + user.conta.numero + '<br><br>'; 
    console.log(theAccount);
    let theBalance = 'Seu saldo: R$' + user.conta.saldo.toFixed(2);
    console.log(theBalance);
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

    spanNumber1.innerHTML = user.numerosHistorico[0].operadora + ' - ' + 
    user.numerosHistorico[0].cidade + ' - ' +
    user.numerosHistorico[0].ddd + user.numerosHistorico[0].numero;

    spanNumber2.innerHTML = user.numerosHistorico[1].operadora + ' - ' + 
    user.numerosHistorico[1].cidade + ' - ' +
    user.numerosHistorico[1].ddd + user.numerosHistorico[1].numero;

    spanNumber3.innerHTML = user.numerosHistorico[2].operadora + ' - ' + 
    user.numerosHistorico[2].cidade + ' - ' +
    user.numerosHistorico[2].ddd + user.numerosHistorico[2].numero;

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