// init Github
const github = new Github

// init UI
const ui = new UI

//search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;
    if (userText != '') {
        github.getUser(userText)
            .then(data => {
                if (data.profileData.message === 'Not Found') {
                    // show alert
                    ui.showAlert('alert')
                } else {
                    // show profile
                    ui.showProfile(data.profileData)
                    ui.showrepos(data.reposData)
                }
            })
    } else {
        // clear profile
        ui.clearProfile()
    }
});