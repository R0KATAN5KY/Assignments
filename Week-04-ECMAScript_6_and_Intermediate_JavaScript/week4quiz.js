const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Pheonix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    {
        name: 'hris',
        address: {
            street: '5678 Main St',
            city: 'Peoria',
            zip: '86753',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 90
    },
    {
        name: 'Phanit',
        address: {
            street: undefined,
            city: undefined,
            zip: undefined,
            state: undefined,
        },
        membershipLevel: 'BADASS',
        age: 3000
    }
];




let newArray = [];
function filterArray(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i].name.charAt(0).toLowerCase() == "c"){
            newArray.push(arr[i]);
        }else if(!Object.values(arr[i].address).some(x => !x)){
            newArray.push(arr[i]);
        }else if(arr[i].address.city === 'Peoria' && arr[i].address.state === 'AZ'){
            newArray.push(arr[i]);
        }else if(arr[i].membershipLevel === 'GOLD' || arr[i].membershipLevel === 'PLATINUM' || arr[1].age < 29){
            newArray.push(arr[i]);
        }
    }
}
filterArray(customers);
console.log(newArray);
