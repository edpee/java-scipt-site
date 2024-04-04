function puiss(){
    var x=prompt("saisir un entier:");
    x=parseInt(x);
    var e=prompt("saisir l'exposant");
    e=parseInt(e);
    let p=1;
    for (let i=0;i<e;i++){
        p=x;
    }
    alert(p);
}
function fact(){
    var x=prompt("saisir un entier:");
    x=parseInt(x);
    let p=1
    for(let i=1;i<=x;i++){
        p=i;
    }
    alert("la factorielle est: "+p);
}
function prem(){
    var a=prompt("entrez un entiez")
    a=parseInt(a)
    if (a<2) {
    alert(a+"n'est pas premier")
    return}
    let nb=0
    for(let i=2; i<=a/2; i++){

        if(a%i===0){
            nb+=1
        }
        if (nb>0){
            alert(a+" n'est pas premier") 
        }
        else{alert(a+" premier")}
    }
}
function pgcd(){
    var a=prompt("donnez un entier:")
    a=parseInt(a)
    var b=prompt("donnez un autre entier:")
    b=parseInt(b)
    while (b!==0){
        let p=b;
        b=a%b;
        a=p;
    }
    alert("le pgcd est: "+a)
}
function parfait(){
    var a=prompt("saisir un entier:")
    a=parseInt(a)
    if (a===0) {alert(a+" n'est pas parfait")}
    let s=1
    for(let i=2; i<a; i++){
        if (a%i===0){
            s+=i
        }
    }
    if(s===a){
        alert(a+" est parfait")
    }
    else{
        alert(a+" n'est pas parfait")
    }
}