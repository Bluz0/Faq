
let first = document.querySelector(".number");
let second = document.querySelector(".gb");
let three = document.querySelector(".password");
let fourth = document.querySelector(".sub");
let fifth = document.querySelector(".addi"); 

let arrows_one = document.querySelector(".number .arrow");
let arrows_two = document.querySelector(".gb .arrow");
let arrows_three = document.querySelector(".password .arrow");
let arrows_four = document.querySelector(".sub .arrow");
let arrows_five = document.querySelector(".addi .arrow");

let hide_one = document.querySelector(".numberone .hide");
let hide_two = document.querySelector(".gbtwo .hide");
let hide_three = document.querySelector(".passwordthree .hide");
let hide_four = document.querySelector(".subfour .hide");
let hide_five = document.querySelector(".addifive .hide");


let text_one = document.querySelector(".number .text");
let text_two = document.querySelector(".gb .text");
let text_three = document.querySelector(".password .text");
let text_four = document.querySelector(".sub .text");
let text_five = document.querySelector(".addi .text");

let texts = document.querySelector("p");

let click_or_not = true;
let reclick = true;
let open = false;
let n_open = 0;

let card = document.querySelector(".faq-card"); 
let not_men = document.querySelector(".women");
let women = document.querySelector(".women2");

let open_one = false;
let open_two = false;
let open_three = false;
let open_four = false;
let open_five = false;

let click_or_not_one = true;
let click_or_not_two = true;
let click_or_not_three = true;
let click_or_not_four = true;
let click_or_not_five = true;




first.addEventListener("click",function new_window_one(){



    if(click_or_not_one == true){
        text_one.style.fontWeight = "bolder";
        click_or_not_one = false;
        console.log("oui");
        open = true;
        arrows_one.style.paddingLeft = "50px";
        texts.style.width = "280px";
        arrows_one.style.transform = "translateX(50px) rotate(180deg)";
        console.log("click");
        reclick = false;
        open_one=true;
        console.log(open);

    }

    else if(reclick == false){
        text_one.style.fontWeight = "350";
        click_or_not_one = true;
        open=false;
        open_one = false;
        arrows_one.style.transform = "translateX(0px)";
        console.log("retour");
        console.log(open);

    }

    if (open_one==true){
        hide_one.style.display = "flex";
    }

    else if(open_one==false){
        hide_one.style.display = "none";
    }

})

second.addEventListener("click",function new_windows_two(){

    

    if(click_or_not_two == true){
        text_two.style.fontWeight = "bolder";
        click_or_not_two = false;
        console.log("oui");
        arrows_two.style.paddingLeft = "50px";
        texts.style.width = "280px";
        arrows_two.style.transform = "translateX(50px) rotate(180deg)";
        console.log("click");
        reclick = false;  
        open = true;  
        console.log(open);
        open_two=true;
        

    }

    else if(reclick == false){
        text_two.style.fontWeight = "350";
        click_or_not_two = true;
        arrows_two.style.transform = "translateX(0px)";
        console.log("retour");
        open=false;
        console.log(open);
        open_two = false;
    }

    if (open_two==true){
        hide_two.style.display = "flex";
    }

    else if(open_two==false){
        hide_two.style.display = "none";
    }
});


three.addEventListener("click",function new_windows_three(){

    if(click_or_not_three == true){
        text_three.style.fontWeight = "bolder";
        click_or_not_three = false;
        console.log("oui");
        arrows_three.style.paddingLeft = "50px";
        texts.style.width = "280px";
        arrows_three.style.transform = "translateX(50px) rotate(180deg)";
        console.log("click");
        reclick = false;
        open = true;
        open_three=true;
    }

    else if(reclick == false){
        text_three.style.fontWeight = "350";
        click_or_not_three = true;
        arrows_three.style.transform = "translateX(0px)";
        console.log("retour");
        open=false;
        open_three = false;
    }

    if (open_three==true){
        hide_three.style.display = "flex";
    }

    else if(open_three==false){
        hide_three.style.display = "none";
    }
});

fourth.addEventListener("click",function new_windows_four(){

    if(click_or_not_four == true){
        text_four.style.fontWeight = "bolder";
        click_or_not_four = false;
        console.log("oui");
        arrows_four.style.paddingLeft = "50px";
        texts.style.width = "280px";
        arrows_four.style.transform = "translateX(50px) rotate(180deg)";
        console.log("click");
        reclick = false;
        open=true;
        open_four = true;
    }

    else if(reclick == false){
        text_four.style.fontWeight = "350";
        click_or_not_four = true;
        arrows_four.style.transform = "translateX(0px)";
        console.log("retour");
        open=false;
        open_four = false;
    }

    if (open_four==true){
        hide_four.style.display = "flex";
    }

    else if(open_four==false){
        hide_four.style.display = "none";
    }

});

fifth.addEventListener("click",function new_windows_five(){
    if(click_or_not_five == true){
        text_five.style.fontWeight = "bolder";
        click_or_not_five = false;
        console.log("oui");
        arrows_five.style.paddingLeft = "50px";
        texts.style.width = "280px";
        arrows_five.style.transform = "translateX(50px) rotate(180deg)";
        console.log("click");
        reclick = false;
        open=true;
        open_five = true;
    }

    else if(reclick == false){
        text_five.style.fontWeight = "350";
        click_or_not_five = true;
        arrows_five.style.transform = "translateX(0px)";
        console.log("retour");
        open=false;
        open_five = false;

    }

    if (open_five==true){
        hide_five.style.display = "flex";
    }

    else if(open_five==false){
        hide_five.style.display = "none";
    }

});


first.addEventListener("click",extended);
second.addEventListener("click",extended);
three.addEventListener("click",extended);
fourth.addEventListener("click",extended);
fifth.addEventListener("click",extended);


function extended(){

    if(open==true){
        card.style.height = "700px";
        not_men.style.bottom = "301px";
        women.style.bottom = "565px";

    }

    else if(open==false){
        card.style.height = "500px";
        not_men.style.bottom = "101px";
        women.style.bottom = "365px";
    }

    if (open_five==true && open_four==false){

        card.style.height = "700px";
        not_men.style.bottom = "301px";
        women.style.bottom = "565px";

    }

    if (open_five==true && open_three==false){

        card.style.height = "700px";
        not_men.style.bottom = "301px";
        women.style.bottom = "565px";
    }

    
    if ((open_five == false && open_two==true)&&(open_five==false && open_three==true)){
        card.style.height = "700px";
        not_men.style.bottom = "301px";
        women.style.bottom = "565px";

    }
    
    if ((open_five == false && open_two==true)&&(open_five==false && open_one==true)){

        card.style.height = "700px";
        not_men.style.bottom = "301px";
        women.style.bottom = "565px";

    }

}
