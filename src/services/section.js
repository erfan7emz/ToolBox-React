export const section = [
    { _id: "1", name: "Social Media" },
    { _id: "2", name: "Task Management" },
    { _id: "3", name: "Development" },
    { _id: "4", name: "Brand Management" },
    { _id: "5", name: "Payroll" },
  ];
  
  export function getSection() {
    return section.filter(s => s);
  }