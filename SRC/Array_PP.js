//1a,b. Get 10 Random 3 digit number and storing into an array 
let array=[];                
for(let i=0;i<10;i++)
{
    array[i]=(Math.floor(Math.random()*1000)%899)+100;
}
console.log(array);

//1c. Get 2nd Largest and Smallest numbers without sorting 
let firstL = array[0];
let secondL = array[0];
for (i = 1; i < array.length; i++) 
{
    if (firstL < array[i]) 
    {
        secondL = firstL;
        firstL = array[i];
    } 
    else if (secondL < array[i])
    {
        secondL = array[i];
    }
}
if (secondL == firstL)
    console.log("There is no Second Largest Element");
else
    console.log("The Second Largest Element in the Array is:: ", secondL);

firstL = Math.max(...array);
secondL = Math.max(...array);
for (i = 1; i < array.length; i++) 
{
    if (firstL > array[i]) 
    {
        secondL = firstL;
        firstL = array[i];
    } 
    else if (secondL > array[i] && array[i]!=firstL)
    {
        secondL = array[i];
    }
}
if (secondL == firstL)
    console.log("There is no Second Smallest element");
else
    console.log("The Second Smallest Element in the Array is:: ", secondL);

//2. Get 2nd Largest and Smallest numbers After sorting 
array.sort();
console.log(array);
console.log("The Second Smallest Element in the Array is:: ", array[1]);
console.log("The Second Largest Element in the Array is:: ", array[array.length-2]);

//3. Prime Factorization and store factors into Array
let primeArray = new Array();
let n=315;
console.log("The Prime Factors of Number:: "+n);
while (n % 2 == 0) 
{
    primeArray.push(2);
    n = n/2;
}
for (i = 3; i <= Math.sqrt(n) ; i += 2) 
{
    while (n % i == 0) 
    {
        primeArray.push(i);
        n = n/i;
    }
}
if (n > 2)
{
    primeArray.push(n);
}
console.log(primeArray);

//4. Sum of 3 integers adds to zero
let distArray = [0,1,2,3,-1,-2,-3];
console.log("Array is:: "+distArray);
n=distArray.length;
let found=false;
for ( i=0; i<=n-3; i++)
{
    for (let j=i+1; j<=n-2; j++)
    {
        for (let k=j+1; k<=n-1; k++)
        {
            if (distArray[i]+distArray[j]+distArray[k] == 0)
            {
                console.log(distArray[i]+" "+distArray[j]+" "+distArray[k]);
                found = true;
            }
        }
    }
}
if(found==false)
{
    console.log("No 3 integers adds to zero");
}

//5. Get similar numbers in range of 0-100 and store in an array
let mainArr = new Array();
for(i=1; i<100; i++)
{
    let tempArr = new Array();
    let temp = i;
    while(temp!=0)
    {
        let r = temp%10;
        tempArr.push(r);
        temp=Math.floor((temp/10),0);
    }
    if(tempArr[0]==tempArr[1])
    {
        mainArr.push(i);
    }   
}
console.log("Numbers with Similar digits are:: "+mainArr);