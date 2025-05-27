// export const calendarData = {
//   month: 'October 2021',
//   weekdays: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
//   days: [25, 26, 27, 28, 29, 30, 31],
//   appointments: {
//     '26': ['09:00'],
//     '28': ['11:00'],
//     '30': ['14:00'],
//     '31': ['09:00', '11:00'],
//   },
//   highlights: [
//     {
//       day: 26,
//       title: 'Dentist',
//       time: '09:00–11:00',
//       doctor: 'Dr. Cameron Williamson',
//       icon: '🦷',
//     },
//     {
//       day: 28,
//       title: 'Physiotherapy Appointment',
//       time: '11:00–12:00',
//       doctor: 'Dr. Kevin Djones',
//       icon: '💪',
//     },
//   ],
// };



export const calendarData = {
  month: 'May 2025',
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  days: Array.from({ length: 31 }, (_, i) => i + 1),
  appointments: {
    5: ['10:00 AM', '1:30 PM'],
    12: ['9:00 AM'],
    20: ['2:15 PM', '3:45 PM'],
  },
  highlights: [
    {
      title: 'Consultation',
      time: '10:00 AM - 10:30 AM',
      doctor: 'Dr. Smith',
      icon: '🩺',
    },
    {
      title: 'Dental Check',
      time: '2:00 PM - 2:30 PM',
      doctor: 'Dr. Jane',
      icon: '🦷',
    },
    {
      title: 'Physio Session',
      time: '4:00 PM - 4:45 PM',
      doctor: 'Dr. Lee',
      icon: '🏃‍♂️',
    },
    {
      title: 'Nutrition Advice',
      time: '5:30 PM - 6:00 PM',
      doctor: 'Dr. Green',
      icon: '🥗',
    },
  ],
};
