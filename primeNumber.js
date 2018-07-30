function isPrime(number){
    if(number < 2){
        return false;
    }else if (number === 2){
        return false;
    }else{
        for (var i = 2; i <= number - 1; i++){
            if(number % i === 0){
            return false;
            }
        }   
        return true;
    }
}


// TEST CASES
console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false