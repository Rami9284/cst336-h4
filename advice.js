var lifeAdvice = ["One day you'll find yourself wanting to improve. Surround yourself with people you don't want to disappoint and meet their high expectations. One day you'll then become someone others don't want to disappoint either.",
                    "One day you'll find yourself feeling wronged. Don't mistake something not being done for you with something being done to you. Reserve your outrage for the latter.",
                    "One day you'll find yourself listening to a friend. Do him or her a favor and just listen. Don't peek at your cell phone or plan what to say when it's your turn to talk. Just listen.",
                    "One day you'll find yourself comparing yourself to others. Stop it. Comparing yourself to others will only make you feel envious or vain, and neither feeling is useful.",
                    "One day you'll find yourself opening a gift. This means someone cared enough to spend the time and money to go to a store, buy the gift, wrap it, and maybe even mail it. So even if you don't like the gift, there's reason to be grateful.",
                    "One day you'll find yourself complaining. It's okay to do so as long as you also give compliments. Don't only be a complainer.",
                    "One day you'll find yourself dealing with a death. Even if it was expected or someone you didn't know well, take time to mourn. Join friends, family, and colleagues in celebrating the deceased's life, or in the very least, write down your memories. Mourning cannot be done alone in your head; it must be expressed.",
                    "One day you'll find yourself watching fireworks. Don't be a cynic. Fireworks can be enjoyed at any age.",
                    "One day you'll find yourself gossiping. It's human nature and a natural way to bond, but just know that talking about others invites others to talk about you as well.",
                    "One day you'll find yourself graduating college. Resist any temptations or offers to move home. Force yourself to find a job, live on a budget, and become an adult."];
var finacialAdvice = ["One day you'll find yourself wanting to be rich. Being rich simply means being without need, so you can either accumulate much wealth or learn to need very little. Or, more likely, something in-between.",
                        "One day you'll find yourself using a credit card to buy something you can't afford. Don't have the cash for that $20 cab ride now? What about in six months when interest has raised that same unpaid ride to $40? Take the bus.",
                        "One day you'll find yourself gambling. If you can't easily shrug off losing the amount wagered, stop betting and go home.",
                        "One day you'll find yourself selling something on Craigslist. If someone emails to ask if the item is still available, your answer should always be &quotYes, but several people have shown interest.&quot People want what other people want.",
                        "One day you'll find yourself talking about money. If you're doing it in public, you're being an asshole.",
                        "One day you'll find yourself getting married.Begin your marriage living on just one income. the other income can go into a savings account",
                        "One day you'll find yourself making money. And one day you may even make more money than you imagine. Remember, though, that wealth is a moving target, and while additional money won't keep you happy for long, the fear of losing it quickly becomes permanent.",
                        "One day you'll find yourself looking for a job. Never take a job just because of the money. Always consider the money, but never let it be the determining factor.",
                        "One day you'll find yourself buying a home.One extra monthly payment per year on your mortgage shortens the length of your loan by years.",
                        "One day you'll find yourself with extra money. Set up an emergency fund. "];
var RelationshipAdvice = ["One day you'll find yourself asking someone out and being rejected. You can be proud for having had the courage to ask them out, but remember that declining requires its own bravery, and that they owes you nothing more than that &quotno&quot. Politely move on.",
                            "One day you'll find yourself wondering if someone likes you. When someone likes you, they want to be physically around you. That doesn't mean, however, crowding a person and hoping he or she doesn't go away. It simply means noticing when someone finds a reason to be near you.",
                            "One day you'll find yourself proposing. Don't marry because someone solves a problem for you, e.g. lonliness, status, or money. Marry because you know that together the two of you can solve any problem that life will present.",
                            "One day you'll find yourself wanting to impress someone. Start by asking her/him about themself and then actually listen to the answer.",
                            "One day you'll find yourself having a bad argument. Bad arguments often follow double dismissals, i.e. not only denying a request, but also disputing its validity. For example, &quotNo, I won't visit your family this weekend, and besides, you spend too much time with them anyway.&quot Discuss both points if you must, but make them separate conversations.",
                            "One day you'll find yourself being dumped. Want her to reconsider? Hold your head high and let her go, and she may wonder whether she's making a mistake. If not, you'll at least have your dignity.",
                            "One day you'll find yourself falling out of love. If so, your objective should be making the breakup easy on her, not yourself. And contrary to common belief, this does not mean making bullshit excuses so that you can both continue thinking you're a nice guy. It means being frank about your lack of interest so she can move on.",
                            "One day you'll find yourself seeking a soul mate. This may be as unromantic as it is truthful, but know that if your soul mate exists, the relationship will be forged, not found.",
                            "One day you'll find yourself starting a new relationship. It will invariably transition from a period of excitement to one of negotiation, and will then only continue if the same person doesn't win every argument.",
                            "One day you'll find yourself wanting love. Leave the house and love life, and romantic love will follow."];
var EtiquetteAdvice = ["One day you'll find yourself driving a car. The anonymity of driving a car is not license to be an asshole. Treat everyone on the road as you would in person; if you wouldn't scream at a slow-moving elderly woman in a grocery store, don't do it in a car.",
                             "One day you'll find yourself attending a wedding. You'll have much to comment on: the clothes, the food, the speeches, drunk relatives, bad tattoos, and the sexual history of all involved. Keep it all to yourself, though, and for one night, help make everything right in the couple's world. Don't talk shit at weddings.",
                             "One day you'll find yourself planning to attend a party. Lest you inadvertently reveal to someone that he or she is not invited, don't ask anyone but your plus-one whether they're going.",
                             "One day you'll find yourself getting a compliment. Accept it without reflexively disputing its merit. Simply say &quotThank you for the compliment,&quot or if you really must deflect, &quotThank you, that means a lot coming from you.&quot",
                             "One day you'll find yourself yawning. Cover your mouth.",
                             "One day you'll find yourself sitting on furniture. If it's not your furniture, keep your feet on the floor.",
                             "One day you'll find yourself visiting someone's home. Err on the side of leaving early; better your hosts regret your departure than regret their invitation.",
                             "One day you'll find yourself talking on the phone. Smile. They'll hear it on the other end.",
                             "One day you'll find yourself planning a group outing. Be a mensch and plan around the slimmest wallet of the group, not the fattest.",
                             "One day you'll find yourself entering a room. Head up. Shoulders back. Mind open."];
$(".submitButton").click(function(){
   var name = $("#name").val();
   var amt = $('input:radio[name="amount"]:checked').val();
    var adviceType = $("#chooseAdvice").val();
    
    getAdvice(name,amt,adviceType);
}); 

function getAdvice(name,amt,adviceType){
    if(name == ""){
        name = "Stranger";
    }
        
    if(adviceType != null && amt != 'undefined'){
        if(adviceType == "Life Advice"){
            $("#ad").empty();  
            $("#advicetext").show();
            $("#greeting").html("<h2>Life Advice</h2><br>"+ "Dear " + name + ",<br><br>");
            
            
            for (var i= 0; i < Math.floor(amt);i++){
                $("#ad").append("<span>" + lifeAdvice[Math.floor((Math.random() * 10))] + "</span><br><br>");
            }
            
            
        }
        else if(adviceType == "Financial Advice"){
            $("#ad").empty();  
             $("#advicetext").show();
            $("#greeting").html("<h2>Finacial Advice</h2><br>"+ "Dear " + name + ",<br><br>");
            
            for (var i= 0; i < Math.floor(amt);i++){
                $("#ad").append("<span>" + finacialAdvice[Math.floor((Math.random() * 10))] + "</span><br><br>");
            }
        }
        else if(adviceType == "Relationship Advice"){
            $("#ad").empty();  
             $("#advicetext").show();
             $("#greeting").html("<h2>Relationship Advice</h2><br>"+ "Dear " + name + ",<br><br>");
             
             for (var i= 0; i < Math.floor(amt);i++){
                $("#ad").append("<span>" + RelationshipAdvice[Math.floor((Math.random() * 10))] + "</span><br><br>");
            }
        }
        else if(adviceType == "Etiquette Advice") {
            $("#ad").empty();  
             $("#advicetext").show();
              $("#greeting").html("<h2>Etiquette Advice</h2><br>"+ "Dear " + name + ",<br><br>");
              
              for (var i= 0; i < Math.floor(amt);i++){
                $("#ad").append("<span>" + EtiquetteAdvice[Math.floor((Math.random() * 10))] + "</span><br><br>");
            }
        }
    }else{
            $("#ad").empty();  
             $("#advicetext").show();
              $("#greeting").html("<h2>Fill out the form to get your advice!</h2>");
        }
}
 
        
                // if(isset($name) && isset($size) && isset($adviceType)){
                    
                //     echo "<div id= 'advicetext'>";
                //         echo "Dear" . $name .", <br><br>";
                //     if(strcmp("Life Advice",$adviceType) == 0){
                //         echo "<h3>Life Advice</h3>";
                //         for ($i = 0; $i < $size; $i++) {
                //              echo $lifeAdvice[rand(0,9)];
                //              echo "<br><br>";
                //         }
                //     }
                //     else if(strcmp("Financial Advice",$adviceType) == 0){
                //         echo "<h3>Finacial Advice</h3>";
                //         for ($i = 0; $i < $size; $i++) {
                //              echo $finacialAdvice[rand(0,9)];
                //              echo "<br><br>";
                //         }
                //     }
                //     else if(strcmp("Relationship Advice",$adviceType) == 0){
                //         echo "<h3>Relationship Advice</h3>";
                //         for ($i = 0; $i < $size; $i++) {
                //              echo $RelationshipAdvice[rand(0,9)];
                //              echo "<br><br>";
                //         }
                    
                //     }
                //     if(strcmp("Etiquette Advice",$adviceType) == 0){
                //         echo "<h3>Etiquette Advice</h3>";
                //         for ($i = 0; $i < $size; $i++) {
                //              echo $EtiquetteAdvice[rand(0,9)];
                //              echo "<br><br>";
                //         }
                //     }
                // echo "</div>";    
                //     echo "<br><h4> $name, Get more advice!</h4>";
                // }
                // else{
                //     echo "<h2>Fill out the form to get your advice!</h2><br>";
                // }
                

