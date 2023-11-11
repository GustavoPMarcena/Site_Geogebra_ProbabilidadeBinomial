const inputButton = document.getElementById("inputButton");

inputButton.addEventListener("click", () => {
    const probability = document.getElementById("probability").value;
    const attempsNumber = document.getElementById("attempsNumber").value;
    const sucessNumber = document.getElementById("sucessNumber").value;

    if(probability && attempsNumber && sucessNumber) {
        calculateDistribution(probability, attempsNumber, sucessNumber);

        document.getElementById("probability").value = '';
        document.getElementById("attempsNumber").value = '';
        document.getElementById("sucessNumber").value = '';
    }

});

function calculateDistribution(p, n, x){
    const vectorX = [];
    for(let i = 1; i<=n ; i++) {
        let probab = ((p)**i) * ((1-p)**n-i);
        vectorX.push(probab);
    }
    console.log(vectorX);
}
