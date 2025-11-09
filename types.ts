// src/types.ts

export interface Task {
  id: string;                     // ID único de la tarea (ej: "Académico-Hacer deberes")
  name: string;                   // Nombre de la tarea
  points: number;                 // Puntos que otorga al completarla
  penalty: number;                // Puntos que resta si se penaliza
  category: string;               // Categoría de la tarea (ej: "Académico")
  status: 'pending' | 'completed' | 'penalized'; // Estado actual de la tarea
}
