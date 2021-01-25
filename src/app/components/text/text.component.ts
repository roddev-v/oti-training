import {Component} from '@angular/core';

// obiect => {}
// lista => []

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  placeholder = 'Otilia\'s placeholder';

  printInConsole() {
    console.log(this.placeholder);
  }

  onChanged() {
    console.log('Am schimbat ceva');
  }
}


/**
 * [] -> property binging (1-way)
 * () -> event binding
 * [(ngModel)] -> 2-way
 */
