import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush, // This tells Angular:
  // “Only run change detection for this component if one of the following happens:
  // An @Input() reference changes,
  // An event happens inside the component (click, input, etc.),
  // You explicitly call markForCheck() or detectChanges() (manually trigger detection).”
  // Works only with immutable
})
export class MessagesComponent {
  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }
}
