// // Напиши функцию-конструктор Account, которая создает объект со 
// // свойствами login и email. В prototype функции-конструктора добавь 
// метод 
// // getInfo(), который выводит в консоль значения полей login и email
//  объекта 
// // который его вызвал.

// const Account = function(login, email) {
//   this.login = login;
//   this.email = email;
// }
// Account.prototype.getInfo = function(){
//    console.log(this.login,this.email); 
   
// }


// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com




// Задание 2

// Напиши класс User для создания пользователя со следующим свойствами:
// name - //строка
// age - //число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// class User {
//   constructor({name,age,followers}){
//   this.name = name;
//   this.age = age;
//   this.followers = followers;  
//   }
// getInfo(){
//   console.log(` User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
// }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers


// Задание 3

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в 
// свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих


// class Storage{
//   constructor(items = []){
//     this.items = items;
//   }
//   getItems(){
//     return this.items
//   }
//   addItem(item){
//     return this.items.push(item)
//   }
//   removeItem(item){
//     for(let i = 0; i<this.items.length ; i++){
//       if (this.items[i] === item){
//         this.items.splice(i,1)
//         // delete this.items(i)
//       }
//     }
//     return this.items
//   }
// }


// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);
// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


// Задание 4


// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// class StringBuilder{
//   constructor (str){
//     this._value = str;
//   }
//   get value(){
//     return this._value;
//   }
//   append(str){
//   this._value += str;
//   }
//   prepend(str){
//     this._value = str + this._value;
//   }
//   pad(str){
//     this._value = str + this._value + str;
     
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='



// Задание 5


// Напиши класс Car с указанными свойствами и методами.
//Добавь статический метод `getSpecs(car)`, который принимает объект-машину как параметр и выводит 
//  в консоль значения свойств maxSpeed, speed, isOn, distance и price.

// class Car {
//   static getSpecs(car){
//   console.log(`maxSpeed - ${car.maxSpeed}, speed - ${car.speed}, isOn - ${car.isOn}, distance - ${car.distance}, price - ${car.price}`)
//   }

// Конструктор получает объект настроек.
// Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
  // constructor({maxSpeed, speed = 0, isOn = false, distance = 0, price}) {
  //   this.speed = speed
  //   this._price = price
  //   this.maxSpeed = maxSpeed
  //   this.isOn = isOn
  //   this.distance = distance
  // }
  // * Добавь геттер и сеттер для свойства price,
//   который будет работать с свойством цены автомобиля.

// set price(newPrice){
//   this._price = newPrice
// }
// get price(){
// return this._price
// }

//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    
  // turnOn() {
  //   this.isOn = true
  // }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
  // turnOff() {
  //   this.isOn = false
  //   this.speed = 0
  // }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
  // accelerate(value) {
  //   if (this.speed + value <= this.maxSpeed){
  //     this.speed += value
  //   }
  // }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
  // decelerate(value) {
  //   if (this.speed - value >= 0){
  //     this.speed -= value
  //   }
  // }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if(this.isOn === true)
//     {this.distance = this.distance + (hours * this.speed) }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// ______________________________________________________________________
// ПРАКТИКА



// class Stack{
//   constructor(...elements){
//     this._elements = [...elements];
//   }
//   push(elem){
//     this._elements.push(elem);
    
//   }
//   pop() {
//     this._elements.pop();

//   }
//   get length() {
//     return this._elements.length;

//   }
//   insertAt(index) {}
//   deleteAt (index,elem) {}
//   has (elem) {

//   }
//   log () {
//     console.log(this._elements)
//   }

// }

// const stack = new Stack();
// stack.push(2);
// stack.push(3);
// stack.log();

// stack.insertAt(0,100);
// stack.push(200);
// stack.log();

// console.log(stack.length);

// console.log(stack.has(100));
// console.log(stack.has(300));

// stack.pop();
// stack.log();

// stack.deleteAt(1);
// console.log(stack.has(2));
// stack.log();
