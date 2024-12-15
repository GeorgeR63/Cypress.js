describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio'); //Зайти на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста после входа
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что видно крестик
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); //Зайти на сайт
        cy.get('#forgotEmailButton').click(); // Нажать на кнопку восстановить пароль
        cy.get('#mailForgot').type('yburavchenko3444@gmail.com'); // Ввести email
        cy.get('#restoreEmailButton').click(); // нажать на кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка что есть текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что есть крестик 
     })
     it('Неправильный пароль', function () {
        cy.visit('https://login.qa.studio'); //Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio11'); //Ввести НЕправильный пароль
        cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста после входа
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что видно крестик
     })
     it('Неправильный логин', function () {
        cy.visit('https://login.qa.studio'); //Зайти на сайт
        cy.get('#mail').type('germanу@dolnikov.ru'); // Ввести НЕправильный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввести правильный пароль
         cy.get('#loginButton').click(); // Нажать войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка текста после входа
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что видно крестик
     })
     it('Вводим логин без @', function () {
        cy.visit('https://login.qa.studio'); //Зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); //Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка текста после входа
     })
     it('Логин с заглавными буквами', function () {
        cy.visit('https://login.qa.studio'); //Зайти на сайт
        cy.get('#mail').type('GerMan@dolnikov.ru'); // Вводим логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); //Ввести правильный пароль
        cy.get('#loginButton').click(); // Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста после входа
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что видно крестик
    })
})