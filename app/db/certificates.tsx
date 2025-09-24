export interface Certificate {
    id: number;
    title: string;
    provider: string;
    image: string;
    description: string;
  }
  
  export const certificates: Certificate[] = [
    {
      id: 1,
      title: "Adobe Certified Professional",
      provider: "Adobe",
      image: "/assets/images/certificates/Adobe.png",
      description: "Completion of Adobe Photoshop"
    },
    {
      id: 2,
      title: "Certified Data Management Staff",
      provider: "LPK Mentorbox Indonesia",
      image: "/assets/images/certificates/CDMS.png",
      description: "Training Data Management Staff"
    },
    {
      id: 3,
      title: "Certified Digital Marketing Practitioner",
      provider: "LPK Mentorbox Indonesia",
      image: "/assets/images/certificates/CDMP.png",
      description: "Training Digital Marketing"
    },
    {
      id: 4,
      title: "Use Generative AI for Software Development",
      provider: "IBM Skillsbuild X Hacktiv8",
      image: "/assets/images/certificates/GenerativeAI.png",
      description: "Use Generative AI for build a Software"
    },
    {
      id: 5,
      title: "IBM Granite Models for Software Development",
      provider: "IMB Skillsbuild X Hacktiv8",
      image: "/assets/images/certificates/GraniteModel.png",
      description: "Training use IBM Granite Models"
    },
  ];
  