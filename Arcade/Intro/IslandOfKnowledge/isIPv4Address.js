/*
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
solution(inputString) = true;

For inputString = "172.316.254.1", the output should be
solution(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
solution(inputString) = false.

There is no first number.


*/

function solution(inputString) {
  const numerosIngreso = inputString.split(".");

  if (numerosIngreso.length != 4) {
    return false;
  }

  for (let i = 0; i < numerosIngreso.length; i++) {
    if (numerosIngreso[i] === "00" || numerosIngreso[i] === "") {
      return false;
    } else {
      const octeto = numerosIngreso[i];

      if (octeto[0] === "0" && octeto.length > 1) {
        return false;
      }

      if (
        /[^0-9]/.test(octeto) ||
        isNaN(parseInt(octeto, 10)) ||
        parseInt(octeto, 10) < 0 ||
        parseInt(octeto, 10) > 255
      ) {
        return false;
      }
    }
  }
  return true;
}
