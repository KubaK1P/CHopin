// x = 5;
// console.log(x);
// var x;
funkcja();
function funkcja() {
    console.log('JESTEM');
}
//dom model strony internetowej tworzony na podstawie pliku html, której głównym elementem jest objekt document
//window- objekt globalny dla śodowiska uruchomieniowego jakim jest przeglądarka
//DOM znajduje się w window
// let non = new Date();
// window.console.error('Przegrałeś NaN');
// window.console.time('non');
// funkcja();
// for (let i=0;i<1000000;i++) {
//     console.log(i);
//     console.log('sdvads', i)
// }
// window.console.timeEnd('non');
//Co to jest obiekt
//Nieuporządkowana (w odróżnieniu od tablicy) lista właściwości, która słada się z 
//nazwy (klucza) - łańcucha
//Wartości - wartość może być dowolnym typem (np: prosty, złożony)
//Często o obiektach mówimy:
//Key - Value 
//Tworzenie obiektu - za pomocą konstruktora (new) - tworzy nowy obiekt
const car = new Object();
const tablica = new Array();
//Przypisywanie obiektowi właściwości
car.name = 'Ford';
car.year = 1999; //Notacja kropkowa (nazwa_obiektu.nazwa_właściwości = wartość;)
'text'.length;
//Notacja []
car['model'] = 'Fiesta';
//car['model']() - wywołanie metodą []