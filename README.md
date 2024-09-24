todos
-frontend of admins (tables)
-frontend admin edits
-inqueries on post of commits/
-make links work

- -do redux state
  -do tanstack
  -add animations/style
-

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

User:
About

latest news - get >> user/news/thumbnail?amount=4 ,[2] - get >> user/news/image?news-id=123
latest events - get >> user/event/thumbnail?amount=4,[2] - get >> user/event/image?event-id=123

Landing
latest news - get >> user/news/thumbnail?amount=4 , [2]- get >> user/news/image?news-id=123
latest events - get >> user/event/thumbnail?amount=4,[2] - get >> user/event/image?event-id=123

News
latest news -
get >> user/news/thumbnail?amount=12&page=1
,[2] - get >> user/news/image-high?news-id=123
,[n]get >> user/news/thumbnail?amount=12&laboratory-id=123
/////////////,[2-many] - get >> user/laboratory/image-low?laboratory-id=123
/////////////news can be either lab/research or publication

Publications
latest publications

- get >> user/publication/thumbnail?amount=12&page=1
- [2]get >> user/laboratory/thumbnail?amount=12&laboratory-id=123
  [2] - get >> user/publication/image-high?publication-id=123
  [2] - get >> user/laboratory/image-low?laboratory-id=123
- [n]get >> user/publication/thumbnail?amount=12&laboratory-id=123&page=1

Research
latest research -

- get >> user/research/thumbnail?amount=12&page=1
  [2]- get >> user/research/image-high?research-id=123
  [2]- get >> user/laboratory/image-low?laboratory-id=123
  [n]- get >> user/research/thumbnail?amount=12&laboratory-id=123&page=1

Labs
latest labs -

- get >> user/laboratory/thumbnail?amount=12&page=1
  [2]- get >> user/research/image-high?research-id=123

Events(no filter)

- get >> user/event/thumbnail?amount=12&page=1
  [2]- get >> user/event/image-high?event-id=123

Researchers

- get >> user/researcher/thumbnail?amount=12&page=1
- [n]get >> user/researcher/thumbnail?amount=12&laboratory-id=123&page=1

Specific Labs

- [cached]get >> user/laboratory/thumbnail?laboratory-id=123 -[cached]get >> user/laboratory/image-high?laboratory-id=123
  -get >> user/news/thumbnail?amount=4&laboratory-id=123&page=1
  -get >> user/event/thumbnail?amount=4&laboratory-id=123&page=1
  -get >> user/research/thumbnail?amount=4&laboratory-id=123&page=1
  -get >> user/publications/thumbnail?amount=4&laboratory-id=123&page=1
  -get >> user/researchers/thumbnail?amount=4&laboratory-id=123&page=1

Specific Research

- [cached]get >> user/research/thumbnail?research-id=123 -[cached]get >> user/research/image-high?research-id=123
  -get >> user/news/thumbnail?amount=4&research-id=123&page=1
  -get >> user/event/thumbnail?amount=4&research-id=123&page=1
  -get >> user/researchers/thumbnail?amount=4&research-id=123&page=1

Specific News

- [cached]get >> user/news/thumbnail?news-id=123 -[cached]get >> user/news/image-high?news-id=123 - -get >> user/news/related-news?news-id=123

- Admin/Researchers -login -Landing -Preview

TODO

- w(<630) , will become button to show nav
  -table of content has to be able to be on screen even when scroll down

after mutate use invalidateQueries to remove cache
