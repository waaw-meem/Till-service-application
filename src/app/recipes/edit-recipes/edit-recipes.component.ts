import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.css']
})
export class EditRecipesComponent implements OnInit {
  id:number
  editMode = false
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params) =>{
        this.id = +params['id'];
        this.editMode = params['id'] != null
        console.log(this.editMode)
      }
    )
  }

}
