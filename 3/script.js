
// Vad kommer skrivas ut när du kör programmet? Vilken ordning kommer bokstäverna i?
// Läs igenom skriptet noga, rad för rad, och skriv ner din gissning.

// När du gjort ovanstående, kör skriptet med node och jämför resultatet.

console.log('A')

function foo() {
    console.log('B')
}


function bar() {
    console.log('C')
    baz()
    console.log('D')
}

function baz() {
    console.log('E')

    foo()

    console.log('F')
}

console.log('G')
bar()
console.log('H')
