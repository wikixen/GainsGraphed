export interface User {
  userId: number;
  name: string;
  sex: "male" | "female";
  age: number;
  weight: number;
  height: number;
  bmi: number;
  bodyFat: number;
  routines: Routine[];
}

export interface Routine {
  id: number;
  title: string;
  data: {
    exercises: Exercise[];
    day: number;
  }[],
  length: number;
  date?: Date;
}

export interface Exercise {
  id: number;
  target: "reps" | "time";
  name: string;
  equipment:
    | "barbell"
    | "dumbbell"
    | "kettlebell"
    | "machine"
    | "bodyweight"
    | "cardio"
    | "smith machine"
    | "cable"
    | "ez bar"
    | (string & {});
  muscles: Array<
    | "chest"
    | "front delts"
    | "mid delts"
    | "rear delts"
    | "biceps"
    | "triceps"
    | "forearms"
    | "lats"
    | "upper back"
    | "lower back"
    | "neck"
    | "abs"
    | "glutes"
    | "hamstrings"
    | "quads"
    | "abductors"
    | "adductors"
    | "calves"
    | "olympic"
    | "full body"
    | (string & {})
  >;
}

