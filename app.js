
// ========= Week Day list =========

func1 =()=> {
  let result = document.getElementById('Monday').value;
  document.getElementById('MonResult').innerHTML = result;
document.getElementById('Monday').value='';
}
document.getElementById("monButton").addEventListener ('click',func1)

func2 =()=> {
  let result = document.getElementById('Tuesday').value;
  document.getElementById('TuesResult').innerHTML = result;
document.getElementById('Tuesday').value='';
}
document.getElementById("tuesButton").addEventListener ('click',func2)

func3 =()=> {
  let result = document.getElementById('Wednesday').value;
  document.getElementById('wedResult').innerHTML = result;
document.getElementById('Wednesday').value='';
}
document.getElementById("wedButton").addEventListener ('click',func3)

func4 =()=> {
  let result = document.getElementById('Thursday').value;
  document.getElementById('thursResult').innerHTML = result;
document.getElementById('Thursday').value='';
}
document.getElementById("thursButton").addEventListener ('click',func4)

func5 =()=> {
  let result = document.getElementById('Friday').value;
  document.getElementById('friResult').innerHTML = result;
document.getElementById('Friday').value='';
}
document.getElementById("friButton").addEventListener ('click',func5)

// =========================================

// ============= To Do List ====================

func6 =()=> {
  let result = document.getElementById('toDo').value;
  document.getElementById('toDoResult').innerHTML = `<p> ${result}</p>`;
document.getElementById('toDo').value='';
}
document.getElementById("taskButton").addEventListener ('click',func6)

// ====================================

// ============= Interventions =============

func7 =()=> {
  let child = document.getElementById('child').value;
  let support = document.getElementById('support').value;
  document.getElementById('interventionResults').innerHTML = `<p> Child: ${child} <br> Support: ${support}</p>`;
document.getElementById('child').value='';
document.getElementById('support').value='';
}
document.getElementById("interButton").addEventListener ('click',func7)

// ====================================

// =========== Log In Details ==========

func8 =()=> {
  let program = document.getElementById('program').value;
  let userName = document.getElementById('userName').value;
  let password = document.getElementById('password').value;
  document.getElementById('logInResults').innerHTML = `<p> Program: ${program} <br> User Name: ${userName}<br> Password: ${password}</p>`;
document.getElementById('program').value='';
document.getElementById('userName').value='';
document.getElementById('password').value='';
}
document.getElementById("logButton").addEventListener ('click',func8)

// =====================================

// ============== Planning ===================

func9 =()=> {
  let subject = document.getElementById('subject').value;
  let focus = document.getElementById('focus').value;
  document.getElementById('planResults').innerHTML = `<p> Subject: ${subject} <br> Focus: ${focus}</p>`;
document.getElementById('subject').value='';
document.getElementById('focus').value='';
}
document.getElementById("planButton").addEventListener ('click',func9)

// =========================================

// ================== Important Dates ===============

func10 =()=> {
  let event = document.getElementById('what').value;
  let when = document.getElementById('when').value;
  document.getElementById('imDateResults').innerHTML = `<p> Event: ${event} <br> When: ${when}</p>`;
document.getElementById('subject').value='';
document.getElementById('focus').value='';
}
document.getElementById("imDateButton").addEventListener ('click',func10)

// ============================================

// ============== Birthdays =================

func11 =()=> {
  let result = document.getElementById('mon').value;
  document.getElementById('dateJan').innerHTML = `<p> ${result}</p>`;
document.getElementById('dateJan').value='';
}
document.getElementById("mon").addEventListener ('onkeypress', func11 )