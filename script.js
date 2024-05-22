let num_d = 0;
let num_a = 0;
document.addEventListener('keydown', function(event) {
    // alert(event.key)
    if (event.key === "d") {
        num_d++;
        
        // alert(1)
    }
    if (event.key === "a") {
        num_a++;

        // alert(1)
    }
        if(num_d >10){

            document.body.style.backgroundClip="stretch";
        document.body.style.background = "url('daniel.jpg') no-repeat center center fixed";
            
        }
    if(num_a >10){
        document.body.style.backgroundClip="stretch";
    document.body.style.background = "url('ajith.jpg') center center fixed";

        document.body.backgroundSize = "cover";
    }
});

