
// C'est ici que vous pouvez ajouter ou modifier des articles.
// Gardez la structure identique pour chaque nouvel article.

export const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'Fabio Minetti',
    role: 'Président',
    photo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Fabio_Minetti.jpg',
    linkedin: 'https://www.linkedin.com/in/fabio-minetti/'
  },
  {
    id: '2',
    name: 'Maxence Carette',
    role: 'Vice-Président',
    photo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Maxence_Carrette.jpg',
    linkedin: 'https://www.linkedin.com/in/maxence-carrette-759264250/'
  },
  {
    id: '3',
    name: 'Candice Lefevre',
    role: 'Secrétaire Général',
    photo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Candice_Lefevre.jpg',
    linkedin: 'https://www.linkedin.com/in/candicelefevre92/'
  },
  {
    id: '4',
    name: 'Thibaud Hainque',
    role: 'Trésorier',
    photo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Thibaud_Hainque.jpg',
    linkedin: 'https://www.linkedin.com/in/thibaud-hainque-b4327b290/'
  },
  {
    id: '5',
    name: 'Alexandre Lejard',
    role: 'Responsable Événementiel',
    photo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Alexandre_Lejard.jpg',
    linkedin: 'https://www.linkedin.com/in/alexandre-lejard-260225291/'
  },
  {
    id: '6',
    name: 'Bianka Chesnet',
    role: 'Responsable Communication',
    photo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Bianka_Chesnet.jpg',
    linkedin: 'https://www.linkedin.com/in/bianka-chesnet/'
  }
];

export const PARTNERS = [
  { 
    name: 'FFDE', 
    logo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/FFDE.jpg' 
  },
  { 
    name: 'CINUP', 
    logo: 'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/CINUP.jpg' 
  }
];

export const GALLERY_IMAGES = [
  'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Amélie_Oudeacastera.jpeg',
  'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Antoine_discours.jpeg',
  'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Arthur_discour.jpeg',
  'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Bureau.jpeg',
  'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Emrys.jpeg',
  'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/photo_bar.jpeg',
  'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Max_et_Axel.jpeg',
  'https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/MUN.jpeg'
];

export const MOCK_ARTICLES = [
  {
    slug: "art-de-la-contradiction",
    title: "L'Art de la Contradiction : Pourquoi débattre est essentiel",
    category: "Rhétorique", // Ajouté pour le filtre
    author: "Erwan COGAT",
    excerpt: "Dans un monde de plus en plus polarisé, apprendre à écouter l'autre et à construire une réponse argumentée est une compétence vitale.",
    content: "Le débat n'est pas une simple confrontation d'ego, mais une quête collective de vérité. À La Tribune, nous croyons que la contradiction est le moteur de la pensée critique. En apprenant à défendre des positions qui ne sont pas nécessairement les nôtres, nous développons une empathie intellectuelle indispensable.<br><br>Le débat parlementaire nous force à structurer notre pensée sous pression, à écouter activement l'adversaire pour identifier les failles de son raisonnement, et à y répondre avec élégance et précision. C'est cette école de la rigueur que nous transmettons chaque semaine à nos membres.",
    coverImage: "https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/socrates.jpg",
    date: "12/03/2024"
  },
  {
    slug: "debat-parlementaire-sport-haut-niveau",
    title: "Le Débat Parlementaire : Un sport de haut niveau",
    category: "Débat",
    author: "Erwan COGAT",
    excerpt: "Entre adrénaline et structure rigoureuse, retour sur les coulisses de notre victoire au championnat de France 2021.",
    content: "Lors de la finale de 2021, la tension était palpable. Chaque argument devait être pesé, chaque envolée lyrique justifiée. Cette victoire a marqué un tournant pour La Tribune, prouvant que l'IÉSEG a sa place parmi l'élite de l'éloquence française. Ce succès repose sur une méthode de travail collective et un soutien indéfectible entre les membres du bureau et les orateurs.",
    coverImage: "https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Panthéon.jpg",
    date: "05/02/2025",
    youtubeId: "4nelubZ7Zf4"
  },
  {
    slug: "rhetorique-et-climat",
    title: "Rhétorique et Climat : Comment porter la voix de l'urgence",
    category: "Société",
    author: "Erwan COGAT",
    excerpt: "Comment les figures de style peuvent-elles aider à transformer des données scientifiques froides en une action concrète ?",
    content: "Face à l'urgence climatique, les faits seuls ne suffisent plus. Il faut savoir émouvoir pour mobiliser. La rhétorique offre des outils puissants pour rendre l'invisible visible et le futur lointain immédiat.<br><br>L'utilisation de l'hypotypose, par exemple, permet de décrire une scène avec une telle vivacité qu'elle semble se dérouler sous les yeux de l'auditeur. En tant qu'orateurs, nous avons la responsabilité d'utiliser notre art pour servir des causes qui nous dépassent. Cet article explore comment marier la rigueur scientifique avec la puissance du logos, du pathos et de l'ethos pour susciter un véritable engagement citoyen.",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    date: "20/01/2025"
  },
  {
    slug: "silence-outil-meconnu",
    title: "Le silence, cet outil méconnu de l'orateur",
    category: "Rhétorique",
    author: "Erwan COGAT",
    excerpt: "Apprendre à ne rien dire pour mieux se faire entendre. Une analyse de la puissance des pauses dans le discours.",
    content: "Beaucoup d'orateurs débutants craignent le silence comme un vide à combler. Pourtant, c'est dans le silence que naît la tension dramatique. Une pause bien placée après une question rhétorique force l'auditoire à réfléchir. Un silence prolongé avant une conclusion donne du poids à la parole qui va suivre.<br><br>Maîtriser son rythme, c'est savoir orchestrer les silences. Dans cet article, nous analysons les discours de grands orateurs contemporains pour comprendre comment ils utilisent l'absence de mots pour souligner l'importance de leur message.",
    coverImage: "https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/Gemini_Generated_Image_of03kwof03kwof03.png",
    date: "10/01/2025"
  },
  {
    slug: "ciceron-vs-ia",
    title: "Cicéron vs IA : La machine pourra-t-elle un jour émouvoir ?",
    category: "Société",
    author: "Erwan COGAT",
    excerpt: "La technologie générative arrive dans l'éloquence. Mais l'âme d'un discours réside-t-elle dans les mots ou dans celui qui les porte ?",
    content: "La dictature des mots justes. Sur le papier, l'IA est imbattable. Elle ne bafouille pas, ne perd pas le fil et possède un vocabulaire infini. Elle peut imiter le style de Victor Hugo ou la concision de Hemingway. Pourtant, croire que l'éloquence réside uniquement dans l'agencement des mots est une erreur d'analyse. C'est confondre la partition et la musique. L'IA génère une partition parfaite, mais elle n'a aucun instrument pour la jouer. L'éloquence n'est pas une suite de signes : c'est un acte vivant.<br><br>L'Incarnation : La grande absente. Comme vous le soulignez justement, l'âme d'un discours ne réside pas dans le texte, mais dans sa projection par un corps et une voix. L'éloquence est physique. Elle est faite de silences, de respirations, d'un regard qui vacille ou d'une main qui tremble. Cicéron parlait du pectus (le cœur, les tripes) pour expliquer la capacité à émouvoir. Pour toucher l'autre, il faut être soi-même touchable. L'humain émeut parce qu'il est vulnérable. Lorsqu'un orateur monte à la tribune, il engage sa crédibilité, son honneur, parfois sa sécurité. Nous vibrons pour ce risque. La machine, elle, ne risque rien. Elle n'a ni corps à exposer, ni voix à briser. Elle produit du texte 'au kilomètre' sans jamais ressentir la gravité de ce qu'elle énonce.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    date: "28/12/2025"
  }
];
