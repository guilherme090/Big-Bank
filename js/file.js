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
        // this._numerosHistorico = numerosHistorico; // Contains last numbers that received credits via this app.
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
const userHistory = []; // simulate initial history of transactions
userHistory.push(new NumeroDeRecarga('ESCURO', '31', 'Belo Horizonte', '912300000'));
userHistory.push(new NumeroDeRecarga('MORTO', '31', 'Belo Horizonte', '912398765'));
userHistory.push(new NumeroDeRecarga('TCHAU', '31', 'Betim', '912312345'));
const userAccount = new ContaCorrente('4563-80', '012', 2000.00, ''); // simulate user's account
const user = new Cliente('Enzo Valentino da Silva', 88888888, 1000, userAccount, userHistory);

/*
----------------------------------------------------------------------------------
Provider values
----------------------------------------------------------------------------------
Store provider-related information such as possible cellphone credit values
*/
let creditValues = [['ESCURO', 10, 50, 75],['MORTO', 30, 50, 90], ['TCHAU', 20, 40, 80],
['MAIA', 50, 70, 100]];
let value1 = null; // will receive the value according to the chosen provider.
let value2 = null; // will receive the value according to the chosen provider.
let value3 = null; // will receive the value according to the chosen provider.

/*
----------------------------------------------------------------------------------
HTML ELEMENTS
----------------------------------------------------------------------------------
HTML tags to be controlled
*/

// List of pages -----------------------------------------------------------------
// Used to facilitate making screens invisible
let listOfPages = document.querySelectorAll('.page');

function hideAll(pages){
    for(let i = 0; i < pages.length; i++){
        pages[i].style.display = 'none';
    }
}

// Title screen ------------------------------------------------------------------
let titlePage = document.querySelector('#title-page');
let moneyBox = document.querySelector('#money-box');
let btnDeposit = document.querySelector('#btn-deposit');
btnDeposit.onclick = depositMoney;
let btnCellphone = document.querySelector('#btn-cellphone');
btnCellphone.onclick = cellphoneScreen;
let btnTransfer = document.querySelector('#btn-transfer');
let btnPay = document.querySelector('#btn-pay');
btnPay.onclick = payScreen;

// Cellphone deposit screen ------------------------------------------------------
let cellphonePage = document.querySelector('#cellphone-page');
let cellphoneBox = document.querySelector('#cellphone-box');
let btnNumber1 = document.querySelector('#btn-number-1'); // button in history
btnNumber1.onclick = showOptions1;
let spanNumber1 = document.querySelector('#span-number-1'); // span in history
let btnNumber2 = document.querySelector('#btn-number-2'); // button in history
btnNumber2.onclick = showOptions2;
let spanNumber2 = document.querySelector('#span-number-2'); // span in history
let btnNumber3 = document.querySelector('#btn-number-3'); // button in history
btnNumber3.onclick = showOptions3;
let spanNumber3 = document.querySelector('#span-number-3'); // span in history
let anotherNumberText = document.querySelector('#another-number-text');
let btnAnotherNumber = document.querySelector('#btn-another-number');
btnAnotherNumber.onclick = anotherNumberScreen;
let btnReturnCellphone1 = document.querySelector('#btn-return-cellphone-1');
btnReturnCellphone1.onclick = mainScreen;

// Cellphone new number screen ---------------------------------------------------
let cellphonePageNewNumber = document.querySelector('#cellphone-page-new-number');
let cellphoneBox2 = document.querySelector('#cellphone-box-2');
let newCity = document.querySelector('#newcellphone-city');
let newProvider = document.querySelector('#newcellphone-provider');
let newCode = document.querySelector('#newcellphone-code');
let newNumber = document.querySelector('#newcellphone-number');
let btnOK = document.querySelector('#btn-ok');
btnOK.onclick = registerPhone;
let btnReturnCellphone2 = document.querySelector('#btn-return-cellphone-2');
btnReturnCellphone2.onclick = mainScreen;

// Cellphone choose value screen -------------------------------------------------
let cellphonePageCreditOptions = document.querySelector('#cellphone-page-credit-options');
let cellphoneBox3 = document.querySelector('#cellphone-box-3');
let btnValue1 = document.querySelector('#btn-value-1');
btnValue1.onclick = recharge1;
let btnValue2 = document.querySelector('#btn-value-2');
btnValue2.onclick = recharge2;
let btnValue3 = document.querySelector('#btn-value-3');
btnValue3.onclick = recharge3;
let spanValue1 = document.querySelector('#span-value-1');
let spanValue2 = document.querySelector('#span-value-2');
let spanValue3 = document.querySelector('#span-value-3');
let btnReturnCellphone3 = document.querySelector('#btn-return-cellphone-3');
btnReturnCellphone3.onclick = mainScreen;

// Pay debts screen --------------------------------------------------------------
let payPage = document.querySelector('#pay-page');
let btnReturnPay1 = document.querySelector('#btn-return-pay-1');
btnReturnPay1.onclick = mainScreen;

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
    let theBalance = 'Seu saldo: R$' + user.conta.saldo.toFixed(2) + '<br>';
    console.log(theBalance);
    let theMiles = 'Suas milhas: ' + user.milhas;
    moneyBox.innerHTML = theName + theAccount + theBalance + theMiles;
    
    // Show title page, hide others.
    hideAll(listOfPages);
    titlePage.style.display = 'block';
}

/*
----------------------------------------------------------------------------------
function depositMoney()
----------------------------------------------------------------------------------
Used to simulate different amounts of account balance.
*/

function depositMoney(){
    let amountToAdd = Number(window.prompt("Quanto deseja depositar na conta? Valores negativos irão REMOVER dinheiro da conta."));
    if(amountToAdd == '') return;
    if(isNaN(amountToAdd)){
        alert('O valor digitado não é um número válido.');
    }else{
        user.conta.saldo += amountToAdd;
        alert("Saldo atualizado.");
    }
    mainScreen();
}

/*
----------------------------------------------------------------------------------
CELLPHONE PAGE
----------------------------------------------------------------------------------
initialization elements for cellphone credit deposits.
Cellphone use case
*/

function cellphoneScreen(){
    // shows the last 3 entries
    
    spanNumber1.innerHTML = userHistory[0].operadora + ' - ' + 
    userHistory[0].cidade + ' - ' +
    userHistory[0].ddd + userHistory[0].numero;

    spanNumber2.innerHTML = userHistory[1].operadora + ' - ' + 
    userHistory[1].cidade + ' - ' +
    userHistory[1].ddd + userHistory[1].numero;

    spanNumber3.innerHTML = userHistory[2].operadora + ' - ' + 
    userHistory[2].cidade + ' - ' +
    userHistory[2].ddd + userHistory[2].numero;

    // Show cellphone page, hide others.
    hideAll(listOfPages);
    cellphonePage.style.display = 'block';
}

function anotherNumberScreen(){
    // Erase previous values
    newCity.value = '';
    newProvider.value = '';
    newCode.value = '';
    newNumber.value = '';

    // Show new number page, hide others.
    hideAll(listOfPages);
    cellphonePageNewNumber.style.display = 'block';
}

function registerPhone(){
    // ask for user's confirmation (user has to retype the number).
    let confirmation = window.prompt('Digite novamente o número desejado com DDD para confirmar.');
        if(confirmation.normalize() == (newCode.value + newNumber.value).normalize()){
            alert('Operação concluída com sucesso.');
        }else{
            alert('Os números não conferem. A operação não pôde ser concluída.');
            return;
        }
    // rearrange the history from newer to older while getting the new number.
    userHistory[2] = new NumeroDeRecarga(userHistory[1].operadora, userHistory[1].ddd, userHistory[1].cidade, userHistory[1].numero);
    userHistory[1] = new NumeroDeRecarga(userHistory[0].operadora, userHistory[0].ddd, userHistory[0].cidade, userHistory[0].numero);
    userHistory[0] = new NumeroDeRecarga(newProvider.value.toUpperCase(), newCode.value, newCity.value, newNumber.value);

    // go back to the previous screen
    cellphoneScreen();
}

function showOptions1(){
    showOptions(0);
}

function showOptions2(){
    showOptions(1);
}

function showOptions3(){
    showOptions(2);
}

function showOptions(chosenOption){
    // Show options page, hide others.
    // Show recharge values available for the chosen provider.
    hideAll(listOfPages);

    // Determine what is the chosen provider
    let provName = null;
    for(let i = 0; i < creditValues.length; i++){
        if(userHistory[chosenOption].operadora.normalize() === creditValues[i][0]){
            provName = userHistory[chosenOption].operadora;
            spanValue1.innerHTML = 'R$' + creditValues[i][1] + ',00';
            spanValue2.innerHTML = 'R$' + creditValues[i][2] + ',00';
            spanValue3.innerHTML = 'R$' + creditValues[i][3] + ',00';

            value1 = creditValues[i][1];
            value2 = creditValues[i][2];
            value3 = creditValues[i][3];
        }
    }
    if(provName == null){
        alert('A operadora ' + userHistory[chosenOption].operadora + ' não consta na lista do sistema Big Bank.' 
        + ' A operação não poderá ser realizada.');
        mainScreen();
    }else{
        cellphonePageCreditOptions.style.display = 'block';
    }
}

function recharge1(){
    recharge(value1);
}

function recharge2(){
    recharge(value2);
}

function recharge3(){
    recharge(value3);
}

function recharge(rechargeValue){
    // Check if user account has enough money and conclude the operation.
    if(user.conta.saldo < rechargeValue){
        alert('Seu saldo é insuficiente para completar a operação escolhida.');
        cellphoneScreen();
    }else{
        let confirmation = window.prompt('Você tem certeza? Digite sua senha ou posicione seu dedo no leitor biométrico para confirmar.');
        if(confirmation == '12345'){
            user.conta.saldo = user.conta.saldo - rechargeValue;
            alert('Operação concluída com sucesso.');
            mainScreen();
        }else{
            alert('Senha incorreta. A operação não pôde ser concluída.');
            cellphoneScreen();
        }
    }
    
}

function payScreen(){
    // Show pay page, hide others.
    hideAll(listOfPages);
    payPage.style.display = 'block';

}

mainScreen();

// Test (make parts of the page invisible)
// titlePage.style.display = 'none';
// cellphonePage.style.display = 'none';
// payPage.style.display = 'none';
// transferMoneyPage.style.display = 'none';