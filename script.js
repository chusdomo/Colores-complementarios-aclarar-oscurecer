// script.js

const data = {
  "Rojos": [
    {nombre: "Carmesí", rojo: 90, amarillo: 5, azul: 5, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Bordo", rojo: 80, amarillo: 15, azul: 5, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Granate", rojo: 70, amarillo: 20, azul: 10, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Rojo Cereza", rojo: 95, amarillo: 5, azul: 0, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Rojo Rubí", rojo: 100, amarillo: 0, azul: 0, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Rojo Escarlata", rojo: 85, amarillo: 15, azul: 0, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Rojo Púrpura", rojo: 70, amarillo: 0, azul: 30, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Rojo Coral", rojo: 80, amarillo: 20, azul: 0, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Rojo Tomate", rojo: 85, amarillo: 10, azul: 5, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Rojo Cadmio", rojo: 95, amarillo: 5, azul: 0, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Rojo Oxido", rojo: 70, amarillo: 20, azul: 10, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Rojo Veneciano", rojo: 80, amarillo: 10, azul: 10, complementario: "Verde", gris: "Azul + Amarillo"}
  ],
  "Naranjas": [
    {nombre: "Naranja Quinacridona", rojo: 70, amarillo: 30, azul: 0, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Naranja Cadmio", rojo: 60, amarillo: 40, azul: 0, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Naranja Burnt", rojo: 50, amarillo: 40, azul: 10, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Naranja Dorado", rojo: 40, amarillo: 50, azul: 10, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Naranja Siena", rojo: 50, amarillo: 40, azul: 10, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Naranja Ámbar", rojo: 60, amarillo: 40, azul: 0, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Naranja Zanahoria", rojo: 65, amarillo: 35, azul: 0, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Naranja Mango", rojo: 70, amarillo: 30, azul: 0, complementario: "Azul", gris: "Rojo + Verde"}
  ],
  "Amarillos": [
    {nombre: "Amarillo Limón", rojo: 0, amarillo: 100, azul: 0, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Amarillo Mostaza", rojo: 20, amarillo: 70, azul: 10, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Amarillo Ocre", rojo: 10, amarillo: 80, azul: 10, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Amarillo Cadmio", rojo: 5, amarillo: 95, azul: 0, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Amarillo Dorado", rojo: 10, amarillo: 90, azul: 0, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Amarillo Maíz", rojo: 10, amarillo: 80, azul: 10, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Amarillo Marfil", rojo: 5, amarillo: 90, azul: 5, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Amarillo Beis", rojo: 5, amarillo: 80, azul: 15, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Amarillo Canario", rojo: 95, amarillo: 5, azul: 0, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Amarillo Tierra", rojo: 20, amarillo: 70, azul: 10, complementario: "Violeta", gris: "Rojo + Azul"}
  ],
  "Verdes": [
    {nombre: "Verde Esmeralda", rojo: 0, amarillo: 80, azul: 20, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Verde Agua", rojo: 0, amarillo: 70, azul: 30, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Verde Botella", rojo: 0, amarillo: 40, azul: 60, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Verde Oliva", rojo: 10, amarillo: 50, azul: 40, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Verde Selva", rojo: 0, amarillo: 50, azul: 50, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Verde Menta", rojo: 0, amarillo: 80, azul: 20, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Verde Manzana", rojo: 0, amarillo: 70, azul: 30, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Verde Pastel", rojo: 0, amarillo: 75, azul: 25, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Verde Pino", rojo: 0, amarillo: 50, azul: 50, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Verde Musgo", rojo: 10, amarillo: 50, azul: 40, complementario: "Rojo", gris: "Amarillo + Azul"}
  ],
  "Azules": [
    {nombre: "Azul Cobalto", rojo: 0, amarillo: 0, azul: 100, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Azul Ultramarino", rojo: 5, amarillo: 0, azul: 95, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Azul Celeste", rojo: 20, amarillo: 80, azul: 0, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Azul Turquesa", rojo: 30, amarillo: 70, azul: 0, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Azul Acero", rojo: 10, amarillo: 0, azul: 90, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Azul Indigo", rojo: 20, amarillo: 0, azul: 80, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Azul Prusia", rojo: 20, amarillo: 10, azul: 70, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Azul Zafiro", rojo: 5, amarillo: 0, azul: 95, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Azul Petróleo", rojo: 20, amarillo: 0, azul: 80, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Azul Marino", rojo: 10, amarillo: 0, azul: 90, complementario: "Naranja", gris: "Rojo + Amarillo"}
  ],
  "Violetas": [
    {nombre: "Violeta Lavanda", rojo: 40, amarillo: 0, azul: 60, complementario: "Amarillo", gris: "Rojo + Azul"},
    {nombre: "Violeta Burdeos", rojo: 30, amarillo: 0, azul: 70, complementario: "Amarillo", gris: "Rojo + Azul"},
    {nombre: "Violeta Malva", rojo: 50, amarillo: 0, azul: 50, complementario: "Amarillo", gris: "Rojo + Azul"},
    {nombre: "Violeta Púrpura", rojo: 60, amarillo: 0, azul: 40, complementario: "Amarillo", gris: "Rojo + Azul"},
    {nombre: "Violeta Plomo", rojo: 30, amarillo: 0, azul: 70, complementario: "Amarillo", gris: "Rojo + Azul"},
    {nombre: "Violeta Ciruela", rojo: 40, amarillo: 0, azul: 60, complementario: "Amarillo", gris: "Rojo + Azul"},
    {nombre: "Violeta Orquídea", rojo: 50, amarillo: 0, azul: 50, complementario: "Amarillo", gris: "Rojo + Azul"},
    {nombre: "Violeta Granate", rojo: 60, amarillo: 0, azul: 40, complementario: "Amarillo", gris: "Rojo + Azul"},
    {nombre: "Violeta Lila", rojo: 40, amarillo: 0, azul: 60, complementario: "Amarillo", gris: "Rojo + Azul"},
    {nombre: "Violeta Fucsia", rojo: 80, amarillo: 0, azul: 20, complementario: "Amarillo", gris: "Rojo + Azul"}
  ],
  "Marrones": [
    {nombre: "Marrón Chocolate", rojo: 40, amarillo: 40, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Marrón Tostado", rojo: 30, amarillo: 50, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Marrón Tierra", rojo: 30, amarillo: 50, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Marrón Sepia", rojo: 30, amarillo: 50, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Marrón Terracota", rojo: 50, amarillo: 30, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Marrón Café", rojo: 40, amarillo: 40, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Marrón Buró", rojo: 30, amarillo: 50, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Marrón Umber", rojo: 30, amarillo: 50, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Marrón Sienna", rojo: 40, amarillo: 40, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Marrón Ocre", rojo: 20, amarillo: 70, azul: 10, complementario: "Azul", gris: "Rojo + Verde"}
  ],
  "Neutros": [
    {nombre: "Gris Plateado", rojo: 25, amarillo: 25, azul: 50, complementario: "-", gris: "Rojo + Amarillo"},
    {nombre: "Gris Carbón", rojo: 30, amarillo: 30, azul: 40, complementario: "-", gris: "Rojo + Amarillo"},
    {nombre: "Gris Perla", rojo: 25, amarillo: 25, azul: 50, complementario: "-", gris: "Rojo + Amarillo"},
    {nombre: "Gris Cemento", rojo: 30, amarillo: 30, azul: 40, complementario: "-", gris: "Rojo + Amarillo"},
    {nombre: "Gris Plomo", rojo: 25, amarillo: 25, azul: 50, complementario: "-", gris: "Rojo + Amarillo"},
    {nombre: "Blanco Alabastro", rojo: 0, amarillo: 0, azul: 0, complementario: "Negro", gris: "Negro + Blanco"},
    {nombre: "Blanco Nieve", rojo: 0, amarillo: 0, azul: 0, complementario: "Negro", gris: "Negro + Blanco"},
    {nombre: "Negro Ébano", rojo: 0, amarillo: 0, azul: 0, complementario: "Blanco", gris: "Negro + Blanco"},
    {nombre: "Negro Grafito", rojo: 0, amarillo: 0, azul: 0, complementario: "Blanco", gris: "Negro + Blanco"},
    {nombre: "Negro Onix", rojo: 0, amarillo: 0, azul: 0, complementario: "Blanco", gris: "Negro + Blanco"}
  ],
  "Metalizados": [
    {nombre: "Dorado", rojo: 50, amarillo: 40, azul: 10, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Bronce", rojo: 40, amarillo: 40, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Plata", rojo: 25, amarillo: 25, azul: 50, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Cobre", rojo: 60, amarillo: 30, azul: 10, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Platino", rojo: 25, amarillo: 25, azul: 50, complementario: "Rojo", gris: "Amarillo + Azul"}
  ],
  "Pastel": [
    {nombre: "Rosa Pastel", rojo: 80, amarillo: 10, azul: 10, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Azul Pastel", rojo: 10, amarillo: 10, azul: 80, complementario: "Naranja", gris: "Rojo + Amarillo"},
    {nombre: "Verde Pastel", rojo: 10, amarillo: 65, azul: 25, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Amarillo Pastel", rojo: 5, amarillo: 90, azul: 5, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Lila Pastel", rojo: 40, amarillo: 0, azul: 60, complementario: "Amarillo", gris: "Rojo + Azul"}
  ],
  "Óxidos": [
    {nombre: "Óxido de Hierro", rojo: 65, amarillo: 25, azul: 10, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Óxido de Cromo", rojo: 0, amarillo: 70, azul: 30, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Óxido Rojo Tierra", rojo: 70, amarillo: 20, azul: 10, complementario: "Verde", gris: "Azul + Amarillo"},
    {nombre: "Óxido Ocre Dorado", rojo: 10, amarillo: 80, azul: 10, complementario: "Violeta", gris: "Rojo + Azul"},
    {nombre: "Óxido Marrón Tierra", rojo: 40, amarillo: 40, azul: 20, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Óxido Anaranjado", rojo: 60, amarillo: 35, azul: 5, complementario: "Azul", gris: "Rojo + Verde"},
    {nombre: "Óxido Verde", rojo: 0, amarillo: 60, azul: 40, complementario: "Rojo", gris: "Amarillo + Azul"},
    {nombre: "Óxido Negro", rojo: 0, amarillo: 0, azul: 0, complementario: "Blanco", gris: "Negro + Blanco"}
  ]
};

const notesText = `📚  Notas Explicativas
×
Explicación de las Columnas
1. Rojo (%), Amarillo (%), Azul (%)
Porcentajes base del modelo RYB (Rojo-Amarillo-Azul).
2. Complementario (10%)
Porcentaje del color complementario para apagar u oscurecer el color principal.
3. Oscurecer (5%)
Método para oscurecer utilizando negro o complementario.
4. Aclarar (10%)
Método para aclarar utilizando blanco.
5. Apagar (5%)
Método para reducir la saturación mediante el uso del complementario o negro/blanco.
6. Gris/Neutro (50%)
Combinación sugerida para crear grises o neutros.
¿Qué es un Color Complementario?
Un color complementario es aquel que está ubicado justo enfrente en la rueda de colores RYB.
Ejemplos:
· El complementario del rojo es el verde
· El complementario del azul es el naranja
· El complementario del amarillo es el violeta
Mezclar un color con su complementario neutraliza su brillo.
Cómo Usar el Color Complementario
Para oscurecer: añade un poco del complementario.
Para apagar: mezcla un poco de complementario.
Para grises: usa partes iguales de un color y su complementario.
Ventajas:
· Mantener pureza del color
· Crear sombras naturales
· Controlar temperatura del color
Ejemplos prácticos:
Oscurecer un rojo: agrega verde.
Apagar un amarillo: agrega violeta.
Crear gris: mezcla azul y naranja.`;
</style>