let name;
let bdy;
let bdm;
let bdd;
let gender;
let games = [];
let note

$(function(){
    $("#send").on('click', function(e){ send(e); });
})

function send(e)
{
    //很重要！
   e.preventDefault();
    let allpass = true;
    name = $("#input_name").val();
    if(name == "")
    {
        $("#input_name").addClass("is-invalid");
        allpass = false;
    }
    email = $("#input_email").val();
    let patt = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/i;
    let result = patt.test(email);
    if (email == "" || !result) 
    {
        $("#input_email").addClass("is-invalid");
        allpass = false; 
    }
    phone = $("#input_phone").val();
    patt = /^09[0-9]{8}/i;
    result = patt.test(phone);
    if (phone == "" || !result) 
    {
        $("#input_phone").addClass("is-invalid");
        allpass = false; 
    }
    bdy = $("#sel_bdy").val();
    if(bdy == "")
    {
        $("#sel_bdy").addClass("is-invalid");
        allpass = false;
    }
    bdm = $("#sel_bdm").val();
    if(bdm == "")
    {
        $("#sel_bdm").addClass("is-invalid");
        allpass = false;
    }
    bdd = $("#sel.bdd").val();
    if(bdd == "")
    {
        $("#sel_bdd").addClass("is-invalid");
        allpass = false;
    }
    gender = $("input[name='radio_gender2']:checked").val();
    games = [];
   $.map($("input[name='check_games']:checked"), function (el) {
    games.push($(el).val())
   })
   if(games.length == 0)
    {
        $("input[name='check_games']").addClass("is-invalid");
        allpass = false;
    }
   note = $("#text_note").val();

   console.log("name is: " + name);
   console.log("bd is: " + bdy + "-" + bdm + "-" + bdd);
   console.log("gender is: " + gender);
   console.log("games is: " + games);
   console.log("note is: " + note);
}
