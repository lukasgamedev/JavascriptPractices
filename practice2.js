s1 = "xzxzx";

const divideThreePart = (s) => {
    let num = 0;
    let part1 = "";
    let part2 = "";
    let part3 = "";    

    //check combinations
    for(let i = 1; i < s.length - 1; i++){
        part1 = s.substring(0,i);
        for(let j = i + 1; j < s.length; j++){
            part2 = s.substring(i, j);
            part3 = s.substring(j,s.length);

            let sum1 = part1 + part2; 
            let sum2 = part2 + part3; 
            let sum3 = part3 + part1; 

            //console.log(part1,part2,part3)
            //console.log(sum1,sum2,sum3)
            //check if parts are different
            if(sum1 != sum2 && sum1 != sum3 && sum2 != sum3)
                num++;        
        }        
    }

    return num;
}

console.log(divideThreePart(s1));