export const dataPlants = [
  {
    id: 1,
    name: "Rose",
    description: "This is a description for Rose.",
  },
  {
    id: 2,
    name: "Tulip",
    description: "This is a description for Tulip.",
  },
  {
    id: 3,
    name: "Orchid",
    description: "This is a description for Orchid.",
  },
  {
    id: 4,
    name: "Sunflower",
    description: "This is a description for Sunflower.",
  },
  {
    id: 5,
    name: "Cactus",
    description: "This is a description for Cactus.",
  },
];

export const dataExpenses = [
  {
    id: 1,
    plantId: 1,
    name: "Expense 1",
    cost: 121,
  },
  {
    id: 2,
    plantId: 1,
    name: "Expense 2",
    cost: 439,
  },
];

export const dataIncome = [
  {
    id: 1,
    plantId: 1,
    name: "Income 1",
    income: 2310,
  },
  {
    id: 2,
    plantId: 1,
    name: "Income 2",
    income: 1200,
  },
];

export const dataTasks = [
  {
    id: 1,
    plantId: 1,
    name: "Task 1",
    description: "This is a description for Task 1.",
  },
  {
    id: 2,
    plantId: 1,
    name: "Task 2",
    description: "This is another description for Task 2.",
  },
  {
    id: 3,
    plantId: 1,
    name: "Task 3",
    description: "This is a description for Task 3.",
  },
  {
    id: 4,
    plantId: 1,
    name: "Task 4",
    description: "This is another description for Task 4.",
  },
  {
    id: 5,
    plantId: 2,
    name: "Task 5",
    description: "This is a description for Task 5.",
  },
  {
    id: 6,
    plantId: 2,
    name: "Task 6",
    description: "This is another description for Task 6.",
  },
  {
    id: 7,
    plantId: 3,
    name: "Task 7",
    description: "This is a description for Task 7.",
  },
  {
    id: 8,
    plantId: 4,
    name: "Task 8",
    description: "This is another description for Task 8.",
  },
  {
    id: 9,
    plantId: 4,
    name: "Task 9",
    description: "This is a description for Task 9.",
  },
  {
    id: 10,
    plantId: 4,
    name: "Task 10",
    description: "This is another description for Task 10.",
  },
];

export const dataChemicals = [
  {
    id: 1,
    plantId: 1,
    name: "Fert 1",
    type: "fertilizer",
  },
  {
    id: 2,
    plantId: 1,
    name: "Fert 2",
    type: "fertilizer",
  },
  {
    id: 3,
    plantId: 2,
    name: "Pest 3",
    type: "pesticide",
  },
  {
    id: 4,
    plantId: 3,
    name: "Fert 4",
    type: "fertilizer",
  },
  {
    id: 5,
    plantId: 3,
    name: "Pest 5",
    type: "pesticide",
  },
  {
    id: 6,
    plantId: 4,
    name: "Fert 4",
    type: "fertilizer",
  },
  {
    id: 7,
    plantId: 4,
    name: "Pest 5",
    type: "pesticide",
  },
  {
    id: 8,
    plantId: 4,
    name: "Fert 5",
    type: "fertilizer",
  },
  {
    id: 9,
    plantId: 5,
    name: "Pest 6",
    type: "pesticide",
  },
];

export const dataEvents = [
  {
    id: 1,
    plantId: 1,
    name: "Event 1",
    date: "Fri Jan 05 2022".substring(4),
    damage: "Flood",
    description: "This is a description for the event 1.",
  },
  {
    id: 2,
    plantId: 1,
    name: "Event 2",
    date: "Fri Jan 05 2022".substring(4),
    damage: "Flood",
    description: "This is a description for the event 1.",
  },
  {
    id: 3,
    plantId: 1,
    name: "Event 3",
    date: "Fri Jan 05 2022".substring(4),
    damage: "Flood",
    description: "This is a description for the event 1.",
  },
  {
    id: 4,
    plantId: 1,
    name: "Event 4",
    date: "Fri Jan 05 2022".substring(4),
    damage: "Flood",
    description: "This is a description for the event 1.",
  },
  {
    id: 5,
    plantId: 2,
    name: "Event 5",
    date: "Fri Jan 05 2022".substring(4),
    damage: "Flood",
    description: "This is a description for the event 1.",
  },
  {
    id: 6,
    plantId: 2,
    name: "Event 6",
    date: "Fri Jan 05 2022".substring(4),
    damage: "Flood",
    description: "This is a description for the event 1.",
  },
];

// When saving do value.substring(4) to remove the days name
export const dataIrrigations = [
  {
    id: 1,
    plantId: 1,
    date: "Fri Jan 05 2022".substring(4),
    name: "Fri Jan 05 2022".substring(4),
    hours: 2,
    cost: 34,
  },
  {
    id: 2,
    plantId: 1,
    date: "Tue Mar 14 2022".substring(4),
    name: "Tue Mar 14 2022".substring(4),
    hours: 3,
    cost: 42,
  },
  {
    id: 3,
    plantId: 2,
    date: "Sat Apr 22 2022".substring(4),
    name: "Sat Apr 22 2022".substring(4),
    hours: 1,
    cost: 20,
  },
  {
    id: 4,
    plantId: 2,
    date: "Wed Jun 07 2022".substring(4),
    name: "Wed Jun 07 2022".substring(4),
    hours: 4,
    cost: 52,
  },
  {
    id: 5,
    plantId: 2,
    date: "Sun Aug 20 2022".substring(4),
    name: "Sun Aug 20 2022".substring(4),
    hours: 2,
    cost: 30,
  },
  {
    id: 6,
    plantId: 3,
    date: "Thu Oct 12 2022".substring(4),
    name: "Thu Oct 12 2022".substring(4),
    hours: 2,
    cost: 38,
  },
  {
    id: 7,
    plantId: 3,
    date: "Sun Dec 24 2022".substring(4),
    name: "Sun Dec 24 2022".substring(4),
    hours: 1,
    cost: 18,
  },
  {
    id: 8,
    plantId: 4,
    date: "Wed Feb 08 2023".substring(4),
    name: "Wed Feb 08 2023".substring(4),
    hours: 3,
    cost: 45,
  },
  {
    id: 9,
    plantId: 5,
    date: "Sat Apr 22 2023".substring(4),
    name: "Sat Apr 22 2023".substring(4),
    hours: 2,
    cost: 34,
  },
  {
    id: 10,
    plantId: 5,
    date: "Tue Jun 27 2023".substring(4),
    name: "Tue Jun 27 2023".substring(4),
    hours: 2,
    cost: 36,
  },
];