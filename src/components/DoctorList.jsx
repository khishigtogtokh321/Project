import DoctorCard from "./DoctorCard";

export default function DoctorList() {
  const doctors = [
    {
    name: "Ц. Батбаа",
    profession: "Мэргэжилтэн",
    branches: ["Салбар1", "Салбар2"],
    address: {
      Салбар1: "Улаанбаатар, Баянзүрх дүүрэг",
      Салбар2: "Улаанбаатар, Сүхбаатар дүүрэг"
    },
    times: {
      Салбар1: [
        "2 Oct 09:45",
        "2 Oct 10:00", 
        "10 Oct 11:30",
        "2 Oct 12:00", 
        "2 Oct 12:30", 
        "2 Oct 13:00", 

      ],
      Салбар2: ["2 Oct 14:00", "2 Oct 15:30", "10 Oct 16:00"]
    },
    description:
      "Uilcilgeenii jagsaalt",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Ц. Батбаа",
    profession: "Мэргэжилтэн",
    branches: ["Салбар1", "Салбар2"],
    address: {
      Салбар1: "Улаанбаатар, Баянзүрх дүүрэг",
      Салбар2: "Улаанбаатар, Сүхбаатар дүүрэг"
    },
    times: {
      Салбар1: ["2 Oct 09:30", "2 Oct 10:00", "10 Oct 11:30"],
      Салбар2: ["2 Oct 14:00", "2 Oct 15:30", "10 Oct 16:00"]
    },
    description:
      "Conventional doctor. My ENT practice is located in the outskirts...",
    image: "https://via.placeholder.com/150"
  },
    {
      name: "Ц. Батбаа",
      profession: "Мэргэжилтэн",
      address: "Улаан баатар Баянзүрх дүүрэг",
      branches: ["Салбар1", "Салбар2"],
      times: ["2 Oct 09:30", "2 Oct 10:00", "10 Oct 11:30"],
      description:
        "Conventional doctor. My ENT practice is located in the outskirts...",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Ц. Батбаа",
      profession: "Мэргэжилтэн",
      address: "Улаан баатар Баянзүрх дүүрэг",
      branches: ["Салбар1"],
      times: ["2 Oct 09:00", "2 Oct 10:30", "10 Oct 19:30"],
      description:
        "Conventional doctor. My ENT practice is located in the outskirts...",
      image: "https://via.placeholder.com/150"
    }
  ];

  return doctors.map((doctor, idx) => <DoctorCard key={idx} doctor={doctor} />);
}
