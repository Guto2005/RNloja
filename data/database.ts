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
        id: 1,
        idCategory: 1,
        image: 'https://picsum.photos/id/3/200/200',
        title: 'Câmera 4K',
        description: 'Gravação ultra HD, qualidade profissional.',
        price: 499.99,
      },
      {
        id: 2,
        idCategory: 2,
        image: 'https://picsum.photos/id/3/200/200',
        title: 'Câmera 4K',
        description: 'Gravação ultra HD, qualidade profissional.',
        price: 499.99,
      },
      {
        id: 3,
        idCategory: 3,
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
        image: "https://picsum.photos/200/300?image=10"  // Exemplo de URL válida
      },
      {
        id: 2,
        title: "Nossa Visão",
        description: "Queremos ser líderes em nosso segmento, inovando e criando soluções únicas.",
        image: "https://picsum.photos/200/300?image=20"  // Exemplo de URL válida
      },
      {
        id: 3,
        title: "Valores",
        description: "Compromisso com qualidade, responsabilidade social e respeito ao meio ambiente.",
        image: "https://picsum.photos/200/300?image=30"  // Exemplo de URL válida
      }
    ]
};
      
  export const aboutData = data.aboutData; // Exporta diretamente a propriedade 'aboutData'
  

