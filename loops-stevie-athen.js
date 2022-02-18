for(let i=1; i<21; i++){
    console.log(i)
}

for(let i=1; i<21; i++){
    console.log(i * 3)
}

for(let i=1; i<21; i++){
    if(i % 2 !== 0){
        console.log("ODD")
    }else{
        console.log(i)
    }

}

var nums = [3, 57, -9, 20, 67]

for(let i=0; i<nums.length; i++){
    if(nums[i]>nums[i++]){
        console.log(nums[i])
    }else{
        console.log(nums[i++])
    }

}