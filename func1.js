const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length))


function getMaterialLengths(materials) {
    const materialLengths = materials.map(function(a) {
      return a.length;
    });
  
    return materialLengths;
  }
  
  //const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
  const materialLengths = getMaterialLengths(materials);
  
  console.log(materialLengths);
  // Expected output: Array [8, 6, 7, 9]