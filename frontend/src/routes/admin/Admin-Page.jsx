import React, { useEffect } from 'react';
import HeroBox from '../../component/others/Hero/Hero-box';
import RecentNews from '../../component/News/Recent-News/Recent-News';
import RecentEvents from '../../component/Events/Recent-Events/Recent-Events';
import { useLocation, useNavigate } from 'react-router-dom';
import AboutDescription from '../../component/Description/About-Description/About-Description';
import TopicAndImage from '../../component/others/Big-Image/Topic-And-Image';
import { eventItems, labData, newsItems } from '../../PlaceHolder-Data/data';
import TopicHeaderText from '../../component/Topic-Header';
import GridCards from '../../component/Grid/Card-Grid';
import DividingRows from '../../component/admin-Component/tables/proto1/table';
import Modals from '../../component/admin-Component/Modal/Modal';
import TableComponent from '../../component/admin-Component/tables/proto2/table-try';
// import { getData } from "../../api/api-method";
// import axios from "axios";
// import { DataFetcherQueue } from "./fetches/fetch-dynamic-page";
import { exampleToFetchData } from '../../PlaceHolder-Data/toFetch';
import MyFormComponent from '../../component/etc/exampleForm';
import LoginComp from 'component/etc/example-login';
import { useDispatch, useSelector } from 'react-redux';
import { useAutoLogin, useGetData, useNormalQueryGet } from 'api/custom-hooks';
import { mainAction } from '../../store/main-slice.js';
import { getDataDynamic, postAutoLogin } from 'api/api-method';
import Spinner1 from 'component/others/spinner';
import DynamicForm from 'component/admin-Component/try-form';
import {
	createFrame,
	editFrame,
	submitFrame,
	deleteFrame,
} from 'component/admin-Component/Modal/input/frame';
import Modal2 from 'component/admin-Component/Modal/input/modal2';
import RecentCommit from './commit-News-Event';
import { createEvent } from '@testing-library/react';

const backendUrl = process.env.REACT_APP_BACKEND_URL;
function AdminPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(mainAction.setIsAdminPage());
	}, [dispatch]);
	let highestRole = useSelector((state) => state.mainSlice.highestRole);

	// dispatch(mainAction.setIsAdminPage(true));

	// let fetchedLabData = useSelector((state) => state.mainSlice.fetchedLabData);
	// let isAdmin = useSelector((state) => state.mainSlice.isAdmin);
	// let adminData = useSelector((state) => state.mainSlice.adminData);
	// if (adminData.length === 0) {
	//   //fetch data using token, if not work then send back to login page
	//   //if token expire while create/edit/commit , then will save data bf go to login page
	// }
	// const token = localStorage.getItem("token");
	// const url = "${backendUrl}/researcher/researcher/auto_login";
	// const { data, loading, error } = useGetData(url, token);

	const { mutate, isLoading, isError, error, isSuccess, data } =
		useAutoLogin();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			mutate(token); // Trigger the auto login with the token
		}
	}, [mutate]);
	useEffect(
		() => console.log('autologindata', data),
		[data, isLoading, isError]
	);
	if (!isLoading) console.log('autologindata', data);
	useEffect(() => {
		if (isSuccess) {
			dispatch(mainAction.setAdminData(data));
			dispatch(mainAction.setHighestRole(data?.Researcher.position));
		}
	}, [isSuccess, data, dispatch]);

	useEffect(() => {
		if (error) {
			navigate('/login');
		}
	}, [error, navigate]);

	// const { data: labData2 } = useNormalQueryGet(
	//   "${backendUrl}/user/research/thumbnail?amount=3",
	//   "research"
	// );
	// const { data: labData3 } = useNormalQueryGet(
	//   "${backendUrl}/user/laboratory/thumbnail?amount=3",
	//   "laboratory"
	// );
	// const { data: labData4 } = useNormalQueryGet(
	//   "${backendUrl}/user/news/thumbnail?amount=3",
	//   "news"
	// );
	// const { data: labData5 } = useNormalQueryGet(
	//   "${backendUrl}/user/researcher/thumbnail?amount=10",
	//   "researcher"
	// );
	// const { data: labData6 } = useNormalQueryGet(
	//   "${backendUrl}/user/publication/thumbnail?amount=10",
	//   "publication"
	// );
	// const { data: labData7 } = useNormalQueryGet(
	//   "${backendUrl}/user/event/thumbnail?amount=3",
	//   "event"
	// );
	// const { data: labData9 } = useNormalQueryGet(
	//   "${backendUrl}/user/event/thumbnail?event_id=0c186d37-45f8-4767-80bc-c304dfdcc355",
	//   "event"
	// );
	// const labData8 = getDataDynamic(
	//   "${backendUrl}/lead_researcher/news/commit",
	//   localStorage.getItem("token")
	// );
	// useEffect(() => {
	//   if (labData2) {
	//     console.log("research", labData2);
	//   }
	//   if (labData3) {
	//     console.log("lab", labData3);
	//   }
	//   if (labData4) {
	//     console.log("news", labData4);
	//   }
	//   if (labData5) {
	//     console.log("people", labData5);
	//   }
	//   if (labData6) {
	//     console.log("publication", labData6);
	//   }
	//   // if (labData8) {
	//   //   console.log("eventCommit", labData8);
	//   // }
	//   if (labData7) {
	//     console.log("event", labData7);
	//   }
	//   if (labData9) {
	//     console.log("an event", labData9);
	//   }
	// }, [
	//   labData2,
	//   labData3,
	//   labData5,
	//   labData4,
	//   labData6,
	//   labData7,
	//   labData8,
	//   labData9,
	// ]);
	// const { data: data2 } = useNormalQueryGet(
	//   "${backendUrl}/user/news/thumbnail/a163c610-7d14-47c0-8748-a8fea6bc36ee",
	//   "news",
	//   "a163c610-7d14-47c0-8748-a8fea6bc36ee"
	// );
	const { data: Ldata } = useNormalQueryGet(
		`${backendUrl}/user/laboratory/thumbnail?amount=10`,
		'laboratory'
	);
	React.useEffect(() => {
		if (Ldata) {
			dispatch(mainAction.setLabData(Ldata));
		}
		// if (data2) {
		//   console.log("data2", data2);
		// }
	}, [Ldata, dispatch]);
	const labData = useSelector((state) => state.mainSlice.labData);
	console.log(labData);
	//
	//admin
	//create admin - can create
	//  lab->go to createLab
	//  event->go to select lab/event/null-> after select lab/event then input data
	//  news -> same as event
	//  research ->go to create Research
	//  people -> go to create people -> can go to assign people to research
	//
	//edit admin
	//edit people -> add researcher to become leadR of a lab
	//->put research to pulciaiton
	//edit lab and research data
	//add free/researcher to a research
	//edit news events commits
	//
	//delete admin
	//delete all
	//
	//leadR
	//create -can create
	//  event
	//news
	//poeple
	//research
	//
	//edit research
	//edit lab
	//edit people
	//edit news/event commits
	//
	//delete research,
	//kcik researcher from research
	//delte publication
	//delte news/events
	//
	//researcher
	//create to commit news/event
	//edit none
	//delete none
	////////////////////////////////////////////////////////////////
	//what need to do
	//figure out a way to mutate data
	//create by create/edit/delete
	// create ->select topic->select ID -> put data
	//edit -> select

	const location = useLocation();
	switch (location.pathname) {
		case '/admin':
			if (highestRole === 'Admin') {
				return (
					<>
						<Modal2 componentTitle='yep' />
						{/* <DynamicForm frame={createFrame.createEvent} />
            <DynamicForm frame={createFrame.createResearch} /> */}

						{/* things that are exclusive to admin page */}
						<div className='bg-gray-300 py-10'>
							<RecentCommit
								toFetchedData={
									exampleToFetchData.recentNewsCommit
								}
								componentTitle='Unverified News'
							/>
							<RecentCommit
								toFetchedData={
									exampleToFetchData.recentEventCommit
								}
								componentTitle='Unverified Events'
							/>
						</div>

						<RecentNews
							toFetchedData={exampleToFetchData.recentNews}
							componentTitle='All News'
						/>
						<RecentNews
							toFetchedData={exampleToFetchData.recentResearch}
							componentTitle='All Researches'
						/>
						<RecentNews
							toFetchedData={exampleToFetchData.recentLab}
							componentTitle='All Laboratory'
						/>
						<RecentNews
							toFetchedData={exampleToFetchData.recentPeople}
							componentTitle='All People'
						/>
						<RecentNews
							toFetchedData={exampleToFetchData.recentPublication}
							componentTitle='All Publications'
						/>
						<RecentEvents
							toFetchedData={exampleToFetchData.recentEvents}
							ComponentTitle='All Events'
						/>
					</>
				);
			} else if (highestRole === 'Researcher') {
				const data2 = data?.Researcher?.Laboratories?.[0]?.LID;
				const data2Title = data?.Researcher?.Laboratories?.[0]?.title;
				const dataTitle = data?.Researcher?.name;
				const data3 = data?.Researcher?.Researches?.[0]?.RID;
				const data3Title = data?.Researcher?.Researches?.[0]?.title;

				return (
					<>
						<Modal2 />
						<h1>Normal Researcher {dataTitle}</h1>

						{data2 && (
							<RecentNews
								toFetchedData={exampleToFetchData.recentLabNews}
								filter={data2 ? { laboratory_id: data2 } : null}
								componentTitle={`${data2Title} LAB News`}
							/>
						)}
						{data2 && (
							<RecentEvents
								toFetchedData={
									exampleToFetchData.recentLabEvent
								}
								filter={data2 ? { laboratory_id: data2 } : null}
								ComponentTitle={`${data2Title} LAB Events`}
							/>
						)}
						{data2 && (
							<RecentNews
								toFetchedData={
									exampleToFetchData.recentLabResearch
								}
								filter={data2 ? { laboratory_id: data2 } : null}
								componentTitle={`${dataTitle}'s Research`}
							/>
						)}
						{data3 && (
							<RecentNews
								toFetchedData={
									exampleToFetchData.recentResearchNews
								}
								filter={data3 ? { research_id: data3 } : null}
								componentTitle={`${data3Title} RESEARCH News`}
							/>
						)}
						{data3 && (
							<RecentEvents
								toFetchedData={
									exampleToFetchData.recentLabEvent
								}
								filter={data3 ? { research_id: data3 } : null}
								ComponentTitle={`${data3Title} RESEARCH Events`}
							/>
						)}
					</>
				);
			} else if (highestRole === 'Lead Researcher') {
				const data2 = data?.Researcher?.Laboratories?.[0]?.LID;
				const data2Title = data?.Researcher?.Laboratories?.[0]?.title;
				const dataTitle = data?.Researcher?.name;
				const data3 = data?.Researcher?.Researches?.[0]?.RID;
				const data3Title = data?.Researcher?.Researches?.[0]?.title;

				return (
					<>
						<Modal2 />
						<h1>Normal Researcher {dataTitle}</h1>

						{data2 && (
							<RecentNews
								toFetchedData={exampleToFetchData.recentLabNews}
								filter={data2 ? { laboratory_id: data2 } : null}
								componentTitle={`${data2Title} LAB News`}
							/>
						)}
						{data2 && (
							<RecentEvents
								toFetchedData={
									exampleToFetchData.recentLabEvent
								}
								filter={data2 ? { laboratory_id: data2 } : null}
								ComponentTitle={`${data2Title} LAB Events`}
							/>
						)}
						{data2 && (
							<RecentNews
								toFetchedData={
									exampleToFetchData.recentLabResearch
								}
								filter={data2 ? { laboratory_id: data2 } : null}
								componentTitle={`${dataTitle}'s Research`}
							/>
						)}
						{data3 && (
							<RecentNews
								toFetchedData={
									exampleToFetchData.recentResearchNews
								}
								filter={data3 ? { research_id: data3 } : null}
								componentTitle={`${data3Title} RESEARCH News`}
							/>
						)}
						{data3 && (
							<RecentEvents
								toFetchedData={
									exampleToFetchData.recentLabEvent
								}
								filter={data3 ? { research_id: data3 } : null}
								ComponentTitle={`${data3Title} RESEARCH Events`}
							/>
						)}
					</>
				);
			} else if (highestRole === 'Free') {
				return (
					<>
						<p>no affiliation</p>
					</>
				);
			} else {
				return <Spinner1 />;
			}

		case '/admin/about':
			return <>no mutation</>;
		case '/admin/events':
			return (
				<>
					{' '}
					<Modal2 />
					<TopicHeaderText topic='Events' />
					<GridCards
						toFetchedData={exampleToFetchData.recentGridEvents}
						topic='events'
						url={`${backendUrl}/user/event/thumbnail?`}
						fetchedLabData={labData}
						useFilterButton={true}
					/>
				</>
			);
		case '/admin/news':
			return (
				<>
					{' '}
					<Modal2 />
					<TopicHeaderText topic='News' />
					<GridCards
						toFetchedData={exampleToFetchData.recentGridNews}
						url={`${backendUrl}/user/news/thumbnail?`}
						fetchedLabData={labData}
						useFilterButton={true}
					/>
				</>
			);
		case '/admin/publications':
			return (
				<>
					{' '}
					<Modal2 />
					<TopicHeaderText topic='Publications' />
					<GridCards
						toFetchedData={exampleToFetchData.recentGridPublication}
						url={`${backendUrl}/user/publication/thumbnail?`}
						fetchedLabData={labData}
						useFilterButton={true}
						publicationLink={'https://www.se.kmitl.ac.th/'}
					/>
				</>
			);
		case '/admin/research':
			return (
				<>
					{' '}
					<Modal2 />
					<TopicHeaderText topic='Research' />
					<GridCards
						toFetchedData={exampleToFetchData.recentGridResearch}
						url={`${backendUrl}/user/research/thumbnail?`}
						fetchedLabData={labData}
						useFilterButton={true}
					/>
				</>
			);
		case '/admin/laboratory':
			return (
				<>
					{' '}
					<Modal2 />
					<TopicHeaderText topic='Laboratory' />
					<GridCards
						toFetchedData={exampleToFetchData.recentGridLaboratory}
						url={`${backendUrl}/user/laboratory/thumbnail?`}
						fetchedLabData={labData}
						useFilterButton={true}
					/>
				</>
			);
		case '/admin/people':
			return (
				<>
					{' '}
					<Modal2 />
					<TopicHeaderText topic='People' />
					<GridCards
						toFetchedData={exampleToFetchData.recentGridResearcher}
						url={`${backendUrl}/user/researcher/thumbnail?`}
						fetchedLabData={labData}
						useFilterButton={true}
					/>
				</>
			);
		case '/admin/commit':
			return (
				<>
					{' '}
					<Modal2 />
					<TopicHeaderText topic='Commit' />
					<GridCards
						toFetchedData={exampleToFetchData.recentGridResearcher}
						url={`${backendUrl}/user/researcher/thumbnail?`}
						fetchedLabData={labData}
						useFilterButton={true}
					/>
				</>
			);
		default:
			<></>;
	}
	// { index: true, element: <MainPages /> },
	// { path: "about", element: <MainPages /> },
	// { path: "events", element: <MainPages /> },
	// { path: "labs", element: <MainPages /> },
	// { path: "news", element: <MainPages /> },
	// { path: "publications", element: <MainPages /> },
	// { path: "research", element: <MainPages /> },
	// { path: "events", element: <MainPages /> },
	// { path: "people", element: <MainPages /> },
	// { path: "labs/:labID", element: <DynamicLabPage /> },
}
export default AdminPage;
