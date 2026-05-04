## Ejercicio 3: Expresiones Anidadas (Relacionales)

| Objetivo | Expresión XPath |
| :--- | :--- |
| **Módulos por nombre de ciclo** | `//modulo[ciclo = //ciclo[nombre='Sistemas Microinformáticos y Redes']/@id]/nombre/text()` |
| **Ciclos por nombre de módulo** | `//ciclo[@id = //modulo[nombre='Lenguajes de marcas...']/ciclo]/nombre/text()` |
| **Módulos de Grado Superior** | `//modulo[ciclo = //ciclo[grado='Superior']/@id]/nombre/text()` |
| **Módulos por año de decreto** | `//modulo[ciclo = //ciclo[decretoTitulo/@año='2008']/@id]/nombre/text()` |
| **Grado por curso del módulo** | `//ciclo[@id = //modulo[curso=1]/ciclo]/grado/text()` |
