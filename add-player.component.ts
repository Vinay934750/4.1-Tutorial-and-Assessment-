import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
})
export class AddPlayerComponent {
  player = { name: '', age: null, position: '' };

  constructor(private playerService: PlayerService) {}

  onSubmit() {
    this.playerService.addPlayer(this.player).subscribe(() => {
      // Player added successfully
      this.player = { name: '', age: null, position: '' };
    });
  }
}
