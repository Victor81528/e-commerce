const state = {
  list: [
    {
      id: 1,
      title: 'Coluca Anfolifia',
      img: process.env.VUE_APP_PATH + '/img/product/01.jpeg',
      desc: 'List from stylist Hannah Berns. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
      price: 499,
      gender: 0,
      type: 0
    },
    {
      id: 2,
      title: 'Times S103',
      img: process.env.VUE_APP_PATH + '/img/product/02.jpeg',
      desc: 'List from stylist Jogn Greenwood. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
      price: 5200,
      gender: 1,
      type: 0
    },
    {
      id: 3,
      title: 'Loca 06',
      img: process.env.VUE_APP_PATH + '/img/product/03.jpeg',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      price: 1769,
      gender: 0,
      type: 0
    },
    {
      id: 4,
      title: 'Highlander',
      img: process.env.VUE_APP_PATH + '/img/product/04.jpeg',
      desc: 'Norman Cage. Aliquam faucibus ultrices libero, pretium scelerisque leo malesuada eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce malesuada, dui in sollicitudin suscipit, leo metus consectetur purus, cursus auctor augue augue ac massa.',
      price: 320,
      gender: 2,
      type: 1
    },
    {
      id: 5,
      title: 'Fanco T-shirt',
      img: process.env.VUE_APP_PATH + '/img/product/05.jpeg',
      desc: 'Tom Ray. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
      price: 599,
      gender: 1,
      type: 0
    },
    {
      id: 6,
      title: 'Royaloy coat',
      img: process.env.VUE_APP_PATH + '/img/product/06.jpeg',
      desc: 'List from stylist Tom Ray. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      price: 1850,
      gender: 0,
      type: 0
    },
    {
      id: 7,
      title: 'Snowa coat',
      img: process.env.VUE_APP_PATH + '/img/product/07.jpeg',
      desc: 'Suspendisse et neque quis quam porta mattis eu sed diam. Sed ac leo vitae ipsum feugiat dapibus vitae et elit. Aenean blandit vestibulum tincidunt. Mauris fringilla molestie luctus. Sed et turpis in diam pharetra maximus. Sed felis quam, gravida sed tempor eu, iaculis quis elit. Ut lacinia mauris sem, porta egestas ante ultrices vulputate.',
      price: 7200,
      gender: 0,
      type: 0
    },
    {
      id: 8,
      title: 'Maculay 03',
      img: process.env.VUE_APP_PATH + '/img/product/08.jpeg',
      desc: 'New colors arrival. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      price: 400,
      gender: 2,
      type: 1
    },
    {
      id: 9,
      title: 'Vender outlander',
      img: process.env.VUE_APP_PATH + '/img/product/09.jpeg',
      desc: 'Classic Landing Shoes. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      price: 700,
      gender: 2,
      type: 1
    },
    {
      id: 10,
      title: 'One Pinker',
      img: process.env.VUE_APP_PATH + '/img/product/10.jpeg',
      desc: 'Young! Sexy. Suspendisse et neque quis quam porta mattis eu sed diam. Sed ac leo vitae ipsum feugiat dapibus vitae et elit. Aenean blandit vestibulum tincidunt. Mauris fringilla molestie luctus. Sed et turpis in diam pharetra maximus. Sed felis quam, gravida sed tempor eu, iaculis quis elit. Ut lacinia mauris sem, porta egestas ante ultrices vulputate.',
      price: 1340,
      gender: 0,
      type: 0
    },
    {
      id: 11,
      title: 'Vintage 1970s',
      img: process.env.VUE_APP_PATH + '/img/product/11.jpeg',
      desc: 'Retro fashion. Suspendisse et neque quis quam porta mattis eu sed diam. Sed ac leo vitae ipsum feugiat dapibus vitae et elit. Aenean blandit vestibulum tincidunt. Mauris fringilla molestie luctus. Sed et turpis in diam pharetra maximus. Sed felis quam, gravida sed tempor eu, iaculis quis elit. Ut lacinia mauris sem, porta egestas ante ultrices vulputate.',
      price: 999,
      gender: 1,
      type: 2
    },
    {
      id: 12,
      title: 'W601 S22',
      img: process.env.VUE_APP_PATH + '/img/product/12.jpeg',
      desc: 'Dating outfit. Aliquam faucibus ultrices libero, pretium scelerisque leo malesuada eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce malesuada, dui in sollicitudin suscipit, leo metus consectetur purus, cursus auctor augue augue ac massa.',
      price: 690,
      gender: 0,
      type: 0
    },
    {
      id: 13,
      title: 'Solaire of Astora',
      img: process.env.VUE_APP_PATH + '/img/product/13.jpeg',
      desc: 'Praise the sun! Suspendisse et neque quis quam porta mattis eu sed diam. Sed ac leo vitae ipsum feugiat dapibus vitae et elit. Aenean blandit vestibulum tincidunt. Mauris fringilla molestie luctus. Sed et turpis in diam pharetra maximus. Sed felis quam, gravida sed tempor eu, iaculis quis elit. Ut lacinia mauris sem, porta egestas ante ultrices vulputate.',
      price: 399,
      gender: 1,
      type: 0
    },
    {
      id: 14,
      title: 'W202',
      img: process.env.VUE_APP_PATH + '/img/product/14.jpeg',
      desc: 'Be with you when working. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      price: 550,
      gender: 1,
      type: 0
    },
    {
      id: 15,
      title: 'Wandering 03',
      img: process.env.VUE_APP_PATH + '/img/product/15.jpeg',
      desc: 'Hmmmmm...',
      price: 6990,
      gender: 1,
      type: 0
    },
    {
      id: 16,
      title: 'J suit',
      img: process.env.VUE_APP_PATH + '/img/product/16.jpeg',
      desc: 'For halloween, may be... Suspendisse et neque quis quam porta mattis eu sed diam. Sed ac leo vitae ipsum feugiat dapibus vitae et elit. Aenean blandit vestibulum tincidunt. Mauris fringilla molestie luctus. Sed et turpis in diam pharetra maximus. Sed felis quam, gravida sed tempor eu, iaculis quis elit. Ut lacinia mauris sem, porta egestas ante ultrices vulputate.',
      price: 10600,
      gender: 1,
      type: 0
    },
    {
      id: 17,
      title: 'Kpola',
      img: process.env.VUE_APP_PATH + '/img/product/17.jpeg',
      desc: 'today, the... Cras purus purus, cursus ac tortor ac, mollis tincidunt elit. Aliquam vitae convallis metus. Ut sem dolor, rhoncus id sapien id, vulputate semper leo. Morbi sodales diam ac urna vestibulum, non dictum sem luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      price: 3600,
      gender: 0,
      type: 1
    },
    {
      id: 18,
      title: 'ModoMo',
      img: process.env.VUE_APP_PATH + '/img/product/18.jpeg',
      desc: 'I like bacon. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      price: 4200,
      gender: 0,
      type: 1
    },
    {
      id: 19,
      title: 'Konvarce Zero',
      img: process.env.VUE_APP_PATH + '/img/product/19.jpeg',
      desc: 'Easy match. Cras purus purus, cursus ac tortor ac, mollis tincidunt elit. Aliquam vitae convallis metus. Ut sem dolor, rhoncus id sapien id, vulputate semper leo. Morbi sodales diam ac urna vestibulum, non dictum sem luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      price: 2560,
      gender: 2,
      type: 1
    },
    {
      id: 20,
      title: 'Unraspon',
      img: process.env.VUE_APP_PATH + '/img/product/20.jpeg',
      desc: 'Expensive amd useless. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      price: 12500,
      gender: 1,
      type: 2
    },
    {
      id: 21,
      title: 'Niuka',
      img: process.env.VUE_APP_PATH + '/img/product/21.jpeg',
      desc: 'Sport, Jump, running. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
      price: 7280,
      gender: 2,
      type: 1
    },
    {
      id: 22,
      title: 'Hahahaha',
      img: process.env.VUE_APP_PATH + '/img/product/22.jpeg',
      desc: 'For halloween, may be...',
      price: 7280,
      gender: 1,
      type: 1
    },
    {
      id: 23,
      title: 'Konvarce 7',
      img: process.env.VUE_APP_PATH + '/img/product/23.jpeg',
      desc: 'retro... Cras purus purus, cursus ac tortor ac, mollis tincidunt elit. Aliquam vitae convallis metus. Ut sem dolor, rhoncus id sapien id, vulputate semper leo. Morbi sodales diam ac urna vestibulum, non dictum sem luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      price: 4350,
      gender: 0,
      type: 1
    },
    {
      id: 24,
      title: 'Little cute',
      img: process.env.VUE_APP_PATH + '/img/product/24.jpeg',
      desc: 'Macolopa and pancals. Cras purus purus, cursus ac tortor ac, mollis tincidunt elit. Aliquam vitae convallis metus. Ut sem dolor, rhoncus id sapien id, vulputate semper leo. Morbi sodales diam ac urna vestibulum, non dictum sem luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      price: 7350,
      gender: 0,
      type: 2
    },
    {
      id: 25,
      title: 'Okapo nino',
      img: process.env.VUE_APP_PATH + '/img/product/25.jpeg',
      desc: 'Hiking partner. Suspendisse et neque quis quam porta mattis eu sed diam. Sed ac leo vitae ipsum feugiat dapibus vitae et elit. Aenean blandit vestibulum tincidunt. Mauris fringilla molestie luctus. Sed et turpis in diam pharetra maximus. Sed felis quam, gravida sed tempor eu, iaculis quis elit. Ut lacinia mauris sem, porta egestas ante ultrices vulputate.',
      price: 8200,
      gender: 2,
      type: 2
    },
    {
      id: 26,
      title: 'Okapo relaten',
      img: process.env.VUE_APP_PATH + '/img/product/26.jpeg',
      desc: 'Water wander. Aliquam faucibus ultrices libero, pretium scelerisque leo malesuada eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce malesuada, dui in sollicitudin suscipit, leo metus consectetur purus, cursus auctor augue augue ac massa.',
      price: 10200,
      gender: 2,
      type: 2
    },
    {
      id: 27,
      title: 'Okapo city',
      img: process.env.VUE_APP_PATH + '/img/product/27.jpeg',
      desc: 'In the city, in the back. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      price: 6500,
      gender: 1,
      type: 2
    },
    {
      id: 28,
      title: 'reloface',
      img: process.env.VUE_APP_PATH + '/img/product/28.jpeg',
      desc: 'I really know that. Aliquam faucibus ultrices libero, pretium scelerisque leo malesuada eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce malesuada, dui in sollicitudin suscipit, leo metus consectetur purus, cursus auctor augue augue ac massa.',
      price: 5700,
      gender: 2,
      type: 2
    },
    {
      id: 29,
      title: 'Enpos',
      img: process.env.VUE_APP_PATH + '/img/product/29.jpeg',
      desc: 'Cahrminer. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
      price: 1700,
      gender: 0,
      type: 0
    },
    {
      id: 30,
      title: 'Copas S',
      img: process.env.VUE_APP_PATH + '/img/product/30.jpeg',
      desc: 'reborn. Aliquam faucibus ultrices libero, pretium scelerisque leo malesuada eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce malesuada, dui in sollicitudin suscipit, leo metus consectetur purus, cursus auctor augue augue ac massa.',
      price: 590,
      gender: 0,
      type: 0
    },
    {
      id: 31,
      title: 'Tarosi',
      img: process.env.VUE_APP_PATH + '/img/product/31.jpeg',
      desc: 'Reflection and passing. Cras purus purus, cursus ac tortor ac, mollis tincidunt elit. Aliquam vitae convallis metus. Ut sem dolor, rhoncus id sapien id, vulputate semper leo. Morbi sodales diam ac urna vestibulum, non dictum sem luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      price: 3850,
      gender: 0,
      type: 2
    },
    {
      id: 32,
      title: 'rainfoco',
      img: process.env.VUE_APP_PATH + '/img/product/32.jpeg',
      desc: 'Can able be. Cras purus purus, cursus ac tortor ac, mollis tincidunt elit. Aliquam vitae convallis metus. Ut sem dolor, rhoncus id sapien id, vulputate semper leo. Morbi sodales diam ac urna vestibulum, non dictum sem luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      price: 4920,
      gender: 2,
      type: 2
    },
    {
      id: 33,
      title: 'Osfaco',
      img: process.env.VUE_APP_PATH + '/img/product/33.jpeg',
      desc: 'City row. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      price: 7690,
      gender: 1,
      type: 0
    },
    {
      id: 34,
      title: 'BaNana',
      img: process.env.VUE_APP_PATH + '/img/product/34.jpeg',
      desc: 'Laking. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      price: 13500,
      gender: 2,
      type: 2
    },
    {
      id: 35,
      title: 'Pointer',
      img: process.env.VUE_APP_PATH + '/img/product/35.jpeg',
      desc: 'Mama (:;)',
      price: 1250,
      gender: 0,
      type: 0
    },
    {
      id: 36,
      title: 'Pacos w25',
      img: process.env.VUE_APP_PATH + '/img/product/36.jpeg',
      desc: 'lofathion naca. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
      price: 5500,
      gender: 0,
      type: 0
    },
    {
      id: 37,
      title: 'Hamerce',
      img: process.env.VUE_APP_PATH + '/img/product/37.jpeg',
      desc: 'A little like. Suspendisse et neque quis quam porta mattis eu sed diam. Sed ac leo vitae ipsum feugiat dapibus vitae et elit. Aenean blandit vestibulum tincidunt. Mauris fringilla molestie luctus. Sed et turpis in diam pharetra maximus. Sed felis quam, gravida sed tempor eu, iaculis quis elit. Ut lacinia mauris sem, porta egestas ante ultrices vulputate.',
      price: 55000,
      gender: 0,
      type: 2
    },
    {
      id: 38,
      title: 'Okapo Pro',
      img: process.env.VUE_APP_PATH + '/img/product/38.jpeg',
      desc: 'Top, unstoppable. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      price: 13650,
      gender: 2,
      type: 2
    },
    {
      id: 39,
      title: 'Sheep Clothing',
      img: process.env.VUE_APP_PATH + '/img/product/48.jpeg',
      desc: 'Lorem Ipsumorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unkno is simply dummy text of the printing and typesetting industry. Lgalley of type atium scelerisque leo malesuada eget. Orci varius natoqu, survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      price: 3500,
      gender: 2,
      type: 0
    },
    {
      id: 40,
      title: 'Nuik EN0',
      img: process.env.VUE_APP_PATH + '/img/product/40.jpeg',
      desc: 'For running king. Aliquam faucibus ultrices libero, pretium scelerisque leo malesuada eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce malesuada, dui in sollicitudin suscipit, leo metus consectetur purus, cursus auctor augue augue ac massa.',
      price: 7650,
      gender: 2,
      type: 1
    },
    {
      id: 41,
      title: 'Retro nofa',
      img: process.env.VUE_APP_PATH + '/img/product/41.jpeg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      price: 13500,
      gender: 1,
      type: 2
    },
    {
      id: 42,
      title: 'Kath Perna',
      img: process.env.VUE_APP_PATH + '/img/product/42.jpeg',
      desc: 'Tom Porty. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
      price: 4280,
      gender: 0,
      type: 1
    },
    {
      id: 43,
      title: 'Verdon',
      img: process.env.VUE_APP_PATH + '/img/product/43.jpeg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      price: 7260,
      gender: 0,
      type: 0
    },
    {
      id: 44,
      title: 'Wendering H12',
      img: process.env.VUE_APP_PATH + '/img/product/44.jpeg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      price: 3560,
      gender: 0,
      type: 1
    },
    {
      id: 45,
      title: 'Adidos',
      img: process.env.VUE_APP_PATH + '/img/product/45.jpeg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      price: 4580,
      gender: 0,
      type: 1
    },
    {
      id: 46,
      title: 'Feeling norsa',
      img: process.env.VUE_APP_PATH + '/img/product/46.jpeg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      price: 3530,
      gender: 0,
      type: 0
    },
    {
      id: 47,
      title: 'Minati Coca',
      img: process.env.VUE_APP_PATH + '/img/product/47.jpeg',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
      price: 32690,
      gender: 0,
      type: 0
    },
    {
      id: 48,
      title: 'Blue thinker',
      img: process.env.VUE_APP_PATH + '/img/product/39.jpeg',
      desc: 'Malaco and Uta. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
      price: 2850,
      gender: 0,
      type: 0
    }
  ]
}

const getters = {
  filteredPro: (state, getters, rootState) => (param) => {
    const { group, type } = param
    let a
    if (group === 'all') a = state.list
    else if (group === 'women') a = state.list.filter(i => i.gender === 0 || i.gender === 2)
    else if (group === 'men') a = state.list.filter(i => i.gender === 1 || i.gender === 2)

    if (type === 'clothing') a = a.filter(i => i.type === 0)
    else if (type === 'shoes') a = a.filter(i => i.type === 1)
    else if (type === 'bag') a = a.filter(i => i.type === 2)
    return a
  },
  getProInfo: (state) => (id) => {
    return state.list.filter(i => i.id === id)[0]
  }
}

const mutations = {
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
