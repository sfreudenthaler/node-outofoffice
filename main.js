const newBaby = (urgent) => {
    family++
    var onLeave = true
    if (urgent == true) {
        message = "Please contact richard.langlois@rbc.com"
    }
    else{
        message = "I'll read and respond to your email upon my return in June."
    }
    return message
}

newBaby(true).then(console.log)
//TODO: add shell interface so it asks if urgent and responds accordingly if saved and run locally
