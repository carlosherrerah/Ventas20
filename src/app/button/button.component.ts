import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({  // Decorador
  selector: 'app-button',
  template: `
  <button class="btn btn-primary"> {{label}}</button>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// template: `<button>{{label}}</button>`
// templateUrl: './button.component.html',

export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   // console.log('Changes -> ', changes);
  }
 
  ngOnInit(): void {
    // console.log("OnInit -> ")
  }

  ngOnDestroy(): void {
    // console.log('onDestroy');

  }

  counterRender(): boolean{
    console.log("Render del button");
    return true;
    
  }
}
