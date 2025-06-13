import { User } from "@/constants/models";

const sampleData: User = {
  userId: 0,
  name: "John Doe",
  sex: "male",
  age: 23,
  weight: 140,
  height: 60,
  bmi: 27,
  bodyFat: 32,
  diaries: [
    {
      id: 0,
      meals: [
        {
          id: 0,
          favorite: false,
          name: "",
          amount: 0,
          unit: "g",
          time: new Date(Date.now()),
          mealType: "breakfast",
          macros: {
            calories: 0,
            alcohol: 0,
            caffeine: 0,
            water: 0,
            vitamins: {
              b1: 0,
              b2: 0,
              b3: 0,
              b5: 0,
              b6: 0,
              b12: 0,
              folate: 0,
              a: 0,
              c: 0,
              d: 0,
              e: 0,
              k: 0
            },
            minerals: {
              calcium: 0,
              copper: 0,
              iron: 0,
              magnesium: 0,
              manganese: 0,
              phosphorous: 0,
              potassium: 0,
              selenium: 0,
              sodium: 0,
              zinc: 0
            },
            carbs: 0,
            lipids: 0,
            protein: 0
          }
        }
      ],
      date: new Date(Date.now()),
      complete: false,
      notes: ""
    },
    {
      id: 1,
      meals: [],
      date: new Date(Date.now()-1),
      complete: false,
      notes: ""
    }
  ],
  routines: [
    {
      id: 0,
      exercises: [
        {
          id: 0,
          target: "reps",
          name: "bench press",
          equipment: "barbell",
          muscles: "chest"
        },
        {
          id: 0,
          target: "reps",
          name: "",
          equipment: "cable",
          muscles: undefined
        }
      ]
    }
  ]
}