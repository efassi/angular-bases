import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input()
public characterList : Character[] = [{
  name:'Trunks',
  power: 10
}]

@Output()
public eventDeleteCharacter: EventEmitter<number> = new EventEmitter();

@Output()
public eventDeleteCharacterById: EventEmitter<string> = new EventEmitter();

public onDeleteCharacter(index:number): void{
    console.log({index})
    this.eventDeleteCharacter.emit(index);
}

public onDeleteCharacterById(id:any): void{
  console.log({id})
  this.eventDeleteCharacterById.emit(id);
}

}
