export const exhibitions: { 
    name: string; 
    description: string; 
    image: string; 
    artworks: { 
      name: string; 
      location: string; 
      city: string; 
      description: string; 
      image: string; 
    }[] 
  }[] = [
    {
      name: "Trésors sacrés",
      description: "Une exposition mettant en valeur des œuvres d'art religieuses",
      image: "https://www.caue-sarthe.com/wp-content/uploads/sites/5/2023/12/EXPO-tresorartsacre.jpg",
      artworks: [
        { 
          name: "Les Noces de Cana", 
          location: "Château des Ducs de Bretagne", 
          city: "Nantes", 
          description: "Peinture représentant le miracle de Jésus lors des noces de Cana en Galilée", 
          image: "https://collections.louvre.fr/media/cache/intermediate/0000000021/0000064382/0000560615_OG.JPG",
        },
        { 
          name: "Saint Yves, patron de la Bretagne", 
          location: "Château des Ducs de Bretagne", 
          city: "Nantes", 
          description: "Statue représentant Saint Yves, le saint patron de la Bretagne", 
          image: "https://bcd.bzh/becedia/sites/default/files/medias/dossiers-thematiques/saint-yves-et-lidentite-bretonne./bouchard-v.jpg",
        },
        { 
          name: "L'Assomption de la Vierge", 
          location: "Château des Ducs de Bretagne", 
          city: "Nantes", 
          description: "Représentation artistique de l'Assomption de la Vierge Marie", 
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Asumption_of_the_Virgin-Guido_Reni-MBA_Lyon_A123-IMG_0329.jpg/1200px-Asumption_of_the_Virgin-Guido_Reni-MBA_Lyon_A123-IMG_0329.jpg",
        },
      ]
    },
    {
      name: "Visages oubliés",
      description: "Une exposition explorant les portraits anonymes de différentes époques",
      image: "https://www.sciencesetavenir.fr/assets/img/2022/05/10/cover-r4x3w1200-627a89afd1c14-ouverture-web-explorateur.jpg",
      artworks: [
        { 
          name: "Portrait d'un homme inconnu", 
          location: "Château des Ducs de Bretagne", 
          city: "Nantes", 
          description: "Portrait d'un homme anonyme réalisé par un artiste inconnu", 
          image: "https://uploads4.wikiart.org/images/frans-hals/portrait-of-a-man-1634.jpg!Large.jpg",
        },
      ]
    },
    {
      name: "Martyrs et miracles",
      description: "Une exposition consacrée aux martyrs chrétiens et aux miracles",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Cvd1o_KLOjS-6nsZM_mpOTSMlgJnCStydzYuhdQPXA&s",
      artworks: [
        { 
          name: "Le Martyre de saint Sébastien", 
          location: "Château des Ducs de Bretagne", 
          city: "Nantes", 
          description: "Peinture illustrant le martyre de saint Sébastien, un martyr chrétien", 
          image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Sodoma_003.jpg",
        },
        { 
          name: "La Cène", 
          location: "Château des Ducs de Bretagne", 
          city: "Nantes", 
          description: "Représentation de la Cène, le dernier repas de Jésus avec ses disciples", 
          image: "https://cdn.generationvoyage.fr/2019/11/voir-la-cene-de-leonard-de-vinci-a-milan.jpg"
        },
        { 
          name: "La Tentation de saint Antoine", 
          location: "Château des Ducs de Bretagne", 
          city: "Nantes", 
          description: "Peinture illustrant le thème de la tentation de saint Antoine", 
          image: "https://upload.wikimedia.org/wikipedia/commons/a/af/La_Tentation_de_Saint_Antoine.png"
        },
      ]
    },
  ];
  