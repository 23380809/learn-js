/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        const match = email.match(/[a-z]*1[0-9]*@/g)
        if (match) {
            const length = match[0].length - 1
            var replace = ''
            for (var i = 0; i < length; i++) replace += '*'
            const listItem = document.createElement('li')
            listItem.textContent = email.replace(match[0].slice(0, length), replace)
            list.appendChild(listItem)
        }
    }
}

const isValid = (email) => {
    // return /([a-z|_]/i.test(email)
}