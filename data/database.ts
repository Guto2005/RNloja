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
  ],
  filialRJData: [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Filial RJ - Rua das Flores',
      description: 'Endereço fictício: Rua das Flores, 123, Rio de Janeiro, RJ',
    },
    // Outros dados da filial RJ podem ser adicionados aqui
  ],
  filialSPData: [
    {
      id: 1,
      title: "Filial SP - Endereço",
      description: "Rua Fictícia, 456, São Paulo, SP",
      image: "https://picsum.photos/200/300?image=40",
    },
    {
      id: 2,
      title: "Filial SP - Horário",
      description: "Segunda a Sexta, das 9h às 18h.",
      image: "https://picsum.photos/200/300?image=41",
    },
  ]
};

export const aboutData = data.aboutData; // Exporta diretamente a propriedade 'aboutData'
export const filialRJData = data.filialRJData; // Exporta os dados da Filial RJ
export const filialSPData = data.filialSPData; // Exporta os dados da Filial SP
