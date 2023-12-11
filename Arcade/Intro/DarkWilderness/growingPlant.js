/*

Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.

Example

For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
solution(upSpeed, downSpeed, desiredHeight) = 10.

#	Day	Night
1	100	90
2	190	180
3	280	270
4	370	360
5	460	450
6	550	540
7	640	630
8	730	720
9	820	810
10	910	900
The plant first reaches a height of 910 on day 10.

*/

function solution(upSpeed, downSpeed, desiredHeight) {
    let altura = 0;
    let dia = 0;

    while (altura < desiredHeight) {
        // En cada día, aumenta la altura por upSpeed
        altura += upSpeed;

        // Verifica si la altura alcanza o supera desiredHeight
        if (altura >= desiredHeight) {
            return dia + 1;  // Se alcanzó la altura deseada en este día
        }

        // En cada noche, disminuye la altura por downSpeed
        altura -= downSpeed;

        // Incrementa el contador de días
        dia++;
    }

    return dia;
}

// Ejemplo de uso
console.log(solution(100, 10, 910));  // Salida esperada: 10
