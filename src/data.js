let quotes = [
  {
    quote: "No hay caminos para la paz; la paz es el camino.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Hay dos cosas que son infinitas: el universo y la estupidez humana; de la primera no estoy muy seguro.",
    author: "Albert Einstein"
  },
  {
    quote: "No abras los labios si no estás seguro de que lo que vas a decir es más hermoso que el silencio.",
    author: "Proverbio árabe"
  },
  {
    quote: "El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas.",
    author: "William George Ward"
  },
  {
    quote: "Podrán cortar todas las flores, pero no podrán detener la primavera.",
    author: "Pablo Neruda"
  },
  {
    quote: "Algún día en cualquier parte, en cualquier lugar indefectiblemente te encontrarás a ti mismo, y ésa, sólo ésa, puede ser la más feliz o la más amarga de tus horas.",
    author: "Pablo Neruda"
  },
  {
    quote: "Tu mejor activo es el tiempo. Cada segundo perdido, es vida perdida, y nuestro paso por el mundo es tan breve, que no me hago a la idea de no aprovechar cada momento.",
    author: "Facundo Cabral"
  },
  {
    quote: "Haz sólo lo que amas y serás feliz, y el que hace lo que ama, está benditamente condenado al éxito, que llegará cuando deba llegar, porque lo que debe ser será, y llegará naturalmente.",
    author: "Facundo Cabral"
  },
  {
    quote: " El único hombre que no se equivoca es el que nunca hace nada",
    author: "Goethe"
  },
  {
    quote: "Reunirse es un comienzo, permanecer juntos es el progreso y trabajar juntos es el éxito.",
    author: "Henry Ford"
  }
];
quotes.sort(() => Math.random() - 0.5);

let backgroundColor = ["#FFFFFF", "#E6B0AA", "#C0392B", "#E74C3C", "#D7BDE2", "#9B59B6", "#E8DAEF", "#8E44AD", "#D4E6F1", "#5B2C6F", "#5499C7", "#2980B9", "#3498DB", "#A3E4D7", "#48C9B0", "#148F77", "#73C6B6", "#138D75", "#2ECC71", "#FCF3CF", "#F7DC6F", "#F1C40F", "#FAD7A0", "#F39C12", "#D68910", "#EB984E", "#D35400", "#ABB2B9", "#5F6A6A", "#EAEDED", "#F08080", "#FF00FF", "#FE2EF7", "#FFFF00"];
backgroundColor.sort(() => Math.random() - 0.5);

export { quotes, backgroundColor };