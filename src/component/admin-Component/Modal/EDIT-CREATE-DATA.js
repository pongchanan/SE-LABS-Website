/* 1.context :null
edit
2.open modal edit -> fetch remaining data ->change body into sections->put into context -> put into form
3.change & add  (every 5 sec send data to context, if refrech can get data from context and put into form again)
4.if save temp draft -> a circular drop down btn on tl when hover will list all current drafts
  if cancel -> remove context
  if send request commit -> send post request -> keep in db
  if send commit -> send put request

create
2.open modal create
3.change & add  (every 5 sec send data to context, if refrech can get data from context and put into form again)
4.if save temp draft -> a circular drop down btn on tl when hover will list all current drafts
  if cancel -> remove context
  if send request commit -> send post request -> keep in db
  if send commit -> send put request

  */
let everyModal = [
  modalEditDataLabs,
  modalCreateLabs,
  modalCreateAccount,
];

let modalEditDataLabs = {
  title: "abc",
  img: "img",
  section1: "abc",
  section2: "abc",
  section3: "abc",
  //another dropdown
  researcher: [],
  projects: [],
};
let modalCreateLabs = {
  title: "abc",
  img: "img",
  section1: "abc",
  section2: "abc",
  section3: "abc",
  //leadResearcher:[],
  researcher: [],
  projects: [],
};

let modalEditDataAccount = {
  people: {}, //researcher object
};

let modalCreateAccount = {
  role: [],
  password: "123",
  name: "abc",
  mail: "gmail",
  image: "img",
  related_research: ["id1", "id2"],
  //lead
  related_labs: ["id1", "id2"],
};

let modalCreateNews = {
  topic: "abc",
  section1: "abc",
  section2: "abc",
  img: "img",
  related_research: ["id1", "id2"],
  related_labs: ["id1", "id2"],
};
let modalCreateEvent = {
  topic: "abc",
  section1: "abc",
  section2: "abc",
  img: "img",
  dateEnd: "-",
  dateStart: "-",
  related_research: ["id1", "id2"],
  related_labs: ["id1", "id2"],
};

let modalCreateResearch = {
  title: "abc",
  img: "img",
  section1: "abc",
  section2: "abc",
  section3: "abc",
  leadResearcher: [],
  researcher: [],
};

let modalEditResearch = {
  title: "abc",
  img: "img",
  section1: "abc",
  section2: "abc",
  section3: "abc",
  leadResearcher: [],
  researcher: [],
};
let modalCreatePublication = {
  title: "abc",
  img: "img",
  shortOverview: "abc",
  leadResearcher: [],
  researcher: [],
  link: "abc/",
};
let modalEditPublication = {
  title: "abc",
  img: "img",
  shortOverview: "abc",
  leadResearcher: [],
  researcher: [],
  link: "abc/",
};
