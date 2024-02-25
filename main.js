document.addEventListener('DOMContentLoaded', function () {
    let start_button = document.getElementById('getStartBtn');
    let popUp_menuContainer = document.getElementById('popUpMenu_container');
    let popUp_menu = document.getElementById('popUpMenu');
    let send_data_button = document.getElementById('sendDataBtn');
    
    let userNameInput = document.querySelector('.user__name');
    let userAgeInput = document.querySelector('.user__age');
    let userPhoneInput = document.querySelector('.user__mobile-phone');
    let userTelegramInput = document.querySelector('.user__telegram');
    let userAddressInput = document.querySelector('.user__adress');

    start_button.addEventListener('click', function() {
        popUp_menuContainer.style.opacity = '1';
        popUp_menuContainer.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)';
    
        setTimeout(function() {
            document.addEventListener('click', closeOnClickOutside);
        }, 0);
    });
    
    send_data_button.addEventListener('click', function() {
        collectAndDisplayFormData();
        send_close_data();
    });
    
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            send_close_data();
        }
    });
    
    function collectAndDisplayFormData() {
        let userData = {
            'Имя:': userNameInput.value,
            'Возраст:': userAgeInput.value,
            'Телефон:': userPhoneInput.value,
            'Telegram:': userTelegramInput.value,
            'Адрес:': userAddressInput.value
        };
      
        let userDataHTML = '<table>';
        for (let key in userData) {
            userDataHTML += '<tr><td>' + key + '</td><td>' + userData[key] + '</td></tr>';
        }
        userDataHTML += '</table>';
        
        userDataDisplay.innerHTML = userDataHTML;
      
        send_close_data();
    }
    
    function send_close_data() {
        popUp_menuContainer.style.opacity = '0';
        popUp_menuContainer.style.transform = 'translate3d(0px, 0px, 0px) scale3d(0, 0, 0)';
        document.removeEventListener('click', closeOnClickOutside);
        clearInputFields();
    }
    
    function clearInputFields() {
        userNameInput.value = '';
        userAgeInput.value = '';
        userPhoneInput.value = '';
        userTelegramInput.value = '';
        userAddressInput.value = '';
    }
    
    function closeOnClickOutside(event) {
        if (!popUp_menu.contains(event.target) && event.target !== start_button) {
            send_close_data();
        }
    }
});