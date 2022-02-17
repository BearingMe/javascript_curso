var myName = "Smith";

function sayMyName() {
  console.log(myName);
}

function useSayMyName() {
  // a função só usa as variáveis declaradas no escopo onde foi criada
  myName = "John";
  sayMyName();
}

sayMyName();
useSayMyName();