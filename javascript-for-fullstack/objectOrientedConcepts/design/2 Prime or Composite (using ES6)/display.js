class Prime {
    constructor(num) {
        this.num = num;
    }
    isPrime() {
        const n = this.num;
        if(n==1) {
            console.log("Neither Prime nor Composite");
        }
        else {
            let b = true;
            for(let i=2; i<n/2; i++) {
                if(n%i==0) {
                    b = false;
                }
            }
            if(b==true)
                console.log("Prime Number");
            else 
                console.log("Composite Number");
        }
    }
}

module.exports = Prime;