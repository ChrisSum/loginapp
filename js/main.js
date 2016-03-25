// User variable
var objPeople = [
	{
		username: "user",
		password: "password123"
	},
	{
		username: "chris",
		password: "password07"
	}
]


// Retaining log-in data
function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	//loops through objPeople to see if username & pwd match
	for(i=0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			alert(username + " is logged in!")
			return
		}
	}

	//error if username & password do not match 
	console.log("incorrect username or password")
	alert("!!! incorrect username or password")
}

// show pwd toggle
function seePassword() {
	var pwd = document.getElementById('newPassword')
	var chk = document.getElementById('showPwd')

	if (chk.checked) {
		pwd.type = 'text'
	} else {
		pwd.type = 'password'
	}
}
var display = document.getElementById('showPwd')
display.addEventListener('change', seePassword, false)

// Registration 
function registerUser() {
	// retrieving user input
	var registerUser = document.getElementById("newUsername").value
	var registerPassword = document.getElementById("newPassword").value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}

	//checks to see if username is already in use 
	for(i = 0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username) {
			alert("Username already in use")
			return
		} else if (registerPassword.length < 8) {
			alert("Password must be 8 or more characters")
			return
		} else if (registerPassword.toUpperCase() == registerPassword) {
			alert ("Password must contain at least 1 lowercase character")
			return
		} else if (registerPassword.toLowerCase() == registerPassword) {
			alert ("Password must contain at least 1 uppercase character")
			return
		} else {
			alert ("Congratulations! You are registered!")
		}
	}

	// pushes new user into 'objPeople' var
	objPeople.push(newUser)
	console.log(objPeople)

}