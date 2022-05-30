
var family = 3;
const newBaby = (urgent) => {
    if (urgent) {
        message = "Please contact richard.langlois@rbc.com"
    }
    else{
        message = `I'll read and respond to your email upon my return in June. I am exanding my family capacity from ${family} to ${family + 1}`
    }
    return message
}


console.log(newBaby(true))
//TODO: add shell interface so it asks if urgent and responds accordingly if saved and run locally
