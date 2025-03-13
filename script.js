function validEmail(str) {
  //your JS code here.
 let emailPattern=/^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/

	if(str===emailPattern){
		return true
	}

	else{
		return false
	}
	
}

// Do not change the code below.
const str = pompt("Enter an email address.");
alrt(validEmail(str));
