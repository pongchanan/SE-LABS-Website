const backendUrl = process.env.REACT_APP_BACKEND_URL;
export const exampleToFetchData = {
	recentNewsCommit: {
		id: 'recentNewsCommit',
		url: `${backendUrl}/lead_researcher/news/commit?`,
		// type: "n",
		pageSize: 5,
	},
	recentEventCommit: {
		id: 'recentEventCommit',
		url: `${backendUrl}/lead_researcher/event/commit?`,
		// type: "n",
		pageSize: 3,
	},
	recentNews: {
		id: 'recentNews',
		url: `${backendUrl}/user/news/thumbnail?`,
		// type: "n",
		pageSize: 5,
	},
	recentEvents: {
		id: 'recentEvents',
		url: `${backendUrl}/user/event/thumbnail?`,
		pageSize: 3,
	},
	recentLab: {
		id: 'recentLab',
		url: `${backendUrl}/user/laboratory/thumbnail?`,
		pageSize: 5,
	},
	recentPublication: {
		id: 'recentPublication',
		url: `${backendUrl}/user/publication/thumbnail?`,
		pageSize: 5,
	},
	recentResearch: {
		id: 'recentResearch',
		url: `${backendUrl}/user/research/thumbnail?`,
		pageSize: 5,
	},
	recentPeople: {
		id: 'recentPeople',
		url: `${backendUrl}/user/researcher/thumbnail?`,
		pageSize: 5,
	},
	recentLabNews: {
		id: 'labNews',
		url: `${backendUrl}/user/news/thumbnail?`,
		pageSize: 5,
		param: {}, //laboratory_id
	},
	recentLabEvent: {
		id: 'labEvent',
		url: `${backendUrl}/user/event/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id,research_id
	},
	recentLabPublication: {
		id: 'labPublication',
		url: `${backendUrl}/user/publication/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},
	recentLabResearch: {
		id: 'labResearch',
		url: `${backendUrl}/user/research/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},
	recentNewsLaboratory: {
		id: 'newsLaboratory',
		url: `${backendUrl}/user/laboratory/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},
	recentNewsResearch: {
		id: 'newsResearch',
		url: `${backendUrl}/user/research/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},
	recentLabResearcher: {
		id: 'labResearcher',
		url: `${backendUrl}/user/researcher/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},
	recentResearcherLab: {
		id: 'researcherLab',
		url: `${backendUrl}/user/laboratory/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},
	recentResearcherResearch: {
		id: 'researcherResearch',
		url: `${backendUrl}/user/research/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},
	recentResearchResearcher: {
		id: 'researchResearcher',
		url: `${backendUrl}/user/researcher/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},
	recentResearchNews: {
		id: 'researchNews',
		url: `${backendUrl}/user/news/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},
	recentResearchEvent: {
		id: 'researchEvent',
		url: `${backendUrl}/user/event/thumbnail?`,
		pageSize: 4,
		param: {}, //laboratory_id, maybe research_id
	},

	postNews: {
		title: 'str',
		body: 'str',
		related_laboratory: {
			LID: 'str',
			related_research: {
				RID: 'str',
			},
		},
	},
	recentGridNews: {
		id: 'recentGridNews',
		// type: "n",
		pageSize: 8,
	},
	recentGridEvents: {
		id: 'recentGridEvents',
		// type: "n",
		pageSize: 8,
	},
	recentGridLaboratory: {
		id: 'recentGridLaboratory',
		// type: "n",
		pageSize: 4,
	},
	recentGridResearcher: {
		id: 'recentGridResearcher',
		// type: "n",
		pageSize: 8,
	},
	recentGridPublication: {
		id: 'recentGridPublication',
		// type: "n",
		pageSize: 8,
	},
	recentGridResearch: {
		id: 'recentGridResearch',
		// type: "n",
		pageSize: 8,
	},
	relatedNews: {
		id: 'relatedNews',
		url: `${backendUrl}/user/news/related_news?`,
		// type: "n",
		pageSize: 4,
	},
	editLab: {},
	createNews: {},
	createResearch: {},
};
