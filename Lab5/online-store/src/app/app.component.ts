import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { CommonModule } from "@angular/common";
import { ProductItemComponent } from "./product-item/product-item.component";

export interface Product {
  name: string;
  description: string;
  rating: number;
  image: string;
  link: string;
  likes: number;
}

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    ProductListComponent,
    CommonModule,
    ProductItemComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "online-store";

  selectedCategory: string | undefined;

  products: { [key: string]: Product[] } = {
    Notebooks: [
      {
        name: "ThundeRobot 911 X Wild Hunter G2 Pro 15. / 16 Гб / SSD 512 Гб",
        description: "Игровой ноутбук",
        rating: 4.8,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=preview-large",
        link: "https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000",
        likes: 0,
      },
      {
        name: "Lenovo IdeaPad 3 15.6 / 4 Гб / SSD 256 Гб / Без ОС / 15IGL05 /",
        description: "Офисный ноутбук",
        rating: 5,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=preview-large",
        link: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000",
        likes: 0,
      },
      {
        name: "Apple MacBook Air 13 2022 13.6 / 8 Гб / SSD 256 Гб / macOS /",
        description: "Макбук",
        rating: 5,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=preview-large",
        link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000",
        likes: 0,
      },
    ],

    Keyboards: [
      {
        name: "AULA F75 белый",
        description: "Клавиатура",
        rating: 5,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=preview-large",
        link: "https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000",
        likes: 0,
      },
      {
        name: "Ajazz AK820 черный",
        description: "Клавиатура",
        rating: 4.8,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/p3f/p76/24839378.jpg?format=preview-large",
        link: "https://kaspi.kz/shop/p/ajazz-ak820-chernyi-120925482/?c=750000000",
        likes: 0,
      },
      {
        name: "X-Game XK-100UB черный",
        description: "Клавиатура",
        rating: 4.9,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/pe6/p77/24880216.jpg?format=preview-large",
        link: "https://kaspi.kz/shop/p/x-game-xk-100ub-chernyi-9200019/?c=750000000",
        likes: 0,
      },
    ],

    Mouses: [
      {
        name: "Wireless Mouse черный",
        description: "Компьтерная мышь",
        rating: 4.9,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=preview-large",
        link: "https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000",
        likes: 0,
      },
      {
        name: "Logitech G102 Lightsync черный",
        description: "Компьютерная мышь",
        rating: 4.8,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=preview-large",
        link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
        likes: 0,
      },
    ],

    "Vacuum Cleaners": [
      {
        name: "Пылесос Deerma DX700",
        description: "Белый",
        rating: 5,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB",
        likes: 0,
      },
      {
        name: "Пылесос Deerma DX700S",
        description: "Серый",
        rating: 4.9,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/hd7/h74/63950404878366.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/deerma-dx700s-seryi-100680527/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB",
        likes: 0,
      },
      {
        name: "Пылесос Deerma DX115C",
        description: "Черный",
        rating: 4.8,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB",
        likes: 0,
      },
      {
        name: "Пылесос Samsung VCC4520S36",
        description: "Синий",
        rating: 4.9,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/h92/h53/63761733746718.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB",
        likes: 0,
      },
      {
        name: "Пылесос Xiaomi Vacuum Cleaner G20 Lite",
        description: "Белый",
        rating: 5,
        image:
          "https://resources.cdn-kaspi.kz/img/m/p/pd8/pbe/6399976.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/xiaomi-vacuum-cleaner-g20-lite-belyi-119675547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB",
        likes: 0,
      },
    ],
  };

  assignCategory(category: string) {
    this.selectedCategory = category;
  }
}
