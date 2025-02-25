import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { User } from 'src/app/client/interfaces/user-request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public counter = signal(1);

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });


  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });


  constructor() {
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.counter.update((current) => current + 1);
    // }, 1000);
  }

  onFiledUpdated(field: keyof User, value: string) {
    // this.user.update((currentValue) => ({
    //   ...currentValue,
    //   [field]: value
    // }) )

    this.user.update((current) => {
      //necesita de una instancia. Si modifica directamente el valor actual no detecta en el effect
      const updatedUser = { ...current };
      switch (field) {
        case 'email':
          updatedUser.email = value;
          break;
        case 'first_name':
          updatedUser.first_name = value;
          break;
        case 'last_name':
          updatedUser.last_name = value;
          break;
      }

      return updatedUser;
    });
  }

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
