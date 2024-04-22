async function getData(params) {
    console.log(`here set time out function is placed so it will take 3.5 sec to run`);
    
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            resolve(`Dello Divyansh you are welcome`) ;

        }, 3500);
    })
}


async function main ()
{
    console.log(`Loading modules`);
    console.log(`Do someting else`);
    console.log(`Load Data`);
    let data = await getData() ;
    console.log(`${data}`);
    console.log(`process data`);
    console.log(`task 2`);
    
}

main () ;