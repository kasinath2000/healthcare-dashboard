export const anatomicalStatus = [
  { part: "Heart", status: "Healthy", color: "green-500" },
  { part: "Lungs", status: "Needs Attention", color: "red-500", date: "26 Oct 2021" },
  { part: "Teeth", status: "Healthy", color: "green-400", date: "26 Oct 2021" },
  { part: "Bone", status: "Needs Attention", color: "red-400", date: "26 Oct 2021" }
];



const healthData = [
  {
    title: 'Lungs',
    date: '26 Oct 2021',
    status: 'Critical',
    color: 'red',
    img: 'src/assets/images/Lungs.png',
    progress: 85
  },
  {
    title: 'Teeth',
    date: '26 Oct 2021',
    status: 'Good',
    color: 'green',
    img: 'src/assets/images/Teeth.png',
    progress: 85
  },
  {
    title: 'Bone',
    date: '26 Oct 2021',
    status: 'Warning',
    color: 'orange',
    img: 'src/assets/images/Bone.png',
    progress: 85
  },
];

export default healthData;
