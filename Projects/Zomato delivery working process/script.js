console.log(`sab mast haa `);
console.log(`lets start writing js`);

let isOrderAccepted = false;
let isCaletFound = false;
let hasResturantSeenYourOrder = false;
let resturantTimer = null;
// zomato applicaiton boot  starting the application 
window.addEventListener(`load`, function () {
    document.getElementById('acceptOrder').addEventListener('click', function () {
        //   ask resturant to accept or reject 
        askResturantToAcceptOrReject();
    }
    )
    const res = checkIfOrderAcceptedFromResturant();
    console.log(`value of res is ${res}`);
    res.then((isOrderAccepted) => {
        console.log(`Response of the resturant ${res}`);

        // start preparing 
        if (isOrderAccepted) {
            // alert(`Your order is accepted`) ;
            startPreparingOrder() ;
        }
        // step 3 has done order is rejected 
        else
        {
            alert(`Sorry we can not proceed your order`);
            
        }
    }
    )
        .catch((error) => {
            console.log(`${error}`);
            // alert(`Something went wrong, plz try again later`) ;
        }
        )
})
// we will get the status of order weather it is accepted or rejected 
function askResturantToAcceptOrReject() {
    setTimeout(() => {
        isOrderAccepted = confirm(`Should resturant accept order ?`);
        hasResturantSeenYourOrder = true;
        console.log(`${isOrderAccepted}`);

    }, 1000);
}

// step 2   -> Check if resturant has accepted orer or not
function checkIfOrderAcceptedFromResturant() {
    var promise = new Promise((resolve, reject) => {
        resturantTimer = setInterval(() => {

            if (!hasResturantSeenYourOrder) {
                return;
            }
            if (isOrderAccepted) {
                alert(`Order is accepted by the resturant`);
                resolve(true);
            }
            else {
                alert(`Order was rejected by the resturant `);
                resolve(false);
            }

            clearInterval(resturantTimer);
        }, 2000);
    })
    return promise;
}


// Promise - then, cathch.   Callback - resolve, reject 
// Types of promise - 
// 1. Promise.all
// 2. Promise.allSettled
// 3.Promise.race 
// 4. Promise.any

// step 4 

function startPreparingOrder()
{
    Promise.all([
        updateOrderStatus(),
        updateMapView(),
        startSearchingForValets(),
        checkForOrderDelivery()

    ])
    .then((res) => {
      setTimeout(() => {
        alert(`How was your food? Rate you food and delivery partner`);
      }, 2000);
    })
    .catch((err) => {
      console.error(err);
    }
    )
}

// helper function pure function 

function updateOrderStatus() {
    alert(`es mai ni aya`) ;
    document.getElementById('currentStatus').innerText ='Preparing your Order';
}
function updateMapView() {
    document.getElementById('map').style.opacity = '1' ;
}