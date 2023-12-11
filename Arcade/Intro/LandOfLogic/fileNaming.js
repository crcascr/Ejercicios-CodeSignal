/*
You are given an array of strings names representing filenames. The array is sorted in order of file creation, such that names[i] represents the name of a file created before names[i+1] and after names[i-1] (assume 0-based indexing). Because all files must have unique names, files created later with the same name as a file created earlier should have an additional (k) suffix in their names, where k is the smallest positive integer (starting from 1) that does not appear in previous file names.

Your task is to iterate through all elements of names (from left to right) and update all filenames based on the above. Return an array of proper filenames.

Example

For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

Since names[0] = "doc" and names[1] = "doc", update names[1] = "doc(1)"
Since names[1] = "doc(1)" and names[3] = "doc(1)", update names[3] = "doc(1)(1)"
Since names[0] = "doc", names[1] = "doc(1)", and names[4] = "doc", update names[4] = "doc(2)"


*/

function solution(names) {
    const countMap = {};
    const result = [];

    for (let i = 0; i < names.length; i++) {
        const currentName = names[i];

        if (!countMap[currentName]) {
            // Si el nombre no está en el mapa, simplemente guárdalo
            countMap[currentName] = 1;
            result[i] = currentName;
        } else {
            // Si el nombre ya está en el mapa, encuentra un nombre único
            let newName = `${currentName}(${countMap[currentName]})`;
            while (countMap[newName]) {
                countMap[currentName]++;
                newName = `${currentName}(${countMap[currentName]})`;
            }
            
            countMap[currentName]++;
            countMap[newName] = 1; // Agregar el nuevo nombre al mapa
            result[i] = newName;
        }
    }

    console.log("Mapa conteo",countMap)
    return result;
}

// Ejemplo de uso
const names = ["a(1)", "a(6)", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
const result = solution(names);
console.log(result);

