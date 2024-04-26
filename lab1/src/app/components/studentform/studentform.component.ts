import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './studentform.component.html',
  styleUrl: './studentform.component.css'
})
export class StudentformComponent {

  name: string = '';
  age: number = NaN;
  students: { name: string, age: number }[] = [];

  addStudent(): void {
    // Check for duplicate data
    if (this.students.some(student => student.name === this.name && student.age === this.age)) {
      alert('Student already exists!');
      return;
    }

    // Add student to array
    this.students.push({ name: this.name, age: this.age });

    // Clear inputs
    this.name = '';
    this.age = 0;
  }

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
  }

}
