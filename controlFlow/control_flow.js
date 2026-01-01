let userRole = "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full access granted";
}else if(userRole === "manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access granted";
}


//console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }else{
        userMessage = "Welcome, User!";
    }
}else{
    userMessage = "Please log in to access the system.";
}

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);


///switch
let userType = "admin";
let userCategory;


switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


console.log("User Category:", userCategory);


let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";


console.log("Authentication Status:", authenticationStatus);



//Practice Task

let personRole = "Employee";
let accessTo;


switch(personRole){
    case "Employee":
        accessTo = "Dietary Services";
        break;
    case "Enrolled Member":
        accessTo = "Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        accessTo = "Partial Dietary Services";
        break;
    case "Non-Subscriber":
        accessTo = "You need to enroll or at least subscribe first to avail this facility";
        break;
}


console.log("Person Role", personRole);
console.log("Access to:", accessTo);

for (let i = 1; i <= 5; i++) {
    console.log(i);
}