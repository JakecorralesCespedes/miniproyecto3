function encontrarNumeroFaltante(numeros) {
    //Resolver prueba aqui
   
     
     const n = numeros.length + 1;
     
     const SumTotal = n * (n + 1) / 2;
     
     const SumReal = numeros.reduce ((acc, num) => acc + num, 0);
   
     const MissingNumbers = SumTotal - SumReal;
   
     return MissingNumbers;
   
     
   
   }
   
   
   
   function assertEqual(actual, expected, message) {
     if (actual !== expected) {
       throw new Error(`Prueba fallida: ${message} - Esperado: ${expected}, pero se obtuvo: ${actual}`);
     }
     console.log(`Prueba exitosa`);
   }
   //NO eliminar este codigo
   try {
     // Prueba 1: Lista con un número faltante en el medio
     assertEqual(encontrarNumeroFaltante([1, 2, 4, 5]), 3, 'Debería encontrar el número faltante en el medio');
   
     // Prueba 2: Lista con el número faltante al inicio
     assertEqual(encontrarNumeroFaltante([2, 3, 4, 5]), 1, 'Debería encontrar el número faltante al inicio');
   
     // Prueba 3: Lista con el número faltante al final
     assertEqual(encontrarNumeroFaltante([1, 2, 3, 4]), 5, 'Debería encontrar el número faltante al final');
   
     // Prueba 4: Lista sin números faltantes
     assertEqual(encontrarNumeroFaltante([1, 2, 3]), 4, 'Debería manejar listas sin números faltantes');
   
     // Prueba 5: Lista vacía
     assertEqual(encontrarNumeroFaltante([]), 1, 'Debería manejar listas vacías');
   
   } catch (error) {
     console.error(error.message);
   }
   
   
   