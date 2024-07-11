
let star
for (let i = 1; i <= 5; i++) {
    star = ''
    for (let j = 1; j <= i; j++) {
        star += '*'
    }
    console.log(star)
}

let num
for (let i = 1; i <= 5; i++) {
    num = ''
    for (let j = 1; j <= 5; j++) {
        num += j+" "
    }
    console.log(num)
}


let star_rev
for (let i = 1; i <= 5; i++) {
    star_rev = ''
    for (let j = 5; j >= i; j--) {
        star_rev += '*'
    }
    console.log(star_rev)
}


function three_digit_armstrong_number() 
{
 for (var i = 1; i < 10; ++i) 
 {
   for (var j = 0; j < 10; ++j) 
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             console.log(pow);
            }
         }
       }
    }
  }
//three_digit_armstrong_number();


function pattern_diamond(N) {
    // This is the outer loop which will loop for the rows.
    for (let i = 0; i < N; i++)
    {
        let star=""
        // For printing the spaces before stars in each row
        for (let j =0; j<N-i-1; j++)
        {
            star += " "
        }
       
        // For printing the stars in each row
        for(let j=0;j< 2*i+1;j++){
            
            star +="*"
        }
        
        // For printing the spaces after the stars in each row
         for (let j =0; j<N-i-1; j++)
        {
            star+=" "
        }
       

        // As soon as the stars for each iteration are printed, we move to the
        // next row and give a line break otherwise all stars
        // would get printed in 1 line.
       console.log(star);
    }
}

pattern_diamond(5)