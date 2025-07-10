export interface User {
  userId: number;
  name: string;
  sex: "male" | "female";
  age: number;
  weight: number;
  height: number;
  bmi: number;
  bodyFat: number;
  diaries: Diary[];
  routines: Routine[];
}

export interface Diary {
  id: number;
  meals: Food[];
  date: Date;
  complete: boolean;
  notes: string;
}

export interface Food {
  id: number;
  favorite: boolean;
  name: string;
  amount: number;
  unit: "oz" | "g" | (string & {});
  time?: Date;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  macros: {
    calories: number;
    alcohol: number;
    caffeine: number;
    water: number;
    vitamins: {
      b1: number;
      b2: number;
      b3: number;
      b5: number;
      b6: number;
      b12: number;
      folate: number;
      a: number;
      c: number;
      d: number;
      e: number;
      k: number;
    };
    minerals: {
      calcium: number;
      copper: number;
      iron: number;
      magnesium: number;
      manganese: number;
      phosphorous: number;
      potassium: number;
      selenium: number;
      sodium: number;
      zinc: number;
    };
    carbs: number | {
      fiber: number;
      starch: number;
      sugars: number;
      addedSugars: number;
      netCarbs: number;
    };
    lipids: number | {
      cholestrol: number;
      fats: number | {
        monounsaturated: number;
        polyunsaturated: number | {
          omega3: number;
          omega6: number;
        };
        saturated: number;
        monosaturated: number;
        trans: number;
      };
    };
    protein: number | {
      cystine: number;
      histidine: number;
      isoleucine: number;
      leucine: number;
      lysine: number;
      methionine: number;
      phenylalanine: number;
      threonine: number;
      tryptophan: number;
      tyrosine: number;
      valine: number;
    };
  };
}

export interface Routine {
  id: number;
  exercises: Exercise[];
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
