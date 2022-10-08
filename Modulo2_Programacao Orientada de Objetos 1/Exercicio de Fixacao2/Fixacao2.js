"use strict";
// PRINCIPAL
// Criar três classes que indicam formas geométricas (quadrado, triângulo, círculo, dentre outras);
// Cada classe deve possuir os atributos x e y, além de outros necessários para o cálculo de perímetro e área;
// Métodos para calcular perímetro e área;
// Utilização de pelo menos um getter e setter por classe;
// Um programa que testa todas as classes (não precisa ter entrada de informação do usuário);
// EXTRA
// Mais duas classes que herdam de uma classe criada na parte principal (ou vice-versa);
// Criar uma variável e um método estáticos, e uma variável e um método privados em pelo menos uma classe;
// Utilizar typescript ao invés de javascript;
// EXTRA DO EXTRA
// Mostrar a forma instanciada em um Canvas no HTML.
class Triangle {
    constructor(base, height, isosc = false) {
        this.base = base;
        this.height = height;
        this.isosc = isosc;
    }
    info() {
        console.log(`Triânglo\n: A altura é ${this.height} e a base é ${this.base}.`);
    }
    perimeter() {
        if (this.isosc == false) {
            return 'indisponível';
        }
        else {
            let side = Math.round(Math.sqrt((this.base / 2) ** 2 + (this.height ** 2)) * 100) / 100;
            let parameter = 2 * side + this.base;
            return parameter;
        }
    }
    area() {
        let area = (this.height * this.base) / 2;
        return area;
    }
    set isosc(veri) {
        this.isosceles = veri;
    }
    get isosc() {
        return this.isosceles;
    }
}
class Rectangle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    info() {
        console.log(`Retânglo\n: A altura é ${this.x} e a base é ${this.y}.`);
    }
    perimeter() {
        let perimeter = 2 * (this.x + this.y);
        return perimeter;
    }
    area() {
        let area = this.x * this.y;
        return area;
    }
    set x(value) {
        this.base = value;
    }
    get x() {
        return this.base;
    }
}
class Circle {
    constructor(ratio) {
        this.ratio = ratio;
    }
    info() {
        console.log(`Círclo\n: O raio do círclo é ${this.ratio}.`);
    }
    perimeter() {
        let perimeter = Math.round(2 * Math.PI * this.ratio * 100) / 100;
        return perimeter;
    }
    area() {
        let area = Math.round(Math.PI * (this.ratio ** 2) * 100) / 100;
        return area;
    }
    set diameter(d) {
        this.ratio = d / 2;
    }
    get diameter() {
        return this.ratio * 2;
    }
}
// Checking the classes
let trianglo = new Triangle(6, 4);
let retanglo = new Rectangle(2, 6);
let circlo = new Circle(5);
// Information of the triangle
trianglo.info();
console.log(`O perímetro do triânglo é ${trianglo.perimeter()} e sua área é ${trianglo.area()}.`);
console.log('+');
trianglo.isosc = true; // suppose the triangle is isosceles
console.log(`Se o triânglo é isosceles, o perímetro do triânglo vai ser ${trianglo.perimeter()}.`);
console.log('\n');
// Information of the rectangle
retanglo.info();
console.log(`O perímetro do retanglo é ${retanglo.perimeter()} e sua área é ${retanglo.area()}.`);
console.log('\n');
// Information of the circle
circlo.info();
console.log(`O perímetro do círclo é ${circlo.perimeter()} e sua área é ${circlo.area()}.`);
console.log('+');
circlo.diameter = 12; // cálculo dos parâmetros do círculo por diâmetro
console.log(`Se o diâmetro do círclo é ${circlo.diameter}, o raio, o perímetro, e a área do círclo seriam ${circlo.ratio}, ${circlo.perimeter()}, ${circlo.area()}, respectivamente.`);
