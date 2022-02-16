
// const sing = async () => {
//     throw "error" //for rejecting
//     return "everything is was done well"//for resolving
// }

// sing()
//     .then((data) => {
//         console.log("Promise resolved with", data)
//     })
//     .catch(err) => {
//         console.log("Promise rejected with", err)
//     }


const usrLogin = document.querySelector('#login')
const usrPass = document.querySelector('#pass')
const button = document.querySelector('#submit')



const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (username === 'core' && password === 'core') return 'Welcome'
    throw 'Invalid Password or Login'
}




button.addEventListener('click', async (e) => {
    e.preventDefault()
    await login(usrLogin.value, usrPass.value)
        .then(msg => {
            console.log("logged in")
            swal(msg)
        })
        .catch(err => {
            console.log("error")
            swal(err)
        })
})



const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

//instead of that
// delayedColorChange('blue', 1000)
//     .then(() => delayedColorChange('red', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('red', 1000))

async function rainbow() {
    while (true) {
        await delayedColorChange('#cb997e', 1000)//will be changed by order
        await delayedColorChange('#6b705c', 1000)
        await delayedColorChange('#ddbea9', 1000)
        await delayedColorChange('#a5a58d', 1000)
        await delayedColorChange('#b7b7a4', 1000)
    }
}

//instead of that
// rainbow().then(() => {
//     console.log("everything is fine")
// })

async function callingTheRainbow() {
    await rainbow();
    console.log("everything is fine")
}
callingTheRainbow();