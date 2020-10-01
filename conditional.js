var islogIn=true;
var isEmailverified=true;
var cardInfo=true;
/*if(islogIn)
{
    if(isEmailverified)
    {
        if(cardInfo)
        {
            console.log("Purchase success");
            
        }
    }
}
*/
if(islogIn && isEmailverified & cardInfo)
{
    console.log("can purchase");
    
}
else
console.log("cant purchase");
