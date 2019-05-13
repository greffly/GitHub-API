'use strict';

//const searchURL = 'https://api.github.com/users/greffly/repos';

function getRepos() {
    let userName = $('.userName').val();
    console.log('showing user: ' + userName);
    fetch ('https://api.github.com/users/' + userName + '/repos')
        .then(response => {
            if (response.ok) {
            return response.json();
            }
            throw new Error(response.statusText);
            })
        .then(responseJson => console.log(responseJson))
        .catch(error => alert('Username does not exist. Please try again.'));
}

function displayResults() {
    $('.resultsList').empty();
    for (let i = 0; i < 100; i++) {
        $('.resultsList').append(
            `<li><a href="${responseJson[i].url}">${responseJson[i].name}</a></li>`
    )};
}

function watchForm() {
    $('.js-form').submit(event => {
        event.preventDefault();
        getRepos();
        console.log('form is working!')
    });
}

/*function formatQueryParams(params) {
    const queryItems = Object.keys(params);
    .map(key => `{key}=${params[key]}`)
    return queryItems.join('&');
}*/

$(watchForm);