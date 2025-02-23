import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categories=['Телефоны','Мебель','Красота','Компьютер'];
  selected='Телефоны'
  products = [
    {
      id:1,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb серебристый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета',
      imageUrls: ['./assets/sixth.jpeg'],

      rating: 4.0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000'
    },
    {
      id:2,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      imageUrls: ['./assets/second.jpeg'],
      rating: 4.5,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      id:3,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
      imageUrls: ['./assets/third.jpeg'],
      rating: 4.5,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      id:4,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      imageUrls: ['assets/fourth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      
      id:5,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 13 128Gb синий',
      description: 'Apple разработали совершенно новую схему расположения камер и развернули объективы',
      imageUrls: ['assets/fiftth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000'
    },
    {
      
      id:6,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 13 128Gb белый',
      description: 'Новая сверхширокоугольная камера видит больше деталей в темных областях снимка.',
      imageUrls: ['assets/sixth.jpeg'],
      rating: 4.9,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
    },
    {
      id:7,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 16 Pro 128Gb серебристый',
      description: ' Это флагманская модель линейки iPhone которая подчеркивает ваши неограниченные возможности.',
      imageUrls: ['assets/fiftth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000'
    },
    {
      id:8,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 15 128Gb голубой',
      description: 'Смартфон получил динамический остров, на который выводятся уведомления.',
      imageUrls: ['assets/tenth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000'
    },
    {
      id:9,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 15 Pro 128Gb серый',
      description: 'Титановый корпус стал одновременно и прочнее, и легче корпуса из стали.',
      imageUrls: ['assets/ninth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?c=750000000'
    },
    {
      id:10,
      category:'Телефоны',
      name: 'Смартфон Apple iPhone 16 Pro 128Gb белый',
      description: 'Это флагманская модель линейки iPhone которая подчеркивает ваши неограниченные возможности.',
      imageUrls: ['assets/tenth.jpeg'],
      rating: 4.8,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-belyi-123888540/?c=750000000'
    },
    {
      id:11,
      category:'Мебель',
      name: 'Распашной шкаф IMPERIAL Алёна 3Д',
      description: 'Шкаф из натурального дерева с 3D-изображение',
      imageUrls:['./assets/mebel1.jpg'],
      rating: 4.6,
      likes:0,
      link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-imperial-aljona-3d-120-2x190-5h46-6-sm-belyi-bezhevyi-104713427/?c=750000000',



    },
    {
      id:12,
      category:'Мебель',
      name: 'Распашной шкаф Fourdoor с зеркалом',
      description: 'Шкаф из натурального дерева с зеркалом',
      imageUrls: ['./assets/mebel2.jpg'],
      rating: 4.6,
      likes:0,
      link:'https://kaspi.kz/shop/p/raspashnoi-shkaf-fourdoor-s-zerkalom-160x200h47-sm-belyi-108174703/?c=750000000',


    },
    {
      id:13,
      category:'Мебель',
      name:'Sofabed.kz диван',
      description: 'Диван из натурального дерева',
      imageUrls: ['./assets/mebel3.jpeg'],
      rating: 4.6,
      likes:0,
      link:'https://kaspi.kz/shop/p/sofabed-kz-divan-uglovoi-648153-obivka-veljur-75h290h130-sm-seryi-106832599/?c=750000000',


    },
    {
      id:14,
      category:'Мебель',
      name:'ТВ-тумба напольная Modern New Design TT',
      description: 'ТВ-тумба из натурального дерева',
      imageUrls: ['./assets/mebel4.jpg'],
      rating: 4.6,
      likes:0,
      link:'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000',


    },
    {
      id:15,
      category:'Красота',
      name:'Farmstay сыворотка All-In-One Collagen and Hyaluronic Acid Ampoule Anti-Wrinkle Whitening для лица',
      description: 'Сыворотка для лица',
      imageUrls: ['./assets/krosota1.jpeg'],
      rating: 4.7,
      likes:0,
      link:'https://kaspi.kz/shop/p/farmstay-syvorotka-all-in-one-collagen-and-hyaluronic-acid-ampoule-anti-wrinkle-whitening-dlja-litsa-250-ml-100028087/?c=750000000',

    },
    {
      id:16,
      category:'Красота',
      name:'DMND спонж скошенный, спонж капля полиуретан 2 шт',
      description: 'Спонж для лица',
      imageUrls: ['./assets/krosota2.jpg'],
      rating: 4.7,
      likes:0,
      link:'https://kaspi.kz/shop/p/dmnd-sponzh-skoshennyi-sponzh-kaplja-poliuretan-2-sht-104557208/?c=750000000',



    },
    {
      id:17,
      category:'Красота',
      name:'AXIS-Y сыворотка Dark Spot Correcting Glow для лица 50 мл',
      description: 'Сыворотка для лица',
      imageUrls: ['./assets/krosota3.jpg'],
      rating: 4.7,
      likes:0,
      link:'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=750000000',
    },
    {
      id:18,
      category:'Компьютер',
      name:'Системный блок GameBox 183556 черный',
      description: 'Системный блок',
      imageUrls: ['./assets/pc1.jpg'],
      rating: 4.9,
      likes:0,
      link:'https://kaspi.kz/shop/p/gamebox-183556-chernyi-114487722/?c=750000000',


    },
    {
      id:19,
      category:'Компьютер',
      name:'Принтер Canon imagePROGRAF TZ-30000',
      description: 'Принтер',
      imageUrls: ['./assets/pc2.jpg'],
      rating: 4.9,
      likes:0,
      links:'https://kaspi.kz/shop/p/printer-canon-imageprograf-tz-30000-134238144/?c=750000000',

    },
    {
      id:20,
      category:'Компьютер',
      name:'Монитор ThundeRobot DF27C240L черный',
      description: 'Монитор',
      imageUrls: ['./assets/pc3.jpg'],
      rating: 4.9,
      likes:0,
      link:'https://kaspi.kz/shop/p/printer-canon-imageprograf-tz-30000-134238144/?c=750000000',

    },



  ];
  getfilteredProducts(){

    var filtered = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].category === this.selected){
        filtered.push(this.products[i]);
      }
    } 
    return filtered;
  }

  selectCategory(event : any){
    this.selected = event?.target.value;
  }

  removeProduct(id : number){
    var newProducts = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id !== id){
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id: number) {
    
    const likedProducts: number[] = JSON.parse(localStorage.getItem('likedProducts') || '[]');
  
  
    if (likedProducts.includes(id)) {
      alert('Вы уже лайкнули этот товар!');
      return;
    }
  
   
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i].likes += 1;
        
        
        localStorage.setItem(`likes_${id}`, this.products[i].likes.toString());
  
     
        likedProducts.push(id);
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
  
        break;
      }
    }
  }
  
  ngOnInit() {
    this.products.forEach((product) => {
      const savedLikes = localStorage.getItem(`likes_${product.id}`);
      if (savedLikes) {
        product.likes = parseInt(savedLikes, 10);
      }
    });
  }
  

  shareProduct(link: string | undefined, platform: string) {
    if (!link) {
      console.error('Ошибка: ссылка отсутствует');
      return;
    }
  
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
    }
  }
  
}


