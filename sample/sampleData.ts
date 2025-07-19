import { User } from "@/constants/types";

export const SampleUser: User = {
  userId: 0,
  name: "",
  sex: "male",
  age: 0,
  weight: 0,
  height: 0,
  bmi: 0,
  bodyFat: 0,
  routines: [
    {
      id: 0,
      title: "WooYeah",
      data: [
        {
          exercises: [
            {
              id: 0,
              target: "reps",
              name: "Squat",
              equipment: "barbell",
              muscles: []
            },
            {
              id: 1,
              target: "reps",
              name: "Deadlift",
              equipment: "barbell",
              muscles: []
            },
          ],
          day: 1
        },
        {
          exercises: [
            {
              id: 2,
              target: "reps",
              name: "Bench Press",
              equipment: "barbell",
              muscles: []
            }
          ],
          day: 2
        }
      ],
      length: 0
    },
    {
      id: 1,
      title: "WooYeah2",
      data: [
        {
          exercises: [
            {
              id: 0,
              target: "reps",
              name: "Squat",
              equipment: "barbell",
              muscles: []
            },
            {
              id: 1,
              target: "reps",
              name: "Deadlift",
              equipment: "barbell",
              muscles: []
            },
          ],
          day: 1
        },
        {
          exercises: [
            {
              id: 2,
              target: "reps",
              name: "Bench Press",
              equipment: "barbell",
              muscles: []
            }
          ],
          day: 2
        }
      ],
      length: 0
    },
  ]
}

