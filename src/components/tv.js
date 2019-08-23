
const TV = () => {

    const screen = {
        
    }

    function one() {
        let screen1 = document.getElementById('screen1');
        let screen2 = document.getElementById('screen2');
    
        console.log('button works');
    
        if (screen1.style.display === "none") {
            screen1.style.display = "block"
            screen2.style.display = "none"
        } else if (screen2.style.display === "none") {
            screen2.style.display = "block"
            screen1.style.display = "none"
        }
    }
    
    function two() {
        let screen3 = document.getElementById('screen3');
        let screen4 = document.getElementById('screen4');
    
        console.log('button works');
    
        if (screen3.style.display === "none") {
            screen3.style.display = "block"
            screen4.style.display = "none"
        } else if (screen4.style.display === "none") {
            screen4.style.display = "block"
            screen3.style.display = "none"
        }
    }

}

export default TV