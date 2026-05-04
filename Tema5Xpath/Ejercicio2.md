## Ejercicio 2: Expresiones Simples (Módulos)

| Consulta | XPath |
| :--- | :--- |
| **Nombres de módulos** | `//modulo/nombre/text()` |
| **Módulos de ASIR** | `//modulo[ciclo='ASIR']/nombre/text()` |
| **Módulos de 2º curso** | `//modulo[curso=2]/nombre/text()` |
| **Menos de 5 horas** | `//modulo[horasSemanales < 5]/nombre/text()` |
| **1er curso de ASIR** | `//modulo[curso=1 and ciclo='ASIR']/nombre/text()` |
| **Horas (si > 3h)** | `//modulo[horasSemanales > 3]/horasSemanales/text()` |
