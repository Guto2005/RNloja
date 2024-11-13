// data/database.ts

export const data = {
    categories: [
      {
        id: 1,
        title: 'Eletrônicos',
        cover: 'https://picsum.photos/id/0/1000/300',
      },
      {
        id: 2,
        title: 'Paisagens',
        cover: 'https://picsum.photos/id/10/1000/300',
      },
      {
        id: 3,
        title: 'Acessórios',
        cover: 'https://picsum.photos/id/21/1000/300',
      },
    ],
    products: [
      {
        id: 4,
        idCategory: 1,
        image: 'https://picsum.photos/id/3/200/200',
        title: 'Câmera 4K',
        description: 'Gravação ultra HD, qualidade profissional.',
        price: 499.99,
      },
      // ... outros produtos
    ],
    aboutData: [
        {
          id: 1,
          title: "Nossa Missão",
          description: "Somos uma empresa dedicada a oferecer os melhores produtos do mercado.",
          image: "https://exemplo.com/imagem_missao.jpg"  // Adicionando a URL da imagem
        },
        {
          id: 2,
          title: "Nossa Visão",
          description: "Queremos ser líderes em nosso segmento, inovando e criando soluções únicas.",
          image: "https://exemplo.com/imagem_visao.jpg"  // URL da imagem
        },
        {
          id: 3,
          title: "Valores",
          description: "Compromisso com qualidade, responsabilidade social e respeito ao meio ambiente.",
          image: "https://exemplo.com/imagem_valores.jpg"  // URL da imagem
        }
      ]
};
      
  export const aboutData = data.aboutData; // Exporta diretamente a propriedade 'aboutData'
  

