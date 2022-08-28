function update(event){
    var end = "";
    if(this.dataset.pre!=undefined){
        end = end + this.dataset.pre;
    }

    document.documentElement.style.setProperty(`--${this.name}`, this.value + end )
    
    // console.log(this.getAttribute("name"));
    this.getAttribute("name")
    console.log(this.min);
}

var inputs = document.getElementsByTagName("input");


for(var i = 0 ; i<inputs.length ; i++){
    inputs[i].addEventListener('change',update);
    inputs[i].addEventListener('mousemove',update);
}