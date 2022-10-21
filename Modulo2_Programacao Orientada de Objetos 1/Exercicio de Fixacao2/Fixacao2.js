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
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    info() {
        console.log(`Triânglo: A altura é ${this.height} e a base é ${this.base}.`);
    }
    perimeter() {
        console.log('Não é possível calcular perimetro.');
    }
    area() {
        let area = this.height * this.base;
        return area;
    }
}
class Rectangle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    info() {
        console.log(`Retânglo: A altura é ${this.x} e a base é ${this.y}.`);
    }
    perimeter() {
        let perimeter = 2 * (this.x * this.y);
        return perimeter;
    }
    area() {
        let area = this.x * this.y;
        return area;
    }
}
class Circle {
    constructor(ratio) {
        this.ratio = ratio;
    }
    info() {
        console.log(`Circlo: O raio do circlo é ${this.ratio}.`);
    }
    perimeter() {
        let perimeter = Math.round(2 * Math.PI * this.ratio * 100) / 100;
        return perimeter;
    }
    area() {
        let area = Math.round(Math.PI * this.ratio * this.ratio * 100) / 100;
        return area;
    }
}
let trianglo = new Triangle(3, 6);
let retanglo = new Rectangle(2, 6);
let circlo = new Circle(5);
trianglo.info();
retanglo.info();
circlo.info();
console.log();
console.log();
