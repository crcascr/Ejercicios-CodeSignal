/*
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.

*/

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const fuerzaAmigos = [friendsLeft, friendsRight];
  const fuerzaPropia = [yourLeft, yourRight];

  const coinciden = Array(fuerzaPropia.length).fill(false);

  for (let i = 0; i < fuerzaPropia.length; i++) {
    for (let j = 0; j < fuerzaAmigos.length; j++) {
      if (fuerzaPropia[i] === fuerzaAmigos[j]) {
        coinciden[i] = true;
      }
    }
  }
  const todosCoinciden = coinciden.every((value) => value);
  return todosCoinciden;
}
