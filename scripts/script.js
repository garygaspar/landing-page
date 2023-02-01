const button = document.querySelectorAll(".signup")


function alertOnClick () {
    button.forEach(item => {
        item.addEventListener('click', (e) => 
            alert("I don't have a newsletter bro. I'm 9 months old.")
        )        
});
}

alertOnClick()
