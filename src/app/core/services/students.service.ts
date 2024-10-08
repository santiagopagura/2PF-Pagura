import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsInterface } from '../../features/dashboard/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private httpClient: HttpClient) {}

  // Obtener estudiantes
  getStudents(): Observable<StudentsInterface[]> {
    return this.httpClient.get<StudentsInterface[]>(environment.apiUrl + 'students');
  }

  // Agregar nuevo estudiante
  addStudent(student: StudentsInterface): Observable<StudentsInterface> {
    return this.httpClient.post<StudentsInterface>(environment.apiUrl + 'students', student);
  }

  // Editar estudiante
  editStudent(student: StudentsInterface): Observable<StudentsInterface> {
    return this.httpClient.put<StudentsInterface>(environment.apiUrl + 'students/' + student.id, student);
  }

  // Eliminar estudiante
  deleteStudent(studentId: string): Observable<void> {
    return this.httpClient.delete<void>(environment.apiUrl + 'students/' + studentId);
  }
}
































//   addStudent(student: StudentsInterface): Observable<StudentsInterface> {
//     return this.httpClient.post<StudentsInterface>((environment.apiUrl + 'students'), student)
//   }

//   getStudents():Observable<StudentsInterface[]> {
//     return this.httpClient.get<StudentsInterface[]>(environment.apiUrl + 'students');
//   }

//   // getCourseById(id:string): Observable<CursosInterface | undefined> {
//   //   return this.getCourses().pipe(map((todosLosCursos) => todosLosCursos.find((el) => el.id === id) ))
//   // }

//   editStudentById(id: string, update: StudentsInterface) {
//     return this.httpClient.put(environment.apiUrl + 'students/' + id, update);
//   }

//   deleteStudentByID(id:string, studentName:string) {
//     return  this.httpClient.delete(environment.apiUrl + 'students/' + id);
//   }

//   // searchCoursesByName(search: string): Observable<CursosInterface[]> {
//   //   return this.getCourses().pipe(
//   //     map((todosCursos) =>
//   //       todosCursos.filter((curso) =>
//   //         curso.name.toLowerCase().includes(search.toLowerCase())
//   //       )
//   //     )
//   //   );
//   // }

//   constructor(private httpClient: HttpClient) { }
// }
