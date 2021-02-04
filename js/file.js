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
Billet values
----------------------------------------------------------------------------------
Store possible values for billets that are typed in by the user
*/
let billetValues = [['123456789123456', 50, 'Maria da Conceição', '2021-12-13'],['874236587412569', 100, 'José Carlos Fernandes', '2021-02-21'], 
['784520013547800', 20, 'Carlos Henrique do Val', '2021-05-04'], ['754111236987452', 90, 'Irene Josefina do Carmo', '2021-06-07']];
let billetValue = null; // will receive the value according to the chosen provider.
let billetName = null; // will receive the value according to the chosen provider.
let billetDate = null; // will receive the value according to the chosen provider.

/*
----------------------------------------------------------------------------------
External transfer values
----------------------------------------------------------------------------------
Store data regarding money transfers to another banks
*/
let transactionType = null; // TED or DOC
let destinationBank = null; // Name of a Brazilian bank

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
btnTransfer.onclick = transferScreen;
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
let btnTypeBarcode = document.querySelector('#btn-type-barcode');
btnTypeBarcode.onclick = getBillet;
let btnReturnPay1 = document.querySelector('#btn-return-pay-1');
btnReturnPay1.onclick = mainScreen;

// Pay debts confirm payment screen ----------------------------------------------
let confirmBilletPayment = document.querySelector('#confirm-billet-payment');
let spanBilletValue = document.querySelector('#span-billet-value');
let spanBilletDestination = document.querySelector('#span-billet-destination');
let billetPaymentDate = document.querySelector('#billet-payment-date');
billetPaymentDate.onchange = paymentDateChanged;
billetPaymentDate.value = "1999-01-01"; //change value to activate paymentDateChanged
paymentDateChanged();
let spanBilletDate = document.querySelector('#span-billet-date');
spanBilletDate.disabled = true;
let btnOKPay = document.querySelector('#btn-ok-pay');
btnOKPay.onclick = payDebt;
let btnReturnPay2 = document.querySelector('#btn-return-pay-2'); 
btnReturnPay2.onclick = mainScreen;

// Transfer money page -----------------------------------------------------------
let transferMoneyPage = document.querySelector('#transfer-money-page');
let btnBigBankTransfer = document.querySelector('#btn-big-bank-transfer');
btnBigBankTransfer.onclick = transferToBigBank;
let btnAnotherBankTransfer = document.querySelector('#btn-another-bank-transfer');
btnAnotherBankTransfer.onclick = transferToAnotherBank;
let btnReturnTransfer = document.querySelector('#btn-return-transfer');
btnReturnTransfer.onclick = mainScreen;

// Transfer money (other banks) page ---------------------------------------------
let transferMoneyTedDocPage = document.querySelector('#transfer-money-ted-doc');
let comboTransferType = document.querySelector('#combo-transfer-type');
let comboDestinationBank = document.querySelector('#combo-destination-bank');
let btnConfirmTransfer = document.querySelector('#btn-confirm-transfer');
btnConfirmTransfer.onclick = confirmAnotherBank;
let btnReturnTransfer2 = document.querySelector('#btn-return-transfer-2');
btnReturnTransfer2.onclick = mainScreen;

// Transaction details page ------------------------------------------------------
let transactionDetailsPage = document.querySelector('#transaction-details');
let transactionDetailsValue = document.querySelector('#transaction-details-value');
let transactionDetailsName = document.querySelector('#transaction-details-name');
let transactionDetailsCpf = document.querySelector('#transaction-details-cpf');
let transactionDetailsBank = document.querySelector('#transaction-details-bank');
let comboAccountyType = document.querySelector('#combo-account-type');
let transactionDetailsAg = document.querySelector('#transaction-details-ag');
let transactionDetailsNo = document.querySelector('#transaction-details-no');
let btnConfirmTransfer2 = document.querySelector('#btn-confirm-transfer-2');
btnConfirmTransfer2.onclick = transferMoney;
let btnReturnTransfer3 = document.querySelector('#btn-return-transfer-3');
btnReturnTransfer3.onclick = mainScreen;

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

/*
----------------------------------------------------------------------------------
PAY DEBTS PAGE
----------------------------------------------------------------------------------
initialization elements for billet paying.
Pay billet or tax use case
*/

function payScreen(){
    // Show pay page, hide others.
    hideAll(listOfPages);
    payPage.style.display = 'block';

}

function confirmScreen(){
    // Show confirm payment page, hide others.
    hideAll(listOfPages);
    confirmBilletPayment.style.display = 'block';
    spanBilletValue.innerHTML = 'R$ ' + Number(billetValue).toFixed(2);
    spanBilletDestination.innerHTML = billetName;
    console.log(billetDate);
    spanBilletDate.value = billetDate;
}

function paymentDateChanged(){
    // Check if date from input is in the past. If it is, change it to current date.
    theDateComplete = new Date();
    theYear = theDateComplete.getFullYear();
    theMonth = theDateComplete.getMonth() + 1;
    if (theMonth < 10){
        theMonth = '0' + theMonth;
    }
    theDate = theDateComplete.getDate();
    if (theDate < 10){
        theDate = '0' + theDate;
    }
    theDateFormatted =  theYear + '-' + theMonth + '-' + theDate;
    // alert(billetPaymentDate.value + " <> " + theDateFormatted);
    if(billetPaymentDate.value < theDateFormatted){
        billetPaymentDate.value = theDateFormatted;
    }
}

function getBillet(){
    let code = window.prompt('Digite o número do boleto a ser pago.');

    // look for code in the list of billets
    let billetFound = null;
    for(let i = 0; i < billetValues.length; i++){
        if(code.normalize() == billetValues[i][0]){
            billetFound = i;
            billetValue = billetValues[i][1];
            billetName = billetValues[i][2];
            billetDate = billetValues[i][3];
        }
    }
    if(billetFound == null){
        alert('Boleto não encontrado no sistema. Tente novamente.');
        mainScreen();
    }else{
        confirmScreen();
    }
}

function payDebt(){
    // Check if user account has enough money and conclude the operation.
    if(user.conta.saldo < billetValue){
        alert('Seu saldo é insuficiente para completar a operação escolhida.');
        payScreen();
    }else{
        let confirmation = window.prompt('Você tem certeza? Digite sua senha ou posicione seu dedo no leitor biométrico para confirmar.');
        if(confirmation == '12345'){
            user.conta.saldo = user.conta.saldo - billetValue;
            alert('Operação concluída com sucesso.');
            mainScreen();
        }else{
            alert('Senha incorreta. A operação não pôde ser concluída.');
            payScreen();
        }
    }
}

/*
----------------------------------------------------------------------------------
TRANSFER MONEY PAGE
----------------------------------------------------------------------------------
initialization elements for money transferring.
Big Bank to Big Bank or Big Bank to another bank.
*/

function transferScreen(){

    // Show trasnfer money page, hide others.
    hideAll(listOfPages);
    transferMoneyPage.style.display = 'block';
}

function transferToBigBank(){
    destinationBank = 'Big Bank';
    transactionDetailsScreen();
}

function transferToAnotherBank(){
    // Show trasnfer money page, hide others.
    hideAll(listOfPages);
    transferMoneyTedDocPage.style.display = 'block';
}

function confirmAnotherBank(){
    transactionType = comboTransferType.value;
    destinationBank = comboDestinationBank.value;
    if(transactionType === 'DOC'){
        transactionDetailsValue.max = 4999.99;
    }else{
        transactionDetailsValue.max = '';
    }
    transactionDetailsScreen();
}

function transactionDetailsScreen(){
    transactionDetailsBank.innerHTML = destinationBank;
    // Show transaction details page, hide others.
    hideAll(listOfPages);
    transactionDetailsPage.style.display = 'block';
}

function transferMoney(){
    // Check if any fields are invalid


    // Check if transaction values were exceeded for transaction type
    // DOC (max) = R$4999.99
    if(transactionType === 'DOC' && transactionDetailsValue.value > 4999.99){
        alert('Não é possível realizar uma transferência DOC de um valor maior que R$4999,99.');
        transactionDetailsScreen();
    }

    // Check if user account has enough money and conclude the operation.
    if(user.conta.saldo < transactionDetailsValue.value){
        alert('Seu saldo é insuficiente para completar a operação escolhida.');
        transactionDetailsScreen();
    }else{
        let confirmation = window.prompt('Você tem certeza? Digite sua senha ou posicione seu dedo no leitor biométrico para confirmar.');
        if(confirmation == '12345'){
            user.conta.saldo = user.conta.saldo - Number(transactionDetailsValue.value).toFixed(2);
            alert('Operação concluída com sucesso.');
            mainScreen();
        }else{
            alert('Senha incorreta. A operação não pôde ser concluída.');
            transactionDetailsScreen();
        }
    }
}

mainScreen();

// Test (make parts of the page invisible)
// titlePage.style.display = 'none';
// cellphonePage.style.display = 'none';
// payPage.style.display = 'none';
// transferMoneyPage.style.display = 'none';