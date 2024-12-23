import { useState } from 'react';
import { Card } from './Card'

const books = [
    {
      id: 1,
      title: "El Principito",
      author: "Antoine de Saint-Exupéry",
      price: 15.99,
      coverImage: "https://images.cdn1.buscalibre.com/fit-in/360x360/75/23/75237f2f609042d9713cb03b681c77c1.jpg",
      description:'"El Principito" es una obra clásica de Antoine de Saint-Exupéry que narra la historia de un joven príncipe que viaja por varios planetas y descubre lecciones profundas sobre la amistad, el amor y la naturaleza humana. Con un estilo sencillo y lleno de simbolismo, invita a reflexionar sobre lo esencial en la vida.'
    },
    {
      id: 2,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      price: 19.99,
      coverImage: "https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg",
      description:'"Cien años de soledad" es una novela de Gabriel García Márquez que relata la saga de la familia Buendía a lo largo de varias generaciones en el mítico pueblo de Macondo. Mezclando realismo mágico y tragedia, explora temas como el destino, la soledad y el paso del tiempo, en una obra considerada una de las grandes cumbres de la literatura latinoamericana.'
    },
    {
      id: 3,
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      price: 25.50,
      coverImage: "https://www.planetadelibros.com/usuaris/libros/fotos/374/original/portada_don-quijote-de-la-mancha-comic_miguel-de-cervantes_202310231106.jpg",
      description:'"Don Quijote de la Mancha" es una novela de Miguel de Cervantes que cuenta las aventuras de Alonso Quijano, un hidalgo que, tras leer demasiados libros de caballería, decide convertirse en el caballero Don Quijote. Acompañado por su fiel escudero, Sancho Panza, vive una serie de cómicas y trágicas desventuras, en una obra que reflexiona sobre la realidad, la fantasía y la locura.'
    },
    {
      id: 4,
      title: "El código Da Vinci",
      author: "Dan Brown",
      price: 29.99,
      coverImage: "https://m.media-amazon.com/images/I/A1IH+BJHY3L.jpg",
      description:'"El Código Da Vinci" es un thriller de Dan Brown que sigue al profesor Robert Langdon en una frenética búsqueda de secretos ocultos tras el asesinato de un curador del Museo del Louvre. A través de símbolos y pistas en obras de arte de Da Vinci, la novela explora una conspiración histórica relacionada con el Santo Grial, combinando misterio, religión y ciencia en una trama llena de intriga.'
    },
    {
      id: 5,
      title: "El señor de los anillos",
      author: "J.R.R. Tolkien",
      price: 45.99,
      coverImage: "https://www.planetadelibros.com/usuaris/libros/fotos/354/original/portada_el-senor-de-los-anillos-n-0103-la-comunidad-del-anillo-edicion-revisada_j-r-r-tolkien_202310231103.jpg",
      description:'"El Señor de los Anillos" es una épica novela de fantasía escrita por J.R.R. Tolkien que sigue la misión de Frodo Bolsón, un hobbit encargado de destruir el Anillo Único, una poderosa y maligna joya. Acompañado por la Comunidad del Anillo, enfrenta grandes peligros en un vasto mundo habitado por elfos, enanos, magos y criaturas oscuras, en una historia de amistad, valor y la lucha entre el bien y el mal.'
    },
    {
      id: 6,
      title: "La sombra del viento",
      author: "Carlos Ruiz Zafón",
      price: 32.50,
      coverImage: "https://www.planetadelibros.com/usuaris/libros/fotos/39/original/portada_la-sombra-del-viento_carlos-ruiz-zafon_201609051632.jpg",
      description:'"La sombra del viento" es una novela de Carlos Ruiz Zafón que se desarrolla en la Barcelona de la posguerra, donde un joven llamado Daniel descubre un misterioso libro en un olvidado cementerio de libros. A medida que investiga sobre su autor, Julián Carax, se ve envuelto en una trama de secretos, traiciones y tragedias que revelan oscuros enigmas del pasado. La obra combina suspenso, romance y misterio en una historia cautivadora sobre el poder de los libros y la memoria.'
    },
    {
      id: 7,
      title: "Harry Potter y la piedra filosofal",
      author: "J.K. Rowling",
      price: 25.99,
      coverImage: "https://www.naoslibros.es/media/img/portadas/_visd_0000JPG02BWP.jpg",
      description:'"Harry Potter y la piedra filosofal" es el primer libro de la famosa saga de J.K. Rowling. Narra la historia de Harry Potter, un niño huérfano que descubre en su undécimo cumpleaños que es un mago. En la escuela Hogwarts de Magia y Hechicería, Harry hace nuevos amigos y enfrenta peligros, mientras busca la mítica piedra filosofal, que otorga inmortalidad. La novela mezcla aventura, magia y amistad, dando inicio a una historia que cautivará a lectores de todas las edades.'
    },
    {
      id: 8,
      title: "Matar a un ruiseñor",
      author: "Harper Lee",
      price: 34.99,
      coverImage: "https://m.media-amazon.com/images/I/71EqZnXaNoL._AC_UF894,1000_QL80_.jpg",
      description:'"Matar a un ruiseñor" es una novela de Harper Lee que aborda temas de racismo y justicia en el sur de Estados Unidos durante la década de 1930. A través de los ojos de Scout Finch, una niña de seis años, la historia sigue a su padre, Atticus Finch, un abogado que defiende a un hombre negro acusado injustamente de violar a una mujer blanca. La obra explora la lucha moral contra los prejuicios y la importancia de la empatía y la integridad.'
    },
    {
      id: 9,
      title: "El Hobbit, un viaje inesperado",
      author: "J.R.R Tolkien",
      price: 34.99,
      coverImage: "https://m.media-amazon.com/images/I/71qpt1yWfbL._AC_UF894,1000_QL80_.jpg",
      description:'"El Hobbit: Un viaje inesperado" es la primera película basada en la obra de J.R.R. Tolkien. Sigue las aventuras de Bilbo Bolsón, un hobbit que, junto a un grupo de enanos liderados por Thorin Oakenshield, emprende un peligroso viaje para recuperar un tesoro custodiado por el dragón Smaug. A lo largo de su travesía, Bilbo enfrenta desafíos y descubre su propio coraje, en un relato de fantasía lleno de magia, criaturas míticas y amistad.'
    }
  ];

  
  export const CardContainer = ({addToCart}) => {
    const [visibleBooks, setVisibleBooks] = useState(4);
  
    const showMoreBooks = () => {
      setVisibleBooks((prevVisible) => prevVisible + 4)
    };
    return (

  <div id='cardContainer' className='flex flex-col items-center'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-16" >
    {books.slice(0, visibleBooks).map((book) => (
      <Card
        key={book.id} 
        title={book.title}
        author={book.author}
        price={book.price}
        coverImage={book.coverImage}
        description={book.description}
        addToCart={addToCart} 
      />
    ))}
    </div>
    <button
    onClick={showMoreBooks}
    className='bg-verde-claro text-blanco font-arimo text-xl mt-8 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mb-10 hover:bg-oscuro'
    >
      Ver mas..
    </button>
  </div>
    
  )
}
