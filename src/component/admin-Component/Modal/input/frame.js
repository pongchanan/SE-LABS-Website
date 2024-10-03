//u = textArea
//research-free = research with null key of LabID
//global = global news/events with no relation with any labs/research

export const editFrame = {
  // editNews: {
  //   //NewsID
  //   ImageHigh: "file",
  //   NewsName: "text",
  //   Body: "u",
  //   Date: "text",
  //   //Posted:bool
  //   LabID: "text",
  //   ProjectID: "text",
  //   PublicationID: "text",
  // },
  // editEvents: {
  //   //EventID
  //   ImageHigh: "file",
  //   EventName: "text",
  //   Body: "u",
  //   Location: "text",
  //   DateStart: "text",
  //   DateEnd: "text",
  //   //Posted:bool
  //   LabID: "text",
  //   ProjectID: "text",
  //   PublicationID: "text",
  // },
  editLab: { LabName: "text", ImageHigh: "file", Body: "u" },
  editResearch: {
    lead_researcher: ["research-free"],
    admin: ["research-free"],
    LabID: null,
    // ResearchID: "text",
    ResearchName: "text",
    ImageHigh: "file",
    Body: "u",
  },
  editPublication: {
    lead_researcher: [null],
    admin: [null],
    // PublicationID: "text",
    PublicationName: "text",
    ImageHigh: "file",
    Body: "u",
    // LabID: "text",
    PublicationLink: "text",
  },

  editPeople: { UserID: "text", Gmail: "text", FullName: "text" },
};

export const createFrame = {
  createNews: {
    //NewsID
    researcher: ["research"],
    lead_researcher: ["research-free", "research", "lab", "global"],
    admin: ["research-free", "research", "lab", "global"], //
    ImageHigh: "file",
    NewsName: "text",
    Body: "u",
    Date: "text",
    //Posted:bool
    LabID: "text", //nullable
    ProjectID: "text", //nullable
    PublicationID: "text", //nullable
  },
  createEvents: {
    //EventID
    researcher: ["research"],
    lead_researcher: ["research-free", "research", "lab", "global"],
    admin: ["research-free", "research", "lab", "global"], //
    ImageHigh: "file", //nullable
    EventName: "text",
    Body: "u",
    Location: "text",
    DateStart: "text", //nullable
    DateEnd: "text", //nullable
    //Posted:bool
    LabID: "text", //nullable
    ProjectID: "text", //nullable
    PublicationID: "text", //nullable
  },

  createLab: {
    admin: [null], //
    LabName: "text",
    ImageHigh: "file",
    Body: "u",
  },
  createResearch: {
    lead_researcher: ["research-free", "lab"],
    admin: ["research-free", "lab"],
    // ResearchID: "text",
    ResearchName: "text",
    ImageHigh: "file",
    Body: "u",
    LabID: "text",
    researcher: [null],
  },
  createPublication: {
    // PublicationID: "text",
    PublicationName: "text",
    ImageHigh: "file",
    Body: "u",
    LabID: "text", //nullable
    PublicationLink: "text",
  },
  createPeople: {
    lead_researcher: ["research-free", "research", "lab", "role"],
    admin: ["research-free", "research", "lab", "role"],
    UserID: "text",
    Gmail: "text",
    FullName: "text",
  },
};

export const submitFrame = {
  submitNews: {
    //NewsID
    researcher: ["research"],
    lead_researcher: ["research-free", "research", "lab", "global"],
    admin: ["research-free", "research", "lab", "global"], //
    ImageHigh: "file",
    NewsName: "text",
    Body: "u",
    Date: "text",
    //Posted:bool
    LabID: "text", //nullable
    ProjectID: "text", //nullable
    PublicationID: "text", //nullable
  },
  submitEvents: {
    //EventID
    researcher: ["research"],
    lead_researcher: ["research-free", "research", "lab", "global"],
    admin: ["research-free", "research", "lab", "global"], //
    ImageHigh: "file", //nullable
    EventName: "text",
    Body: "u",
    Location: "text",
    DateStart: "text", //nullable
    DateEnd: "text", //nullable
    //Posted:bool
    LabID: "text", //nullable
    ProjectID: "text", //nullable
    PublicationID: "text", //nullable
  },

  submitLab: {
    admin: [null], //
    LabName: "text",
    ImageHigh: "file",
    Body: "u",
  },
  createResearch: {
    lead_researcher: ["research-free", "lab"],
    admin: ["research-free", "lab"],
    // ResearchID: "text",
    ResearchName: "text",
    ImageHigh: "file",
    Body: "u",
    LabID: "text",
    researcher: [null],
  },
  submitPublication: {
    // PublicationID: "text",
    PublicationName: "text",
    ImageHigh: "file",
    Body: "u",
    LabID: "text", //nullable
    PublicationLink: "text",
  },
  submitPeople: { UserID: "text", Gmail: "text", FullName: "text" },
};
