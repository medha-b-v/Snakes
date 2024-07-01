document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    let ScoreDisplay = document.querySelector('#score');
    const StartButton = document.querySelector('.start-button');
    
    class Node {
        constructor(position) {
            this.position = position;
            this.next = null;
        }
    }
    
    class LinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
        }

        append(position) {
            const newNode = new Node(position);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
    }

    let snake = new LinkedList();


    function snakeincrease() {
        let snakeElements = document.getElementsByClassName('snake');
        Array.from(snakeElements).forEach(element => {
            let index = squares.indexOf(element); 
            if (index !== -1) {
                snake.append(index); 
            }
        });
    }

    const width = 10;
    let currentPosition = 15;

    function draw() {
        let current = snake.head;
        while (current) {
            squares[current.position].classList.add('snake');
            squares[current.position].style.backgroundColor = 'black';
            current = current.next; 
        }
    }

    snakeincrease();
    draw(); 
    console.log(snake.head);
});
