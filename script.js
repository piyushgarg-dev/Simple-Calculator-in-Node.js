// alert("c")
const addnum =[]
var finalsum =0
function nine()
{
   var val=document.getElementById('nine').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
    
}

function eight()
{
   var val=document.getElementById('eight').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
}

function seven()
{
    var val=document.getElementById('seven').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
}

function six()
{
    var val=document.getElementById('six').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
}

function five()
{
    var val=document.getElementById('five').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
}

function four()
{
    var val=document.getElementById('four').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
}

function three()
{
    var val=document.getElementById('three').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
}

function two()
{
    var val=document.getElementById('two').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
}

function one()
{
    var val=document.getElementById('one').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
}

function zero()
{
    var val=document.getElementById('zero').value
   console.log(val)
    var num=document.getElementById('num').value
    newvalue =(num + val)
    document.getElementById('num').value=newvalue;
    
}


function add()
{
     
    var sum = document.getElementById('num').value
    sum=parseInt(sum);
  //  var newv=sum+sum;
  
    console.log(sum)
    
    addnum.push(sum);
    console.log(addnum)
    let x=addnum.length-1
    for(let i=0; i<=x; i++)
        {
            
             finalsum = finalsum+addnum[i]
            
        }
console.log("ans -> " + finalsum)
    displayans(finalsum)
  finalsum=0
   
    document.getElementById('num').value=null;
    //sum=0; 
    
}
/////////////////////////////

function sub()
{
     
    var sum = document.getElementById('num').value
    sum=parseInt(sum);
  //  var newv=sum+sum;
  
    console.log(sum)
    
    addnum.push(sum);
    console.log(addnum)
    let x=addnum.length-1
    for(let i=0; i<=x; i++)
        {
            
             finalsum = finalsum+addnum[i]*-1
            
        }
console.log("ans piyush-> " + finalsum)
    displayans(finalsum)
  finalsum=0
   
    document.getElementById('num').value=null;
    //sum=0; 
    
}

function displayans(ans)
{
    document.getElementById('answere').value=ans;
}