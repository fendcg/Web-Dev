import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { style } from "@angular/animations";

@Component({
  selector: "app-products",
  imports: [CommonModule],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.css",
})
export class ProductsComponent {
  products = [
    {
      name: "ThundeRobot 911 X Wild Hunter G2 Pro 15. / 16 Гб / SSD 512 Гб",
      description: "Игровой ноутбук",
      rating: 4.8,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000",
    },
    {
      name: "Lenovo IdeaPad 3 15.6 / 4 Гб / SSD 256 Гб / Без ОС / 15IGL05 /",
      description: "Офисный ноутбук",
      rating: 5,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000",
    },
    {
      name: "Apple MacBook Air 13 2022 13.6 / 8 Гб / SSD 256 Гб / macOS /",
      description: "Макбук",
      rating: 5,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000",
    },
    {
      name: "Realme Note 50 3 ГБ",
      description: "Cмартфон, 64 ГБ, черный",
      rating: 5,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000",
    },
    {
      name: "Samsung Galaxy A55 5G 8 ГБ",
      description: "Cмартфон, 256 ГБ, темно-синий",
      rating: 4.9,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000",
    },

    {
      name: "AULA F75 белый",
      description: "Клавиатура",
      rating: 5,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000",
    },
    {
      name: "Ajazz AK820 черный",
      description: "Клавиатура",
      rating: 4.8,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/p3f/p76/24839378.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/ajazz-ak820-chernyi-120925482/?c=750000000",
    },
    {
      name: "X-Game XK-100UB черный",
      description: "Клавиатура",
      rating: 4.9,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/pe6/p77/24880216.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/x-game-xk-100ub-chernyi-9200019/?c=750000000",
    },
    {
      name: "Wireless Mouse черный",
      description: "Компьтерная мышь",
      rating: 4.9,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000",
    },
    {
      name: "Logitech G102 Lightsync черный",
      description: "Компьютерная мышь",
      rating: 4.8,
      image:
        "https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=preview-large",
      link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    },
  ];

  shareOnWhatsApp(product: any) {
    const message = encodeURIComponent(
      `Check this out: ${product.name} - ${product.link}`
    );
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  }

  shareOnTelegram(product: any) {
    const message = encodeURIComponent(
      `Check this out: ${product.name} - ${product.link}`
    );
    const telegramUrl = `https://t.me/share/url?url=${product.link}&text=${message}`;
    window.open(telegramUrl, "_blank");
  }

  protected readonly style = style;
}
