import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousinglocationComponent } from "../housinglocation/housinglocation.component";
import { Housinglocation } from "../housinglocation";
import { HousingService } from "../housing.service";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousinglocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholders="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-housinglocation
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housinglocation>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];
  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: Housinglocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }
  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
