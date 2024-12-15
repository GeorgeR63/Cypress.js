describe('Проверка покупки аватара для покемонов', function () {
    it('Покупка нового аватара', function () {
        cy.visit('https://pokemonbattle.ru/'); //Зайти на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Вводим логин
        cy.get('#password').type('USER_PASSWORD'); // Вводим пароль
        cy.get('.auth__button').click(); // Нажимаем на кнопку
        cy.wait(2000) // Ждем 
        cy.get('.header__container > .header__id').click(); // Нажимаем на профиль
        cy.get('[href="/shop"]').click(); // Нажимаем на смену аватара
        cy.get('.available > button').first().click({ force: true }); // кликаем Купить у первого доступного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // Вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Вводим дату
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // СVV код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME'); // Держатель карты
        cy.get('.pay-btn').click(); // Нажимаем оплатить 
        cy.get('#cardnumber').type('56456'); // Вводим код из смс
        cy.get('.payment__submit-button').click(); // нажимаем кнопку Отправить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // Проверяем наличие и видимость сообщения о успешной покупке
        cy.get('.payment__adv').click(); // Нажимем вернуться на главную страницу 
        cy.get('.header__container > .header__id').click(); // Нажимаем на профиль
    })
})