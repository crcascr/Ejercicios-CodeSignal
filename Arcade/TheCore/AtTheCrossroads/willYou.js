/*
Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

A person contradicts Mary's belief if one of the following statements is true:

they are young and beautiful but not loved;
they are loved but not young or not beautiful.
Example

For young = true, beautiful = true, and loved = true, the output should be
solution(young, beautiful, loved) = false.

Young and beautiful people are loved according to Mary's belief.

For young = true, beautiful = false, and loved = true, the output should be
solution(young, beautiful, loved) = true.

Mary doesn't believe that not beautiful people can be loved.

*/

function solution(young, beautiful, loved) {
    // Condición 1: joven y hermoso pero no amado
    const condicion1 = young && beautiful && !loved;
    
    // Condición 2: amado pero no joven o no hermoso
    const condicion2 = loved && (!young || !beautiful);

    // La persona contradice las creencias de Mary si alguna de las condiciones es verdadera
    return condicion1 || condicion2;
}
